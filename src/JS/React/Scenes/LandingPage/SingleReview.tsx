import {
  makeStyles,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import { getImageSrc, ImageNames } from "JS/Helpers/Media";

import { StyleClassKey } from "JS/Typescript";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    marginTop: theme.spacing(1),
    fontWeight: "bolder",
  },
  subText: {
    fontStyle: "italic",
  },
}));

export type SingleReviewClassKey = StyleClassKey<typeof useStyles>;

export interface SingleReviewProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    SingleReviewClassKey
  > {
  title: string;
  subText: string;
}
export const SingleReview = (props: SingleReviewProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  return (
    <div className={classes.root} {...rest}>
      <img
        width={80}
        alt="five-stars"
        src={getImageSrc(ImageNames.FIVE_STARS)}
      />
      <Typography className={classes.subText} variant="body1">
        {props.subText}
      </Typography>
      <Typography className={classes.title} variant="h6">
        {props.title}
      </Typography>
    </div>
  );
};
