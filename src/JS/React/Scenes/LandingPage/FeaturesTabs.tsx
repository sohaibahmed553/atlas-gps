import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Grid,
  makeStyles,
  StandardProps,
  Tab,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { getImageSrc, ImageNames } from "JS/Helpers/Media";
import AppTabs, { TabPanel } from "JS/React/Components/AppTabs";
import SwipeableViews from "react-swipeable-views";
import { StyleClassKey } from "JS/Typescript";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  tab: {
    fontSize: "1rem",
    color: theme.palette.common.white,
    fontWeight: "bolder",
  },
  tabIcon: {
    marginRight: theme.spacing(1),
  },
  marginTop: {
    marginTop: theme.spacing(3),
  },
  featuresContainers: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },

  leftMediaContainer: {
    paddingTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(2),
      alignItems: "flex-start",
    },
  },
  rightMediaContainer: {
    paddingTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(2),
    },
  },
  mediaDetailRoot: {
    display: "flex",
    marginBottom: theme.spacing(7),
  },
  mediaDetailRootMissingDetail: {
    display: "flex",
    marginBottom: theme.spacing(4),
  },
  mediaTitle: {
    fontWeight: "bolder",
    color: theme.palette.common.white,
  },
  mediaDetail: {
    color: theme.palette.common.white,
    marginTop: theme.spacing(1),
  },
  mediaIcon: {
    fontSize: "1.5rem",
  },
  mediaIconAvatar: {
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(8),
    height: theme.spacing(8),
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  textContainerLeft: {
    marginLeft: theme.spacing(2),
    textAlign: "left",
  },
  textContainerRight: {
    marginRight: theme.spacing(2),
    textAlign: "right",
  },
  phoneImage: {
    width: "300px",
    [theme.breakpoints.down(theme.navbar.breakpoint)]: {
      width: "200px",
    },
  },
  tabPanel: {
    overflow: "hidden",
  },
  bolderFont: {
    fontWeight: "bolder",
  },
}));

export type FeaturesTabsClassKey = StyleClassKey<typeof useStyles>;

export interface FeaturesTabsProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    FeaturesTabsClassKey
  > {}
