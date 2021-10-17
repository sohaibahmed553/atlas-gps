import React from "react";
import { Switch, Route } from "react-router-dom";
import { AppNavbar } from "../Components/AppNavbar";
import { useRouting } from "../Hooks/Routes";
import { Article } from "./Article";
import { Contact } from "./Contact";
import { LandingPage } from "./LandingPage/LandingPage";
import { Pricing } from "./Pricing";
import { SearchTrails } from "./SearchTrails";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faSearch,
  faBinoculars,
  faCompactDisc,
  faSearchLocation,
  faLayerGroup,
  faMapMarkedAlt,
  faMountain,
  faTachometerAlt,
  faLongArrowAltUp,
  faShareAlt,
  faUsers,
  faCog,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";

library.add(
  faBars,
  faChevronLeft,
  faChevronRight,
  faSearch,
  faBinoculars,
  faCompactDisc,
  faSearchLocation,
  faLayerGroup,
  faMapMarkedAlt,
  faMountain,
  faTachometerAlt,
  faLongArrowAltUp,
  faCompass,
  faShareAlt,
  faUsers,
  faCog,
  faComments
);

const Root = () => {
  const { routeBuilder } = useRouting();
  const routeProvider = routeBuilder();

  return (
    <React.Fragment>
      <AppNavbar />
      <Switch>
        <Route
          exact={true}
          path={routeProvider.react.root()}
          render={() => {
            return <LandingPage />;
          }}
        />
        <Route
          exact={true}
          path={routeProvider.react.article()}
          render={() => {
            return <Article />;
          }}
        />
        <Route
          exact={true}
          path={routeProvider.react.pricing()}
          render={() => {
            return <Pricing />;
          }}
        />
        <Route
          exact={true}
          path={routeProvider.react.contact()}
          render={() => {
            return <Contact />;
          }}
        />
        <Route
          exact={true}
          path={routeProvider.react.searchTrails()}
          render={() => {
            return <SearchTrails />;
          }}
        />
      </Switch>
    </React.Fragment>
  );
};

export default Root;
