import { makeStyles, StandardProps, Theme } from "@material-ui/core";
import { mapView } from "JS/Helpers/Media";
import { StyleClassKey } from "JS/Typescript";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
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

  return (
    <div
      style={{
        width: "85vw",
      }}
    >
      <MapContainer
        center={[51.505, -0.09]}
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
          {/* <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </LayersControl>
      </MapContainer>
    </div>
  );
};
