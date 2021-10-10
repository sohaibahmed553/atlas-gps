import React from "react";
import { Grid, StandardProps, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { StyleClassKey } from "../../../Typescript";
import { getImageSrc, ImageNames } from "JS/Helpers/Image";
import { Map, Marker } from "pigeon-maps";
import ReactTextRotator from "react-text-rotator";
import clsx from "clsx";
import { Reviews } from "./Reviews";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    padding: theme.spacing(0, 4),
  },
  title: {
    fontWeight: "bolder",
  },
  mapContainer: {
    display: "flex",
    width: "85vw",
  },
  divider: {
    width: "100vw",
    height: "300px",
    backgroundImage: `url(${getImageSrc(ImageNames.DIVIDER)})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "contain",
  },
  mobileAppSection: {
    background: "#191919",
    color: theme.palette.common.white,
    padding: theme.spacing(10, 0, 0, 0),
    display: "flex",
    width: "100%",
  },
  mobileAppInfoSection: {
    [theme.breakpoints.down(theme.navbar.breakpoint)]: {
      textAlign: "center",
      marginBottom: theme.spacing(5),
    },
  },
  bolderText: {
    fontWeight: "bolder",
  },
  rotationContent: {
    color: theme.palette.primary.light,
  },
  phoneImage: {
    width: "400px",
    [theme.breakpoints.down(theme.navbar.breakpoint)]: {
      width: "250px",
    },
  },
}));

export type LandingPageClassKey = StyleClassKey<typeof useStyles>;

export interface LandingPageProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    LandingPageClassKey
  > {}

export const LandingPage = (props: LandingPageProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  const rotatorContent = [
    {
      text: "TREKKERS",
      animation: "fade",
    },
    {
      text: "TRAVELERS",
      animation: "fade",
    },
    {
      text: "CYCLISTS",
      animation: "fade",
    },
    {
      text: "RUNNERS",
      animation: "fade",
    },
    {
      text: "CLIMBERS",
      animation: "fade",
    },
  ];

  return (
    <div className={classes.root} {...rest}>
      <div className={classes.titleContainer}>
        <Typography align="left" variant="h3" className={classes.title}>
          Discover The Amazing World with the ALTLAS-APP
        </Typography>
        <Typography align="left" variant="h6">
          Download the app to view the full GPX trails
        </Typography>

        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=altitude.alarm.erol.apps"
        >
          <img
            alt="download the Android App"
            src={getImageSrc(ImageNames.GOOGLE_PLAY_BADGE)}
            height="80"
          />
        </a>
      </div>

      <span className={classes.mapContainer}>
        <Map height={600} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </span>

      <div className={classes.divider}></div>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.mobileAppSection}
      >
        <Grid
          item
          md={6}
          justify="center"
          direction="column"
          alignItems="center"
          style={{
            display: "flex",
          }}
        >
          <div className={classes.mobileAppInfoSection}>
            <Typography className={classes.bolderText} variant="h3">
              ALTLAS
            </Typography>
            <Typography className={classes.bolderText} variant="h3">
              MADE FOR
            </Typography>
            <Typography
              className={clsx(classes.bolderText, classes.rotationContent)}
              variant="h3"
            >
              <ReactTextRotator content={rotatorContent} transitionTime={200} />
            </Typography>
            <Typography variant="h6">
              <span
                style={{
                  fontWeight: "bolder",
                }}
              >
                ALTLAS's
              </span>{" "}
              mobile app and website provides GPS/GPX trails <br /> discovery,
              altitude monitoring, track and record activites.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          md={6}
          justify="center"
          direction="column"
          alignItems="center"
          style={{
            textAlign: "center",
          }}
        >
          <img
            alt="header smartphone"
            src={getImageSrc(ImageNames.HEADER_SMARTPHONES)}
            className={classes.phoneImage}
          />
        </Grid>
      </Grid>
      <Reviews />
    </div>
  );
};
