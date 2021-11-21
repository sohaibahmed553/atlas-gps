import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(36.063012, -81.440123),
      L.latLng(36.063005, -81.4401345),
      L.latLng(36.0629956, -81.4401529),
      L.latLng(36.0629927, -81.4401721),
      L.latLng(36.0629965, -81.4401856),
      L.latLng(36.0629948, -81.4402022),
      L.latLng(36.062975, -81.4402263),
      L.latLng(36.0629668, -81.4402394),
      L.latLng(36.0629524, -81.4402572),
    ],
    // lineOptions: {
    //   styles: [{ color: "#6FA1EC", weight: 4 }],
    // },
    show: false,
    addWaypoints: false,
    // routeWhileDragging: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
