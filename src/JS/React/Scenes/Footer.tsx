import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Grid,
  makeStyles,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useMediaQuery } from "react-responsive";
import { StyleClassKey } from "JS/Typescript";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.grey["900"],
    color: theme.palette.common.white,
  },
  bolderText: {
    fontWeight: "bolder",
  },
  heading: {
    marginBottom: theme.spacing(1),
  },
  contentContainer: {
    padding: theme.spacing(10, 0),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3, 5),
    },
  },
  mediaIconAvatar: {
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(6),
    height: theme.spacing(6),
    cursor: "pointer",
    margin: theme.spacing(0, 1),
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  contactInfoContainer: {
    display: "flex",
    flexDirection: "column",
  },

  contactInfo: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(0),
    },
  },

  gridItem: {
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0),
    },
  },
}));

export type FooterClassKey = StyleClassKey<typeof useStyles>;

export interface FooterProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    FooterClassKey
  > {}
export const Footer = (props: FooterProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;
  const isTablet = useMediaQuery({ query: "(min-device-width: 800px)" });

  return (
    <section className={classes.root}>
      <Grid
        container
        spacing={isTablet ? 2 : 0}
        className={classes.contentContainer}
      >
        <Grid item lg={3}></Grid>
        <Grid item lg={2} md={12} className={classes.gridItem}>
          <Typography
            className={clsx(classes.bolderText, classes.heading)}
            variant="h6"
          >
            About ALTLAS
          </Typography>
          <Typography variant="body1">
            About ALTLAS ALTLAS - Activity tracker provides Altitude monitoring,
            track information, record your activities with GPS navigation and
            planning tools.
          </Typography>
        </Grid>
        <Grid item lg={2} md={12} className={classes.gridItem}>
          <Typography
            className={clsx(classes.bolderText, classes.heading)}
            variant="h6"
          >
            Links
          </Typography>
          <Typography variant="body1">
            Important: Terms & Conditions, Privacy Policy Useful: Colorpicker,
            Icon Library, Illustrations Menu: Article, Features, Pricing,
            Contact
          </Typography>
        </Grid>
        <Grid
          item
          lg={2}
          md={12}
          className={clsx(classes.contactInfoContainer, classes.gridItem)}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <Avatar className={classes.mediaIconAvatar}>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </Avatar>
            <Avatar className={classes.mediaIconAvatar}>
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </Avatar>
            <Avatar className={classes.mediaIconAvatar}>
              <FontAwesomeIcon icon={["fab", "pinterest-p"]} />
            </Avatar>
            <Avatar className={classes.mediaIconAvatar}>
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </Avatar>
          </div>
          <div className={classes.contactInfo}>
            <Typography variant="body1">
              We would love to hear from you
            </Typography>
            <Typography className={classes.bolderText} variant="body1">
              contact@leno.com
            </Typography>
          </div>
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    </section>
  );
};
