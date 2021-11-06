import {
  CircularProgress,
  makeStyles,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { StyleClassKey } from "JS/Typescript";
import React from "react";
import { useTrails } from "JS/React/Hooks/Trails";
import { TrailsFilter } from "JS/Models/General";
import { SingleTrail } from "./SingleTrail";
import { AppRoundedButton } from "JS/React/Components/AppRoundedButton";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 0,
  },
  bolderText: {
    fontWeight: "bold",
  },
  pageButtonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2, 2),
  },
  pageButton: {
    width: "100px",
  },
}));

export type TrailsClassKey = StyleClassKey<typeof useStyles>;

export interface TrailsProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    TrailsClassKey
  > {
  filter: TrailsFilter;
  setFilter: (filter: TrailsFilter) => void;
}

export const Trails = (props: TrailsProps) => {
  const classes = useStyles(props);
  const { filter, setFilter, className, ...rest } = props;

  const { trails, loading, lastVisible, firstVisible } = useTrails(filter);

  return (
    <div className={clsx(className, classes.root)}>
      {!loading && trails && (
        <Typography
          className={classes.bolderText}
          variant="h6"
        >{`${trails.length} trails`}</Typography>
      )}
      <div
        style={{
          textAlign: "center",
          height: "100%",
          overflow: "auto",
        }}
      >
        {loading && <CircularProgress />}
        {!loading &&
          trails &&
          trails.length &&
          trails.map((trail, idx) => <SingleTrail key={idx} trail={trail} />)}
      </div>
      <div className={classes.pageButtonWrapper}>
        <AppRoundedButton
          className={classes.pageButton}
          onClick={() =>
            setFilter({
              ...filter,
              page: "prev",
              firstVisible: firstVisible,
            })
          }
        >
          Previous
        </AppRoundedButton>
        <AppRoundedButton
          className={classes.pageButton}
          onClick={() =>
            setFilter({
              ...filter,
              page: "next",
              lastVisible: lastVisible,
            })
          }
        >
          Next
        </AppRoundedButton>
      </div>
    </div>
  );
};
