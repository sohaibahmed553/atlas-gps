import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Slider,
  StandardProps,
  Switch,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { StyleClassKey } from "JS/Typescript";
import React, { useState } from "react";

import { ActivityType, TrailsFilter } from "JS/Models/General";
import { getCode, getNames } from "country-list";
import { activityTypeToString, makeEnumArray } from "JS/Helpers/Helpers";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  dialogPaper: {
    minWidth: "700px",
  },
}));

export type FiltersModalClassKey = StyleClassKey<typeof useStyles>;

export interface FiltersModalProps
  extends StandardProps<{}, FiltersModalClassKey> {
  setFilter: (val: TrailsFilter) => void;
  filter: TrailsFilter;
  open: boolean;
  onClose: () => void;
  onSearch: (filter: TrailsFilter) => void;
}

export const FiltersModal = (props: FiltersModalProps) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { className, setFilter, filter, open, onClose, onSearch, ...rest } =
    props;

  const [distanceSlider, setDistanceSlider] = useState<number[]>([0, 200]);
  const [durationSlider, setDurationSlider] = useState<number[]>([0, 50]);

  return (
    <Dialog
      classes={{
        paper: !fullScreen && classes.dialogPaper,
      }}
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>Filters</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Grid container spacing={4}>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                size="small"
                id="outlined-basic"
                label="Search (name)"
                variant="outlined"
                value={filter.comment}
                onChange={(e) => {
                  setFilter({
                    ...filter,
                    comment: e.target.value,
                  });
                }}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <FormControl size="small" variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Activities
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Activities"
                  value={filter.activity}
                  onChange={(e) => {
                    setFilter({
                      ...filter,
                      activity: e.target.value as ActivityType,
                    });
                  }}
                >
                  {makeEnumArray(ActivityType).map((type) => (
                    <MenuItem key={type} value={type}>
                      {activityTypeToString(type)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12}>
              <FormControl size="small" variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Country
                </InputLabel>
                <Select
                  value={filter.country}
                  onChange={(e) => {
                    setFilter({
                      ...filter,
                      country: e.target.value as string,
                    });
                  }}
                  label="Country"
                >
                  {getNames().map((name) => (
                    <MenuItem key={name} value={getCode(name)}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2">Duration</Typography>
                <Switch
                  checked={filter.filterByDistance}
                  onChange={(e) => {
                    setFilter({
                      ...filter,
                      filterByDistance: e.target.checked,
                    });
                  }}
                  color="primary"
                  name="checkedB"
                />
                <Typography variant="body2">Distance</Typography>
              </div>
            </Grid>
            <Grid item md={8} xs={12}>
              {filter.filterByDistance && (
                <>
                  <Typography
                    variant="button"
                    style={{
                      fontSize: "0.7rem",
                      color: "grey",
                    }}
                  >
                    Distance (Kilometers)
                  </Typography>
                  <Slider
                    step={0.1}
                    value={distanceSlider}
                    onChange={(e, newValue: number[]) => {
                      setDistanceSlider(newValue);
                      setFilter({
                        ...filter,
                        minDistance: newValue[0],
                        maxDistance: newValue[1],
                      });
                    }}
                    max={200}
                    min={0}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                  />
                </>
              )}
              {!filter.filterByDistance && (
                <>
                  <Typography
                    variant="button"
                    style={{
                      fontSize: "0.7rem",
                      color: "grey",
                    }}
                  >
                    Duration (Hours)
                  </Typography>
                  <Slider
                    step={0.1}
                    value={durationSlider}
                    onChange={(e, newValue: number[]) => {
                      setDurationSlider(newValue);
                      setFilter({
                        ...filter,
                        minDuration: newValue[0],
                        maxDuration: newValue[1],
                      });
                    }}
                    max={50}
                    min={0}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                  />
                </>
              )}
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onSearch(filter);
            onClose();
          }}
          color="primary"
          autoFocus
        >
          Search
        </Button>
      </DialogActions>
    </Dialog>
  );
};
