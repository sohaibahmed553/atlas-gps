import { makeStyles, StandardProps, Theme } from "@material-ui/core";
import { StyleClassKey } from "JS/Typescript";
import React from "react";
import { AppNavbar } from "../Components/AppNavbar";
import { Footer } from "./Footer";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

export type LayoutClassKey = StyleClassKey<typeof useStyles>;

export interface LayoutProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    LayoutClassKey
  > {
  children: React.ReactNode;
  disableFooter?: boolean;
}
export const Layout = (props: LayoutProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  return (
    <>
      <AppNavbar />
      {props.children}
      {!props.disableFooter && <Footer />}
    </>
  );
};
