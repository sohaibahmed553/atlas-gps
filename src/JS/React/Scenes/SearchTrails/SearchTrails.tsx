import { Button, makeStyles, StandardProps, Theme } from "@material-ui/core";
import { StyleClassKey } from "JS/Typescript";
import React, { useState } from "react";
import { Layout } from "../Layout";
import { ActivityType, TrailsFilter } from "JS/Models/General";
import { mapView } from "JS/Helpers/Media";

import { Trails } from "./Trails";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
} from "react-leaflet";

import { FiltersModal } from "./FiltersModal";
import { useTrails } from "JS/React/Hooks/Trails";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 60px)",
    maxHeight: "calc(100vh - 60px)",
    background: theme.palette.grey[400],
    marginTop: theme.navbar.height,
  },

  accordionContainer: {
    display: "flex",
    padding: theme.spacing(0, 2),
    alignItems: "center",
    // justifyContent: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
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
    flex: 1,
    [theme.breakpoints.down("md")]: {
      overflow: "unset",
      paddingRight: theme.spacing(0),
      marginTop: theme.spacing(3),
    },
  },
  mapContainer: {
    flex: 2,
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
    activity: ActivityType.HIKING,
    country: "US",
    maxDistance: null,
    minDistance: null,
    minDuration: 0,
    maxDuration: 50,
    comment: "newyork",
    filterByDistance: false,
    page: "0",
  });

  const [trailsFilter, setTrailsFilter] = useState<TrailsFilter>(filter);
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  const { trails, loading, response: trailsRes } = useTrails(trailsFilter);

  return (
    <Layout disableFooter>
      <div className={classes.root}>
        <div className={classes.accordionContainer}>
          <Button
            onClick={() => setFilterModalOpen(true)}
            color="primary"
            variant="outlined"
          >
            Filters
          </Button>

          <FiltersModal
            filter={filter}
            setFilter={setFilter}
            open={filterModalOpen}
            onClose={() => {
              setFilterModalOpen(false);
            }}
            onSearch={(filter) => {
              setTrailsFilter(filter);
            }}
          />
        </div>

        <div className={classes.trailsAndMapContainer}>
          <div className={classes.trailsContainer}>
            <Trails
              trails={trails}
              loading={loading}
              trailsRes={trailsRes}
              filter={trailsFilter}
              setFilter={setTrailsFilter}
            />
          </div>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            className={classes.mapContainer}
          >
            <LayersControl position="topright">
              <LayersControl.BaseLayer checked name="Street Map">
                <TileLayer
                  url={mapView.mapBox.url}
                  {...mapView.mapBox.street}
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Satellite Map">
                <TileLayer
                  url={mapView.mapBox.url}
                  {...mapView.mapBox.satellite}
                />
              </LayersControl.BaseLayer>
            </LayersControl>
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </Layout>
  );
};
