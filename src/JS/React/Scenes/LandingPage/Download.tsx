import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Grid,
  makeStyles,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { getImageSrc, ImageNames } from "JS/Helpers/Media";
import { AppRoundedButton } from "JS/React/Components/AppRoundedButton";

import { StyleClassKey } from "JS/Typescript";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  contentItems: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  description: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
  },
  bolderText: {
    fontWeight: "bolder",
  },
  downloadImage: {
    width: 300,
  },
  googleIcon: {
    fontSize: "1rem",
    marginRight: theme.spacing(1),
  },
}));

export type DownloadClassKey = StyleClassKey<typeof useStyles>;

export interface DownloadProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    DownloadClassKey
  > {}
export const Download = (props: DownloadProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  return (
    <Grid container justify="center" className={clsx(classes.root, className)}>
      <Grid item md={2}></Grid>
      <Grid className={classes.contentItems} item md={4}>
        <Typography
          className={clsx(classes.bolderText, classes.description)}
          variant="h5"
        >
          Download ALTLAS today to see the benefits and enjoy the results faster
          than any other app out there
        </Typography>
        <AppRoundedButton
          buttonVariant="blue"
          padding="large"
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=altitude.alarm.erol.apps",
              "_blank"
            )
          }
        >
          <FontAwesomeIcon
            className={classes.googleIcon}
            icon={["fab", "google-play"]}
          />
          <Typography variant="body1">For Android</Typography>
        </AppRoundedButton>
      </Grid>
      <Grid className={classes.contentItems} item md={4}>
        <img
          className={classes.downloadImage}
          src={getImageSrc(ImageNames.DOWNLOAD)}
          alt="download"
        />
      </Grid>
      <Grid item md={2}></Grid>
    </Grid>
  );
};
