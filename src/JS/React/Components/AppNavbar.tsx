import React from "react";
import {
  IconButton,
  Paper,
  PaperProps,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { StyleClassKey } from "../../Typescript";
import { useRouting } from "../Hooks/Routes";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    height: theme.navbar.height,
    background: theme.navbar.background,
    paddingLeft: "160px",
    paddingRight: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down(theme.navbar.breakpoint)]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  navItems: {
    display: "flex",
    [theme.breakpoints.down(theme.navbar.breakpoint)]: {
      display: "none",
    },
  },
  navMenu: {
    margin: theme.spacing(0, 2.5),
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.primary.main,
    },
  },
  barsIcon: {
    color: theme.palette.common.black,
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.primary.main,
    },
  },
  barsWrapper: {
    display: "none",
    [theme.breakpoints.down(theme.navbar.breakpoint)]: {
      display: "inherit",
    },
  },
}));

export type AppNavbarClassKey = StyleClassKey<typeof useStyles>;

export interface AppNavbarProps
  extends StandardProps<PaperProps, AppNavbarClassKey> {}

interface NavItem {
  title: string;
  route: string;
  hasChildren?: boolean;
  isChild?: boolean;
  item?: NavItem[];
}

export const AppNavbar = (props: AppNavbarProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  const { routeBuilder } = useRouting();
  const routeProvider = routeBuilder();

  const history = useHistory();

  const navItems: NavItem[] = [
    {
      title: "Home",
      route: routeProvider.react.root(),
    },
    {
      title: "Article",
      route: routeProvider.react.article(),
    },
    {
      title: "Pricing",
      route: routeProvider.react.pricing(),
    },
    {
      title: "Contact",
      route: routeProvider.react.contact(),
    },
    {
      title: "Search Trails",
      route: routeProvider.react.searchTrails(),
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpened = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClosed = (item: NavItem) => {
    history.push(item.route);
    setAnchorEl(null);
  };

  return (
    <Paper elevation={2} square className={classes.header}>
      <Typography
        variant="h5"
        style={{
          fontWeight: "bolder",
        }}
      >
        ALTLAS
      </Typography>

      <div className={classes.navItems}>
        {navItems.map((item) => (
          <Typography
            className={classes.navMenu}
            variant="body1"
            onClick={() => history.push(item.route)}
          >
            {item.title}
          </Typography>
        ))}
      </div>

      <div className={classes.barsWrapper}>
        <IconButton
          style={{
            padding: "0px",
          }}
          onClick={handleMenuOpened}
        >
          <FontAwesomeIcon
            icon={["fas", "bars"]}
            className={classes.barsIcon}
          />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClosed}
        >
          {navItems.map((item: NavItem) => (
            <MenuItem onClick={() => handleMenuClosed(item)}>
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </Paper>
  );
};
