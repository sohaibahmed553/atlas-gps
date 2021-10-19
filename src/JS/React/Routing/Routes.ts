import { config } from "JS/Config";
import { BaseRoutingContext } from "./Context/BaseRoutingContext";

export const routesForContext = () => () => {
  const unauthorizedContext = new BaseRoutingContext();

  return {
    server: {
      root: () => config.baseApiUrl,
      api: ((base: string) => ({
        form: {},
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
