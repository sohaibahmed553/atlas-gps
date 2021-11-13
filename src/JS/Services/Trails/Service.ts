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
}
