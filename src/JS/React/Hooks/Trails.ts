import { TrailsFilter, Trail } from "JS/Models/General";
import { TrailsService } from "JS/Services/Trails/Service";
import { useCallback, useEffect, useState } from "react";

const service = new TrailsService();

export const useTrails = (filter: TrailsFilter = null) => {
  const [loading, setLoading] = useState(false);
  const [trails, setTrails] = useState<Trail[]>(null);

  const refetch = useCallback((filter: TrailsFilter) => {
    setLoading(true);

    return service
      .getTrailsByFilter(filter)
      .then((val) => {
        setTrails(val);
        return val;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (filter !== null) {
      refetch(filter);
    }
  }, [filter]);

  return {
    refetch,
    trails,
    loading,
  };
};
