import { makeStyles, StandardProps, Theme } from "@material-ui/core";
import CountUp from "react-countup";
import { StyleClassKey } from "JS/Typescript";
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { CountUpProps } from "react-countup/build/CountUp";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 0,
  },
}));

export type CountUpClassKey = StyleClassKey<typeof useStyles>;

export interface AppCountUpProps
  extends StandardProps<CountUpProps, CountUpClassKey> {}

export const AppCountUp = (props: AppCountUpProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible) => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <h4
              className={clsx(className, classes.root)}
              ref={countUpRef as any}
            />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};
