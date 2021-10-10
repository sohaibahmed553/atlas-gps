import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles, StandardProps, Theme } from "@material-ui/core";
import clsx from "clsx";
import { StyleClassKey } from "JS/Typescript";
import React from "react";
import { Slide } from "react-slideshow-image";
import { SingleReview } from "./SingleReview";
import { useMediaQuery } from "react-responsive";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  sliderWrapper: {
    width: "80%",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  customSliderArrow: {
    fontSize: "2rem",
    color: theme.palette.common.black,
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
    left: "50px",
    [theme.breakpoints.down("sm")]: {
      left: "30px",
    },
  },
  rightArrow: {
    right: "50px",
    [theme.breakpoints.down("sm")]: {
      right: "30px",
    },
  },
  sliderContent: {
    padding: theme.spacing(0, 15),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 10),
    },
  },
}));

export type ReviewsClassKey = StyleClassKey<typeof useStyles>;

export interface ReviewsProps
  extends StandardProps<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    ReviewsClassKey
  > {}
export const Reviews = (props: ReviewsProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const isTablet = useMediaQuery({ query: "(min-device-width: 800px)" });
  const slideCount = isDesktop ? 3 : isTablet ? 2 : 1;

  const reviews: {
    title: string;
    subText: string;
  }[] = [
    {
      title: `Артур Прохоров`,
      subText: `Great offer. Works seamlessly. 👍 It's a pity that only 5 stars. You could have put 10.`,
    },
    {
      title: `Aviv`,
      subText: `Incredibly useful for hiking! Practical and intuitive design. It does exactly what it's supposed to do, efficiently.`,
    },
    {
      title: `Todd E`,
      subText: `My house is 110 feet ASL and that's exactly what this app shows as well. Most other altimeters show me at 12 feet ASL. 110 feet is what the US Geologic Service shows for my house too, so this app is on spec.`,
    },
    {
      title: `Basil Surupa`,
      subText: `The included map ensures you all the time even on trails and marks the exact altitude.`,
    },
    {
      title: `Lindsay Spice - Marketer`,
      subText: `ALTLAS's support team is amazing. They've helped me with some issues and I am so grateful for their fast response.`,
    },
    {
      title: `Ann Blake - Developer`,
      subText: `Who would have thought that ALTLAS can provide such amazing results in just a few weeks with an easy learning curve.`,
    },
  ];

  return (
    <section className={classes.root}>
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
          {reviews.map((review) => (
            <div className={classes.sliderContent}>
              <SingleReview title={review.title} subText={review.subText} />
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
};
