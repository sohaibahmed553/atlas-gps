import {
  Button,
  ClickAwayListener,
  Fade,
  FormControl,
  Grid,
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
import clsx from "clsx";
import { StyleClassKey } from "JS/Typescript";
import React, { useState } from "react";
import { Layout } from "../Layout";
import { getCode, getNames } from "country-list";
import { makeEnumArray } from "JS/Helpers/Helpers";
import { ActivityType, TrailsFilter } from "JS/Models/General";
import { AppRoundedButton } from "../../Components/AppRoundedButton";
import { useTrails } from "JS/React/Hooks/Trails";
import { Trails } from "./Trails";
import { Map, Marker, ZoomControl } from "pigeon-maps";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 60px)",
    maxHeight: "calc(100vh - 60px)",
  },
  buttonLeftMargin: {
    marginLeft: theme.spacing(2),
  },
  topFields: {
    width: 150,
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(1),
    },
  },
  buttonSection: {
    padding: theme.spacing(3, 5),
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
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
  trailsAndMapContainer: {
    padding: theme.spacing(2, 2),
    overflow: "auto",
    background: theme.palette.grey[200],
    height: "100%",
  },
  trailsContainer: {
    paddingRight: theme.spacing(2),
    height: "100%",
    overflow: "auto",
  },
  mapContainer: {
    height: "100%",
  },
}));

export type SearchTrailsClassKey = StyleClassKey<typeof useStyles>;

export interface SearchTrailsProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    SearchTrailsClassKey
  > {}

export const SearchTrails = (props: SearchTrailsProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  const [filter, setFilter] = useState<TrailsFilter>({
    activity: "" as ActivityType,
    country: "",
    distance: null,
    duration: null,
    name: "",
  });

  const [showSliders, setShowSliders] = useState<{
    distance: boolean;
    duration: boolean;
  }>({
    distance: false,
    duration: false,
  });

  const [distanceAnchorEl, setDistanceAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  const [durationAnchorEl, setDurationAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  return (
    <Layout disableFooter>
      <div className={classes.root}>
        <section className={classes.buttonSection}>
          <div>
            <FormControl
              size="small"
              variant="outlined"
              className={clsx(classes.buttonLeftMargin, classes.topFields)}
            >
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
                    {type}
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
              value={filter.name}
              onChange={(e) => {
                setFilter({
                  ...filter,
                  name: e.target.value,
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
                      value={filter.distance}
                      onChange={(e, newValue: number) => {
                        setFilter({
                          ...filter,
                          distance: newValue,
                        });
                      }}
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
                      value={filter.duration}
                      onChange={(e, newValue: number) => {
                        setFilter({
                          ...filter,
                          duration: newValue,
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
          <div>
            <AppRoundedButton buttonVariant="blue" padding="normal">
              <Typography variant="body1">Search</Typography>
            </AppRoundedButton>
          </div>
        </section>
        <Grid container className={classes.trailsAndMapContainer}>
          <Grid item md={6} sm={12} xs={12} className={classes.trailsContainer}>
            <Trails filter={filter} setFilter={setFilter} />
          </Grid>
          <Grid item md={6} sm={12} xs={12} className={classes.mapContainer}>
            <Map defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
              <ZoomControl />
              <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};
