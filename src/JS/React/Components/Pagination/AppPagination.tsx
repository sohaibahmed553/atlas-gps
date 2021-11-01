import { Theme, StandardProps } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { StyleClassKey } from "JS/Typescript";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

export type AppPaginationClassKey = StyleClassKey<typeof useStyles>;
export interface AppPaginationProps
  extends StandardProps<{}, AppPaginationClassKey> {}

export const AppPagination = (props: AppPaginationProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  return <div></div>;
};
