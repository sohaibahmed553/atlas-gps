import { config } from "JS/Config";
import { TrailsFilter } from "JS/Models/General";
import { BaseRoutingContext } from "./Context/BaseRoutingContext";

export const routesForContext = () => () => {
  const unauthorizedContext = new BaseRoutingContext();

  return {
    server: {
      root: () => config.baseApiUrl,
      api: ((base: string) => ({
        trails: {
          trailsIndex: (filter: TrailsFilter) => {
            let trailsRoute = `${base}/trails?country=${filter.country}&page=${filter.page}`;

            if (filter.comment) {
              trailsRoute = `${trailsRoute}&comment=${filter.comment}`;
            }

            if (filter.activity) {
              trailsRoute = `${trailsRoute}&activityType=${filter.activity}`;
            }

            if (filter.filterByDistance) {
              trailsRoute = `${trailsRoute}&byDistance=1`;

              if (filter.maxDistance) {
                trailsRoute = `${trailsRoute}&maxDistance=${filter.maxDistance}`;
              } else {
                trailsRoute = `${trailsRoute}&maxDistance=200`;
              }
              if (filter.minDistance) {
                trailsRoute = `${trailsRoute}&minDistance=${filter.minDistance}`;
              } else {
                trailsRoute = `${trailsRoute}&minDistance=0`;
              }
            } else {
              trailsRoute = `${trailsRoute}&byDistance=0`;

              if (filter.maxDuration) {
                trailsRoute = `${trailsRoute}&maxDuration=${
                  filter.maxDuration * 60 * 60
                }`;
              } else {
                trailsRoute = `${trailsRoute}&maxDuration=${50 * 60 * 60}`;
              }
              if (filter.minDuration) {
                trailsRoute = `${trailsRoute}&minDuration=${
                  filter.minDuration * 60 * 60
                }`;
              } else {
                trailsRoute = `${trailsRoute}&minDuration=0`;
              }
            }

            return trailsRoute;
          },
          geoPoints: (fname: string) => `${base}/geoPoints?fname=${fname}`,
        },
      }))(`${config.baseApiUrl}`),
    },

    react: {
      root: () => unauthorizedContext.buildUrl(`/`),
      article: () => unauthorizedContext.buildUrl(`/article`),
      pricing: () => unauthorizedContext.buildUrl(`/pricing`),
      contact: () => unauthorizedContext.buildUrl(`/contact`),
      searchTrails: () => unauthorizedContext.buildUrl(`/search-trails`),
      rootUnauthorized: () => unauthorizedContext.buildUrl(`/`),
    },
  };
};

export type Routes = ReturnType<typeof routesForContext>;
