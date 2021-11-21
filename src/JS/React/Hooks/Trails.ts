import { TrailsFilter, Trail, TrailsResponse } from "JS/Models/General";
import { TrailsService } from "JS/Services/Trails/Service";
import { useCallback, useEffect, useState } from "react";

const service = new TrailsService();

export const useTrails = (filter: TrailsFilter = null) => {
  const [loading, setLoading] = useState(false);
  const [trails, setTrails] = useState<Trail[]>(null);
  const [response, setResponse] = useState<TrailsResponse>(null);

  const refetch = useCallback((filter: TrailsFilter) => {
    setLoading(true);

    return service
      .getTrailsByFilter(filter)
      .then((val) => {
        setResponse(val);
        setTrails(val.trails);
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
    response,
    loading,
  };
};

export const useGeoPoints = (fname: string = null) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<number[]>(null);

  const refetch = useCallback((fname: string) => {
    setLoading(true);

    return service
      .getGeoPoints(fname)
      .then((val) => {
        setResponse(val);
        return val;
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (fname !== null) {
      refetch(fname);
    }
  }, [fname]);

  return {
    refetch,
    points: response,
    loading,
  };
};