export const FeaturesTabs = (props: FeaturesTabsProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  const [activeTab, setActiveTab] = useState(0);

  const isTablet = useMediaQuery({ query: "(max-device-width: 1280px)" });

  const tabs = [
    {
      label: `Discovering`,
      icon: (
        <FontAwesomeIcon icon={["fas", "search"]} className={classes.tabIcon} />
      ),
    },
    {
      label: "Monitoring",
      icon: (
        <FontAwesomeIcon
          icon={["fas", "binoculars"]}
          className={classes.tabIcon}
        />
      ),
    },
    {
      label: "Recording",
      icon: (
        <FontAwesomeIcon
          icon={["fas", "compact-disc"]}
          className={classes.tabIcon}
        />
      ),
    },
  ];

  const discoveringContainer = (
    <Grid container justify="center" className={classes.featuresContainers}>
      <Grid item lg={4} md={6} sm={12}>
        <div className={classes.leftMediaContainer}>
          <MediaDetail
            title="Search trails"
            detail="Find the best hiking trails around the world."
            iconPosition={isTablet ? "left" : "right"}
            icon={
              <FontAwesomeIcon
                className={classes.mediaIcon}
                icon={["fas", "search"]}
              />
            }
          />
          <MediaDetail
            title="Find nearby trails"
            detail="Find nearby trails that was recorded by the app users."
            iconPosition={isTablet ? "left" : "right"}
            icon={
              <FontAwesomeIcon
                className={classes.mediaIcon}
                icon={["fas", "search-location"]}
              />
            }
          />
        </div>
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <img
          alt="features smartphone"
          src={getImageSrc(ImageNames.FEATURES_SMARTPHONE_DISCOVERING)}
          className={classes.phoneImage}
        />
      </Grid>
      <Grid item lg={4} md={6} sm={12}>
        <div className={classes.rightMediaContainer}>
          <MediaDetail
            title="Various activities"
            detail="Find elevation, discover hiking trails with elevation map."
            iconPosition="left"
            icon={
              <FontAwesomeIcon
                className={classes.mediaIcon}
                icon={["fas", "layer-group"]}
              />
            }
          />
          <MediaDetail
            title="Find point of intereset"
            detail="Find the best points of interest around the world."
            iconPosition="left"
            icon={
              <FontAwesomeIcon
                className={classes.mediaIcon}
                icon={["fas", "map-marked-alt"]}
              />
            }
          />
        </div>
      </Grid>
    </Grid>
  );

  const monitoringContainer = (
    <Grid container justify="center" className={classes.featuresContainers}>
      <Grid item lg={4} md={12} sm={12}>
        <img
          alt="features smartphone"
          src={getImageSrc(ImageNames.FEATURES_SMARTPHONE_MONITORING)}
          className={classes.phoneImage}
        />
      </Grid>

      <Grid item lg={4} md={6} sm={12}>
        <div className={classes.rightMediaContainer}>
          <MediaDetail
            title="Altimeter"
            detail="Find your elevation. ALTLAS provide you the best elevation finder with GPS or Barometer."
            iconPosition="left"
            icon={
              <FontAwesomeIcon
                className={classes.mediaIcon}
                icon={["fas", "mountain"]}
              />
            }
          />
          <MediaDetail
            title="Speedometer"
            detail="Get your speed on real time with the GPS sensor of your phone."
            iconPosition="left"
            icon={
              <FontAwesomeIcon
                className={classes.mediaIcon}
                icon={["fas", "tachometer-alt"]}
              />
            }
          />
        </div>
      </Grid>
      <Grid item lg={4} md={6} sm={12}>
        <div className={classes.rightMediaContainer}>
          <MediaDetail
            title="Elevation Gain"
            detail="Get the Elevation gain during your activites."
            iconPosition="left"
            icon={
              <FontAwesomeIcon
                className={classes.mediaIcon}
                icon={["fas", "long-arrow-alt-up"]}
              />
            }
          />
          <MediaDetail
            title="Compass"
            detail="ALTLAS has built-in compass to help you navigate better."
            iconPosition="left"
            icon={
              <FontAwesomeIcon
                className={classes.mediaIcon}
                icon={["far", "compass"]}
              />
            }
          />
        </div>
      </Grid>
    </Grid>
  );

  const recordingContainer = (
    <Grid container justify="center" className={classes.featuresContainers}>
      <Grid item lg={6} md={12}>
        <div className={classes.rightMediaContainer}>
          <MediaDetail
            title="Track recording"
            iconPosition="left"
            icon={
              <FontAwesomeIcon
                className={classes.mediaIcon}
                icon={["fas", "compact-disc"]}
              />
            }
          />
          <MediaDetail
            title="Share trails"
            iconPosition="left"
            icon={
              <FontAwesomeIcon
                className={classes.mediaIcon}
                icon={["fas", "share-alt"]}
              />
            }
          />
          <div
            style={{
              color: "white",
              textAlign: "left",
              marginBottom: "16px",
            }}
          >
            <Typography
              style={{
                marginBottom: "16px",
              }}
              variant="h5"
              className={classes.bolderFont}
            >
              Track recording
            </Typography>
            <Typography variant="body1">
              ALTLAS allows you to record your activities and share them with
              all users.
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item lg={6} md={12}>
        <img
          alt="features smartphone"
          src={getImageSrc(ImageNames.FEATURES_SMARTPHONE_RECORDING)}
          className={classes.phoneImage}
        />
      </Grid>
    </Grid>
  );

  return (
    <div className={classes.root} {...rest}>
      <AppTabs
        value={activeTab}
        onTabChange={(e, value) => setActiveTab(value)}
        indicatorColor="secondary"
        textColor="secondary"
        variant="standard"
        centered
        orientation={isTablet ? "vertical" : "horizontal"}
        TabIndicatorProps={
          isTablet && {
            style: {
              display: "none",
            },
          }
        }
      >
        {tabs.map((tab) => (
          <Tab
            classes={{
              root: classes.tab,
            }}
            label={
              <span>
                {tab.icon}
                {tab.label}
              </span>
            }
          />
        ))}
      </AppTabs>
      <SwipeableViews
        axis={"x"}
        index={activeTab}
        onChangeIndex={(idx) => setActiveTab(idx)}
      >
        <TabPanel className={classes.tabPanel} value={activeTab} index={0}>
          {discoveringContainer}
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={activeTab} index={1}>
          {monitoringContainer}
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={activeTab} index={2}>
          {recordingContainer}
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

interface MediaDetailProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    FeaturesTabsClassKey
  > {
  title: string;
  detail?: string;
  icon: React.ReactNode;
  iconPosition?: "right" | "left";
}

const MediaDetail = (props: MediaDetailProps) => {
  const classes = useStyles(props);
  const { title, detail, icon, iconPosition = "right", ...rest } = props;

  return (
    <div
      className={clsx(
        detail ? classes.mediaDetailRoot : classes.mediaDetailRootMissingDetail
      )}
      {...rest}
    >
      {iconPosition === "left" && (
        <div>
          <Avatar className={classes.mediaIconAvatar}>{icon}</Avatar>
        </div>
      )}
      <div
        className={clsx(
          iconPosition === "right"
            ? classes.textContainerRight
            : classes.textContainerLeft
        )}
      >
        <Typography className={classes.mediaTitle} variant="h5">
          {title}
        </Typography>

        {detail && (
          <Typography variant="body1" className={classes.mediaDetail}>
            {detail}
          </Typography>
        )}
      </div>
      {iconPosition === "right" && (
        <div>
          <Avatar className={classes.mediaIconAvatar}>{icon}</Avatar>
        </div>
      )}
    </div>
  );
};
