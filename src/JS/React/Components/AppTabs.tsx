import React from "react";
import {
  AppBar,
  Tabs,
  Theme,
  StandardProps,
  Box,
  Typography,
} from "@material-ui/core";
import { withStyles, createStyles } from "@material-ui/styles";
import { TabsProps, TabsClassKey } from "@material-ui/core/Tabs";
import { AppBarProps } from "@material-ui/core/AppBar";
import { StyleClassKey, StylesType } from "JS/Typescript";

const styles = (theme: Theme) =>
  createStyles({
    appbar: {
      background: "transparent",
      "& .MuiTab-fullWidth": {
        borderBottom: `2px solid ${theme.palette.grey["100"]}`,
      },
    },
  });

export type AppTabsClassKey = StyleClassKey<typeof styles> | TabsClassKey;

export interface AppTabsProps
  extends StandardProps<TabsProps, AppTabsClassKey> {
  appBarProps?: AppBarProps;
  onTabChange: (event: React.ChangeEvent<{}>, value: any) => void;
}

const decorator = withStyles(styles as StylesType<AppTabsClassKey>);

function Component(props: AppTabsProps) {
  const { classes, appBarProps, children, onTabChange, ...rest } = props;
  return (
    <AppBar position="static" className={classes.appbar} {...appBarProps}>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        {...rest}
        onChange={onTabChange}
      >
        {children}
      </Tabs>
    </AppBar>
  );
}

export interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

Component.defaultProps = {
  appBarProps: {
    elevation: 0,
  },
} as AppTabsProps;

Component.displayName = "AppTabs";

export const AppTabs = decorator(Component);
export default AppTabs;
