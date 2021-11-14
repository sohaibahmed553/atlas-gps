import {
  CircularProgress,
  makeStyles,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { StyleClassKey } from "JS/Typescript";
import React, { useState } from "react";
import { Trail, TrailsFilter, TrailsResponse } from "JS/Models/General";
import { SingleTrail } from "./SingleTrail";
import { AppRoundedButton } from "JS/React/Components/AppRoundedButton";
import { TrailsDetailModal } from "./TrailDetailModal";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 0,
  },
  bolderText: {
    fontWeight: "bold",
  },
  pageButtonWrapper: {
    display: "flex",
    justifyContent: "end",
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
  trails: Trail[];
  loading: boolean;
  trailsRes: TrailsResponse;
}

export const Trails = (props: TrailsProps) => {
  const classes = useStyles(props);
  const { filter, setFilter, className, trails, loading, trailsRes, ...rest } =
    props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [selectedTrail, setSelectedTrail] = useState<Trail>(null);

  return (
    <div className={clsx(className, classes.root)}>
      {dialogOpen && (
        <TrailsDetailModal
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          trail={selectedTrail}
        />
      )}
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
          minHeight: "100px",
          overflow: "auto",
        }}
      >
        {loading && <CircularProgress />}
        {!loading &&
          trails &&
          trails.length &&
          trails.map((trail, idx) => (
            <SingleTrail
              key={idx}
              trail={trail}
              onChoose={(trail: Trail) => {
                setSelectedTrail(trail);
                setDialogOpen(true);
              }}
            />
          ))}
        {!loading && !trails && (
          <Typography variant="body1">No Trails to show</Typography>
        )}
      </div>
      <div className={classes.pageButtonWrapper}>
        {/* <AppRoundedButton
          buttonVariant="blue"
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
        </AppRoundedButton> */}
        <AppRoundedButton
          buttonVariant="blue"
          className={classes.pageButton}
          onClick={() =>
            setFilter({
              ...filter,
              page: trailsRes.page,
            })
          }
        >
          Next
        </AppRoundedButton>
      </div>
    </div>
  );
};
