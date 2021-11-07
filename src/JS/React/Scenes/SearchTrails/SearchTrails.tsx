import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  makeStyles,
  StandardProps,
  Theme,
  Typography,
} from "@material-ui/core";
import { StyleClassKey } from "JS/Typescript";
import React, { useState } from "react";
import { Layout } from "../Layout";
import { ActivityType, TrailsFilter } from "JS/Models/General";
import { AppRoundedButton } from "../../Components/AppRoundedButton";
import { Trails } from "./Trails";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { FiltersList } from "./FiltersList";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 60px)",
    maxHeight: "calc(100vh - 60px)",
    background: theme.palette.grey[200],
    marginTop: theme.navbar.height,
  },

  accordionContainer: {
    display: "flex",
    padding: theme.spacing(0, 2),
    alignItems: "center",
    justifyContent: "center",
  },

  accordion: {
    width: "50%",
    margin: theme.spacing(4, 0),
    alignSelf: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  buttonSection: {
    // padding: theme.spacing(3, 5),
    display: "flex",
    // justifyContent: "space-around",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },

  trailsAndMapContainer: {
    display: "flex",
    padding: theme.spacing(2, 2),
    overflow: "auto",
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
    },
  },
  trailsContainer: {
    paddingRight: theme.spacing(2),
    width: "100%",
    overflow: "auto",
    [theme.breakpoints.down("md")]: {
      overflow: "unset",
      paddingRight: theme.spacing(0),
      marginTop: theme.spacing(3),
    },
  },
  mapContainer: {
    minHeight: "50vh",
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  buttonLeftMargin: {
    marginLeft: theme.spacing(2),
  },
}));

export type SearchTrailsClassKey = StyleClassKey<typeof useStyles>;

export interface SearchTrailsProps
  extends StandardProps<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    SearchTrailsClassKey
  > {}

export const SearchTrails = (props: SearchTrailsProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  const [filter, setFilter] = useState<TrailsFilter>({
    activity: null,
    country: "",
    distance: null,
    duration: null,
    name: "",
  });

  return (
    <Layout disableFooter>
      <div className={classes.root}>
        <div className={classes.accordionContainer}>
          <Accordion className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Filter</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <section className={classes.buttonSection}>
                <FiltersList setFilter={setFilter} filter={filter} />
                <div className={classes.buttonLeftMargin}>
                  <AppRoundedButton buttonVariant="blue" padding="normal">
                    <Typography variant="body1">Search</Typography>
                  </AppRoundedButton>
                </div>
              </section>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* <Grid container className={classes.trailsAndMapContainer}>
          <Grid item md={6} sm={12} xs={12} className={classes.trailsContainer}>
            <Trails filter={filter} setFilter={setFilter} />
          </Grid>
          <Grid item md={6} sm={12} xs={12} className={classes.mapContainer}>
            <Map defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
              <ZoomControl />
              <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
          </Grid>
        </Grid> */}
        <div className={classes.trailsAndMapContainer}>
          <div className={classes.trailsContainer}>
            <Trails filter={filter} setFilter={setFilter} />
          </div>
          <div className={classes.mapContainer}>
            <Map defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
              <ZoomControl />
              <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
          </div>
        </div>
      </div>
    </Layout>
  );
};
