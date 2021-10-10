import { useMemo } from "react";
import { routesForContext } from "JS/React/Routing";

export function useRouting() {
  const linkProvider = useMemo(() => {
    return routesForContext()();
  }, []);
  const routeBuilder = useMemo(() => {
    return routesForContext();
  }, []);

  return {
    linkProvider,
    routeBuilder,
  };
}
