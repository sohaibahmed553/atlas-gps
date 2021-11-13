import {
  makeStyles,
  Paper,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { getTrailImageSrc } from "JS/Helpers/Helpers";
import { getImageSrc, ImageNames } from "JS/Helpers/Media";
import { Trail } from "JS/Models/General";
import { StyleClassKey } from "JS/Typescript";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(1, 0),
  },
  paper: {
    padding: theme.spacing(2),
    cursor: "pointer",
    "&:hover": {
      boxShadow:
        "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    },
  },
  nameTypeContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  nameImage: {
    width: 200,
    height: 200,
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  marginLeft: {
    marginLeft: theme.spacing(4),
  },
  lastRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(1),
  },
  boldText: {
    fontWeight: "bold",
  },
}));

export type SingleTrailClassKey = StyleClassKey<typeof useStyles>;

export interface SingleTrailProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    SingleTrailClassKey
  > {
  trail: Trail;
}

export const SingleTrail = (props: SingleTrailProps) => {
  const classes = useStyles(props);
  const { trail, className, ...rest } = props;

  const [srcErr, setSrcErr] = useState(false);

  return (
    <div className={clsx(className, classes.root)}>
      <Paper className={classes.paper} elevation={0}>
        <div className={classes.nameTypeContainer}>
          <Typography variant="body1">{trail.title}</Typography>
          <Typography variant="body1">{trail.actType}</Typography>
          <img
            className={classes.nameImage}
            src={
              srcErr
                ? getImageSrc(ImageNames.DUMMY_IMAGE)
                : getTrailImageSrc(trail.file_name)
            }
            onError={() => {
              setSrcErr(true);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              textAlign: "left",
            }}
          >
            <Typography variant="body1" className={classes.boldText}>
              Distance
            </Typography>
            <Typography variant="body2">{trail.dist}</Typography>
          </div>
          <div
            style={{
              textAlign: "left",
            }}
            className={classes.marginLeft}
          >
            <Typography variant="body1" className={classes.boldText}>
              Elevation +
            </Typography>
            <Typography variant="body2">{trail.elev}</Typography>
          </div>
          <div
            style={{
              textAlign: "left",
            }}
            className={classes.marginLeft}
          >
            <Typography variant="body1" className={classes.boldText}>
              Duration
            </Typography>
            <Typography variant="body2">{trail.duration}</Typography>
          </div>
        </div>
        <div className={classes.lastRow}>
          <Typography>{trail.tripTime}</Typography>
          <Typography>{trail.author}</Typography>
        </div>
      </Paper>
    </div>
  );
};
