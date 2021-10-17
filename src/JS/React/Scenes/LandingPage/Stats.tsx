import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  makeStyles,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import { StyleClassKey } from "JS/Typescript";
import React from "react";
import { AppCountUp } from "JS/React/Components/AppCountUp";

const useStyles = makeStyles((theme: Theme) => ({
  statsContainer: {
    background: theme.palette.grey["900"],
    padding: theme.spacing(10, 0),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  statsWrapper: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  stats: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2, 5),
    color: theme.palette.common.white,
  },
  statsIcon: {
    fontSize: "3rem",
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.main,
  },
  textCenter: {
    textAlign: "center",
  },
  bolderText: {
    fontWeight: "bolder",
  },
}));

export type StatsClassKey = StyleClassKey<typeof useStyles>;

export interface StatsProps
  extends StandardProps<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    StatsClassKey
  > {}
export const Stats = (props: StatsProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  return (
    <section className={classes.statsContainer} {...rest}>
      <div className={classes.statsWrapper}>
        <div className={classes.stats}>
          <FontAwesomeIcon
            icon={["fas", "users"]}
            className={classes.statsIcon}
          />
          <Typography className={classes.bolderText} variant="h2">
            <AppCountUp start={0} end={58908} duration={2} />
          </Typography>
          <Typography variant="body1">Downloads</Typography>
        </div>
        <div className={classes.stats}>
          <FontAwesomeIcon
            icon={["fas", "cog"]}
            className={classes.statsIcon}
          />
          <Typography className={classes.bolderText} variant="h2">
            <AppCountUp start={0} end={950} duration={2} />
          </Typography>
          <Typography variant="body1">Trails</Typography>
        </div>
      </div>
      <div className={classes.statsWrapper}>
        <div className={classes.stats}>
          <FontAwesomeIcon
            icon={["fas", "comments"]}
            className={classes.statsIcon}
          />
          <Typography className={classes.bolderText} variant="h2">
            <AppCountUp start={0} end={550} duration={2} />
          </Typography>
          <Typography variant="body1">Point of interest</Typography>
        </div>
        <div className={classes.stats}>
          <FontAwesomeIcon
            icon={["fas", "comments"]}
            className={classes.statsIcon}
          />
          <Typography className={classes.bolderText} variant="h2">
            <AppCountUp start={0} end={485} duration={2} />
          </Typography>
          <Typography variant="body1">Ratings</Typography>
        </div>
      </div>
    </section>
  );
};
