import {
  GeoIndexResponse,
  TrailsFilter,
  TrailsResponse,
} from "JS/Models/General";
import axios from "axios";
import { routesForContext } from "JS/React/Routing";

export class TrailsService {
  protected routes = routesForContext()();
  protected lastVisible = null;

  async getTrailsByFilter(filter: TrailsFilter): Promise<TrailsResponse> {
    const response = axios
      .get(this.routes.server.api.trails.trailsIndex(filter))
      .then((x) => x.data);

    return response;
  }

  async geoPointsIndex(): Promise<GeoIndexResponse[]> {
    // const response = axios
    //   .get(this.routes.server.api.trails.geoPoints(fname))
    //   .then((x) => x.data);

    const response: GeoIndexResponse[] = [
      {
        title: "United States-Ferguson behind house",
        fname: "36.063012_-81.440123_United States-Ferguson behind house.json",
        lat: 36.0609956,
        lon: -81.4407351,
      },
      {
        title: "United States-Groton new brown trail entrance",
        fname:
          "42.6298322_-71.5582637_United States-Groton new brown trail entrance.json",
        lat: 42.63,
        lon: -71.55,
      },
      {
        fname:
          "38.4742726_-122.7070677_United States-Santa Rosa Pill Hill.json",
        title: "United States-Santa Rosa Pill Hill",
        lat: 38.469,
        lon: -122.706,
      },
      {
        fname:
          "39.1676568_-78.1597744_United States-Winchester Jim Barnett lake.json",
        title: "United States-Winchester Jim Barnett lake",
        lat: 39.168,
        lon: -78.159,
      },
      {
        fname: "38.5276493_-105.9934444_United States-Salida way home.json",
        title: "United States-Salida way home",
        lat: 38.518,
        lon: -105.987,
      },
    ];

    return response;
  }

  async getGeoPoints(fname: string): Promise<number[]> {
    const response = axios
      .get(this.routes.server.api.trails.geoPoints(fname))
      .then((x) => x.data);

    return response;
  }
}
