import React from "react";
import {
  PaperProps,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { StyleClassKey } from "../../Typescript";

const useStyles = makeStyles((theme: Theme) => ({}));

export type LandingPageClassKey = StyleClassKey<typeof useStyles>;

export interface AppNavbarProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    LandingPageClassKey
  > {}

export const LandingPage = () => {
  return <div>Home</div>;
};
