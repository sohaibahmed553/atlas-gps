import React from "react";
import {
  List,
  ListItem,
  Theme,
  Typography,
  StandardProps,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { ListItemProps } from "@material-ui/core/ListItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyleClassKey } from "JS/Typescript";
import {
  extractPaginationDetail,
  getPagesRange,
  PaginationInfo,
} from "JS/Typescript/Pagination";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
    },
    item: {
      padding: theme.spacing(1.5),
      height: theme.spacing(4),
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
      borderLeft: `1px solid ${theme.palette.divider}`,
      borderBottom: `1px solid ${theme.palette.divider}`,
      borderTop: `1px solid ${theme.palette.divider}`,
      "&:last-child": {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
      "&$selected": {
        background: theme.palette.secondary.main,
        color: "white",
      },
    },
    selected: {},
  });

export type PaginationClassKey = StyleClassKey<typeof styles>;

export interface PaginationProps extends StandardProps<{}, PaginationClassKey> {
  info?: PaginationInfo;
  propsForPage?: (page: number) => ListItemProps;
  onChange?: (page: number) => void;
}

const decorator = withStyles(styles);

function Component({
  onChange,
  classes,
  propsForPage = () => ({}),
  ...rest
}: PaginationProps) {
  const renderButton = (
    page: number,
    text: string | number | React.ReactNode,
    lprops: ListItemProps
  ) => {
    return (
      <ListItem
        key={`${page}|${text}`}
        classes={{
          root: classes.item,
          selected: classes.selected,
        }}
        button={true as any}
        {...lprops}
        {...propsForPage(page)}
        onClick={() => onChange(page)}
      >
        {(typeof text === "number" || typeof text === "string") && (
          <Typography>{text}</Typography>
        )}
        {typeof text === "object" && text}
      </ListItem>
    );
  };

  const detail = rest.info ? extractPaginationDetail(rest.info) : null;
  const range = detail
    ? getPagesRange(detail.currentPage, detail.totalPages)
    : [];
  return (
    <List className={classes.root}>
      {renderButton(
        detail.currentPage - 1,
        <FontAwesomeIcon icon={["fas", "angle-double-left"]} />,
        {
          disabled: detail.currentPage <= 1,
        }
      )}
      {range.map((page) =>
        renderButton(page, page, {
          selected: page === detail.currentPage,
        })
      )}
      {renderButton(
        detail.currentPage + 1,
        <FontAwesomeIcon icon={["fas", "angle-double-right"]} />,
        {
          disabled: detail.currentPage >= detail.totalPages,
        }
      )}
    </List>
  );
}

export const Pagination = decorator(Component);
export default Pagination;
