import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles, StandardProps, Tab, Theme } from "@material-ui/core";
import AppTabs from "JS/React/Components/AppTabs";

import { StyleClassKey } from "JS/Typescript";
import React, { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  tab: {
    fontSize: "1rem",
    color: theme.palette.common.white,
    fontWeight: "bolder",
  },
  tabIcon: {
    marginRight: theme.spacing(1),
  },
}));

export type FeaturesTabsClassKey = StyleClassKey<typeof useStyles>;

export interface FeaturesTabsProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    FeaturesTabsClassKey
  > {}
export const FeaturesTabs = (props: FeaturesTabsProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: `Discovering`,
      icon: (
        <FontAwesomeIcon icon={["fas", "search"]} className={classes.tabIcon} />
      ),
    },
    {
      label: "Monitoring",
      icon: (
        <FontAwesomeIcon
          icon={["fas", "binoculars"]}
          className={classes.tabIcon}
        />
      ),
    },
    {
      label: "Recording",
      icon: (
        <FontAwesomeIcon
          icon={["fas", "compact-disc"]}
          className={classes.tabIcon}
        />
      ),
    },
  ];

  return (
    <div className={classes.root} {...rest}>
      <AppTabs
        value={activeTab}
        onTabChange={(e, value) => setActiveTab(value)}
        indicatorColor="secondary"
        textColor="secondary"
        variant="standard"
        centered
      >
        {tabs.map((tab) => (
          <Tab
            classes={{
              root: classes.tab,
            }}
            label={
              <span>
                {tab.icon}
                {tab.label}
              </span>
            }
          />
        ))}
      </AppTabs>
    </div>
  );
};
