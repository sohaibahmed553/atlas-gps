import {
  CircularProgress,
  makeStyles,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { StyleClassKey } from "JS/Typescript";
import React, { useEffect, useMemo, useState } from "react";
import { useTrails } from "JS/React/Hooks/Trails";
import { Trail, TrailsFilter } from "JS/Models/General";
import { SingleTrail } from "./SingleTrail";
import {
  paginate,
  PaginatedData,
  PaginationInfo,
} from "JS/Typescript/Pagination";
import Pagination, {
  PaginationProps,
} from "JS/React/Components/Pagination/Pagination";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 0,
  },
  bolderText: {
    fontWeight: "bold",
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
  paginationProps?: PaginationProps;
}

export const Trails = (props: TrailsProps) => {
  const classes = useStyles(props);
  const { filter, className, paginationProps, ...rest } = props;

  const { trails, loading } = useTrails(filter);

  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
    currentPage: 1,
    perPage: 5,
    total: trails ? trails.length : 0,
  });

  useEffect(() => {
    setPaginationInfo({
      currentPage: 1,
      perPage: 5,
      total: trails ? trails.length : 0,
    });
  }, [trails]);

  const paginatedData: PaginatedData<Trail> = useMemo(() => {
    if (!loading && trails) {
      return paginate(trails, paginationInfo);
    }
    return paginate([], paginationInfo);
  }, [trails, paginationInfo]);

  const onPaginationChange = (page) => {
    setPaginationInfo({
      ...paginationInfo,
      currentPage: page,
    });
  };

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
          paginatedData &&
          paginatedData.data &&
          paginatedData.data.map((trail) => <SingleTrail trail={trail} />)}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {paginationInfo && paginationInfo.total > 0 ? (
          <Pagination info={paginationInfo} onChange={onPaginationChange} />
        ) : null}
      </div>
    </div>
  );
};
