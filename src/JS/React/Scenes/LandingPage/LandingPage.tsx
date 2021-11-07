import React from "react";
import { Grid, StandardProps, Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { StyleClassKey } from "JS/Typescript";
import { getImageSrc, ImageNames } from "JS/Helpers/Media";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import ReactTextRotator from "react-text-rotator";
import clsx from "clsx";
import { Reviews } from "./Reviews";
import { FeaturesTabs } from "./FeaturesTabs";
import { Preview } from "./Preview";
import { Stats } from "./Stats";
import { ScreenShots } from "./ScreenShots";
import { Download } from "./Download";
import { AppRoundedButton } from "JS/React/Components/AppRoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout } from "../Layout";
import { useHistory } from "react-router-dom";
import { useRouting } from "JS/React/Hooks/Routes";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(6),
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 4),
  },
  title: {
    fontWeight: "bolder",
  },
  mapContainer: {
    display: "flex",
    justifyContent: "center",
  },
  divider: {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${getImageSrc(ImageNames.DIVIDER)})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "contain",
  },
  mobileAppSection: {
    background: theme.palette.grey["900"],
    color: theme.palette.common.white,
    padding: theme.spacing(10, 2, 10, 2),
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
  reviewContainer: {
    margin: theme.spacing(2, 0),
  },
  featuresContainer: {
    background: theme.palette.grey["900"],
    padding: theme.spacing(10, 2),
  },
  features: {
    color: theme.palette.common.white,
    textAlign: "center",
  },
  exploreButtonContainer: {
    textAlign: "center",
    margin: theme.spacing(3, 0),
  },
  searchIcon: {
    fontSize: "1rem",
    marginRight: theme.spacing(1),
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

  const { routeBuilder } = useRouting();
  const routeProvider = routeBuilder();

  const history = useHistory();

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
    <Layout>
      <div className={classes.root} {...rest}>
        <div className={classes.titleContainer}>
          <div>
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
        </div>

        <div className={classes.exploreButtonContainer}>
          <AppRoundedButton
            buttonVariant="blue"
            padding="large"
            onClick={() => history.push(routeProvider.react.searchTrails())}
          >
            <FontAwesomeIcon
              className={classes.searchIcon}
              icon={["fas", "search-location"]}
            />
            <Typography variant="body1">Explore</Typography>
          </AppRoundedButton>
        </div>

        <section className={classes.mapContainer}>
          <div
            style={{
              width: "85vw",
            }}
          >
            <Map height={600} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
              <ZoomControl />
              <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
          </div>
        </section>

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
                <ReactTextRotator
                  content={rotatorContent}
                  transitionTime={200}
                />
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
        <section className={classes.reviewContainer}>
          <Reviews />
        </section>
        <section className={classes.featuresContainer}>
          <div className={classes.features}>
            <Typography
              style={{
                marginBottom: "10px",
              }}
              className={clsx(classes.bolderText)}
              variant="h3"
            >
              FEATURES
            </Typography>

            <Typography
              style={{
                maxWidth: "700px",
                marginRight: "auto",
                marginLeft: "auto",
                marginBottom: "20px",
              }}
              variant="h6"
            >
              ALTLAS was designed based on input for the most important needs,
              by people who love the nature. So it offers all the required
              features.
            </Typography>
          </div>
          <FeaturesTabs />
        </section>
        <Preview />
        <Stats />
        <ScreenShots />
        <Download />
      </div>
    </Layout>
  );
};
