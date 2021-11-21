import { makeStyles, StandardProps, Theme } from "@material-ui/core";
import { getCordinates } from "JS/Helpers/Helpers";
import { mapView } from "JS/Helpers/Media";
import { useGeoPoints, useGeoPointsIndex } from "JS/React/Hooks/Trails";
import { StyleClassKey } from "JS/Typescript";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  Polyline,
  Circle,
} from "react-leaflet";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

export type MapSectionClassKey = StyleClassKey<typeof useStyles>;

export interface MapSectionProps
  extends StandardProps<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
    MapSectionClassKey
  > {}
export const MapSection = (props: MapSectionProps) => {
  const classes = useStyles(props);
  const { className, ...rest } = props;

  const { points: allPoints } = useGeoPointsIndex();
  const { points, refetch } = useGeoPoints();

  return (
    <div
      style={{
        width: "85vw",
      }}
    >
      <MapContainer
        center={
          allPoints && allPoints.length
            ? [allPoints[0].lat, allPoints[0].lon]
            : [36.061, -81.441]
        }
        zoom={13}
        style={{
          width: "100%",
          height: "600px",
          zIndex: 1,
        }}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Street Map">
            <TileLayer url={mapView.mapBox.url} {...mapView.mapBox.street} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite Map">
            <TileLayer url={mapView.mapBox.url} {...mapView.mapBox.satellite} />
          </LayersControl.BaseLayer>
          {allPoints &&
            allPoints.length &&
            allPoints.map((p) => {
              return (
                <Circle
                  center={[p.lat, p.lon]}
                  pathOptions={{ fillColor: "blue" }}
                  radius={200}
                  eventHandlers={{
                    click: (e) => {
                      refetch(p.fname);
                    },
                  }}
                >
                  <Popup>{p.title}</Popup>
                </Circle>
                // <Marker
                //   eventHandlers={{
                //     click: (e) => {
                //       refetch(p.fname);
                //     },
                //   }}
                //   position={[p.lat, p.lon]}
                // >
                //   <Popup>{p.title}</Popup>
                // </Marker>
              );
            })}
        </LayersControl>
        {points && points.length && (
          <Polyline
            pathOptions={{
              color: "blue",
            }}
            positions={getCordinates(points)}
          />
        )}
      </MapContainer>
    </div>
  );
};
