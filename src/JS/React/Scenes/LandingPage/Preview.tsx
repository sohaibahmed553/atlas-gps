import {
  makeStyles,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { getVideoSrc, VideoNames } from "JS/Helpers/Media";
import { StyleClassKey } from "JS/Typescript";
import React from "react";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(10, 2),
    textAlign: "center",
    // background: theme.palette.grey[400],
  },
  bolderText: {
    fontWeight: "bolder",
  },
  videoContainerWrapper: {
    width: "50vw",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      width: "70vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
  },
  responsiveIframe: {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "0.5rem",
  },
}));

export type PreviewClassKey = StyleClassKey<typeof useStyles>;

export interface PreviewProps
  extends StandardProps<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    PreviewClassKey
  > {}

export const Preview = (props: PreviewProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  return (
    <section className={classes.root}>
      <Typography
        style={{
          marginBottom: "3rem",
        }}
        className={clsx(classes.bolderText)}
        variant="h3"
      >
        PREVIEW
      </Typography>

      <div className={classes.videoContainerWrapper}>
        <div className={classes.videoContainer}>
          <iframe
            className={classes.responsiveIframe}
            src={getVideoSrc(VideoNames.PREVIEW_VIDEO)}
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
