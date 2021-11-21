import { TrailsFilter, TrailsResponse } from "JS/Models/General";
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

  async geoPointsIndex(fname: string): Promise<number[]> {
    const response = axios
      .get(this.routes.server.api.trails.geoPoints(fname))
      .then((x) => x.data);

    return response;
  }

  async getGeoPoints(fname: string): Promise<number[]> {
    const response = axios
      .get(this.routes.server.api.trails.geoPoints(fname))
      .then((x) => x.data);

    return response;
  }
}
