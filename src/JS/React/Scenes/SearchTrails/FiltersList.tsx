import {
  Button,
  ClickAwayListener,
  Fade,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Popper,
  Select,
  Slider,
  StandardProps,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { StyleClassKey } from "JS/Typescript";
import React, { useState } from "react";

import clsx from "clsx";
import { ActivityType, TrailsFilter } from "JS/Models/General";
import { getCode, getNames } from "country-list";
import { activityTypeToString, makeEnumArray } from "JS/Helpers/Helpers";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  buttonLeftMargin: {
    marginLeft: theme.spacing(2),
  },
  topFields: {
    width: 150,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(1),
    },
  },
  sliderWrappers: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(0, 2),
    width: "50vw",
    [theme.breakpoints.down("md")]: {
      width: "80vw",
    },
  },
}));

export type FiltersListClassKey = StyleClassKey<typeof useStyles>;

export interface FiltersListProps
  extends StandardProps<{}, FiltersListClassKey> {
  setFilter: (val: TrailsFilter) => void;
  filter: TrailsFilter;
}

export const FiltersList = (props: FiltersListProps) => {
  const classes = useStyles(props);
  const { className, setFilter, filter, ...rest } = props;

  const [distanceAnchorEl, setDistanceAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  const [durationAnchorEl, setDurationAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const [showSliders, setShowSliders] = useState<{
    distance: boolean;
    duration: boolean;
  }>({
    distance: false,
    duration: false,
  });

  const [distanceSlider, setDistanceSlider] = useState<number[]>([0, 200]);
  const [durationSlider, setDurationSlider] = useState<number[]>([0, 100]);

  return (
    <div>
      <FormControl
        size="small"
        variant="outlined"
        className={clsx(classes.buttonLeftMargin, classes.topFields)}
      >
        <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
        <Select
          value={filter.country}
          onChange={(e) => {
            setFilter({
              ...filter,
              country: e.target.value as string,
            });
          }}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Country"
        >
          {getNames().map((name) => (
            <MenuItem key={name} value={getCode(name)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        size="small"
        variant="outlined"
        className={clsx(classes.buttonLeftMargin, classes.topFields)}
      >
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
      <TextField
        size="small"
        id="outlined-basic"
        label="Search (name)"
        variant="outlined"
        className={clsx(classes.buttonLeftMargin, classes.topFields)}
        value={filter.comment}
        onChange={(e) => {
          setFilter({
            ...filter,
            comment: e.target.value,
          });
        }}
      />

      <ClickAwayListener
        onClickAway={() => {
          setShowSliders({
            ...showSliders,
            distance: false,
          });
        }}
      >
        <Button
          className={clsx(classes.buttonLeftMargin, classes.topFields)}
          variant="outlined"
          color="primary"
          onClick={(e) => {
            setShowSliders({
              ...showSliders,
              distance: !showSliders.distance,
            });
            setDistanceAnchorEl(e.currentTarget);
          }}
        >
          Distance
        </Button>
      </ClickAwayListener>

      <Popper
        open={showSliders.distance}
        anchorEl={distanceAnchorEl}
        placement={"bottom"}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.sliderWrappers}>
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
            </Paper>
          </Fade>
        )}
      </Popper>
      <ClickAwayListener
        onClickAway={() => {
          setShowSliders({
            ...showSliders,
            duration: false,
          });
        }}
      >
        <Button
          className={clsx(classes.buttonLeftMargin, classes.topFields)}
          variant="outlined"
          color="primary"
          onClick={(e) => {
            setShowSliders({
              ...showSliders,
              duration: !showSliders.duration,
            });
            setDurationAnchorEl(e.currentTarget);
          }}
        >
          Duration
        </Button>
      </ClickAwayListener>

      <Popper
        open={showSliders.duration}
        anchorEl={durationAnchorEl}
        placement={"bottom"}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.sliderWrappers}>
              <Typography
                variant="button"
                style={{
                  fontSize: "0.7rem",
                  color: "grey",
                }}
              >
                Time duration (Hours)
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
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
              />
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};
