import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  makeStyles,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { StyleClassKey } from "JS/Typescript";
import React from "react";
import { Slide } from "react-slideshow-image";
import { useMediaQuery } from "react-responsive";
import { getImageSrc, ImageNames } from "JS/Helpers/Media";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.grey["900"],
    padding: theme.spacing(7, 0),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    marginBottom: "3rem",
    color: theme.palette.common.white,
  },
  bolderText: {
    fontWeight: "bolder",
  },
  sliderWrapper: {
    width: "70%",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  customSliderArrow: {
    fontSize: "2rem",
    color: theme.palette.common.white,
    cursor: "pointer",
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
    position: "absolute",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },

  leftArrow: {
    left: "-50px",

    [theme.breakpoints.down("md")]: {
      left: "10px",
    },
  },
  rightArrow: {
    right: "-50px",
    [theme.breakpoints.down("md")]: {
      right: "10px",
    },
  },
  sliderContent: {
    padding: theme.spacing(0, 5),
  },
  screenshotsContainer: {
    display: "flex",
  },
}));

export type ScreenShotsClassKey = StyleClassKey<typeof useStyles>;

export interface ScreenShotsProps
  extends StandardProps<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    ScreenShotsClassKey
  > {}
export const ScreenShots = (props: ScreenShotsProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const isTablet = useMediaQuery({ query: "(min-device-width: 800px)" });
  const slideCount = isDesktop ? 5 : isTablet ? 3 : 1;

  const screenshots = [
    ImageNames.SCREENSHOT_1,
    ImageNames.SCREENSHOT_2,
    ImageNames.SCREENSHOT_3,
    ImageNames.SCREENSHOT_4,
    ImageNames.SCREENSHOT_5,
    ImageNames.SCREENSHOT_6,
    ImageNames.SCREENSHOT_7,
    ImageNames.SCREENSHOT_8,
    ImageNames.SCREENSHOT_9,
    ImageNames.SCREENSHOT_10,
  ].map((d) => getImageSrc(d));

  return (
    <section className={classes.root} {...rest}>
      <Typography
        className={clsx(classes.bolderText, classes.heading)}
        variant="h3"
      >
        SCREENSHOTS
      </Typography>
      <div className={classes.sliderWrapper}>
        <Slide
          easing="ease"
          duration={3000}
          slidesToShow={slideCount}
          slidesToScroll={1}
          autoplay={true}
          indicators={true}
          prevArrow={
            <FontAwesomeIcon
              className={clsx(classes.customSliderArrow, classes.leftArrow)}
              icon={["fas", "chevron-left"]}
            />
          }
          nextArrow={
            <FontAwesomeIcon
              className={clsx(classes.customSliderArrow, classes.rightArrow)}
              icon={["fas", "chevron-right"]}
            />
          }
        >
          {screenshots.map((d) => (
            <div className={classes.sliderContent}>
              <img
                style={{
                  width: "100%",
                }}
                src={d}
                alt={d}
              />
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};
