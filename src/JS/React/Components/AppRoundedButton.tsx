import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import clsx from "clsx";
import { Theme, StandardProps } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";
import { StyleClassKey } from "JS/Typescript";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    roundedButton: {
      padding: theme.spacing(1, 2.5),
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.spacing(3),
      fontSize: theme.spacing(1.2),
      textTransform: "uppercase",
    },
    blueButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      border: `1px solid ${theme.palette.primary.main}`,
      "&:hover,&:focus": {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
      },
    },
    whiteButton: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.grey["200"]}`,
      "&:hover,&:focus": {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.dark,
      },
    },
    gradientButton: {
      background: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    },
    greenButton: {
      backgroundColor: theme.colors.green,
      "&:hover,&:focus": {
        backgroundColor: theme.colors.green,
      },
    },
    grayButton: {
      backgroundColor: theme.palette.grey["200"],
      "&:hover,&:focus": {
        backgroundColor: theme.palette.grey["200"],
      },
    },
    redButton: {
      backgroundColor: theme.colors.red,
      "&:hover,&:focus": {
        backgroundColor: theme.colors.red,
      },
    },
    smallPadding: {
      padding: theme.spacing(0.7, 1.5),
    },
    largePadding: {
      padding: theme.spacing(1.5, 4),
    },
  })
);

export type AppRoundedButtonClassKey = StyleClassKey<typeof useStyles>;
export interface AppRoundedButtonProps
  extends StandardProps<ButtonProps, AppRoundedButtonClassKey> {
  buttonVariant?: "gradient" | "white" | "green" | "gray" | "red" | "blue";
  padding?: "small" | "normal" | "large";
}

export const AppRoundedButton = (props: AppRoundedButtonProps) => {
  const classes = useStyles(props);
  const { className, padding, buttonVariant, ...rest } = props;

  return (
    <Button
      className={clsx(
        classes.roundedButton,
        className,
        {
          [classes.gradientButton]: buttonVariant === "gradient",
        },
        {
          [classes.whiteButton]: buttonVariant === "white",
        },
        {
          [classes.blueButton]: buttonVariant === "blue",
        },
        {
          [classes.greenButton]: buttonVariant === "green",
        },
        {
          [classes.grayButton]: buttonVariant === "gray",
        },
        {
          [classes.redButton]: buttonVariant === "red",
        },
        {
          [classes.smallPadding]: padding === "small",
        },
        {
          [classes.largePadding]: padding === "large",
        }
      )}
      {...rest}
    />
  );
};
