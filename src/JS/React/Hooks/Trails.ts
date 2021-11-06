import { TrailsFilter, Trail } from "JS/Models/General";
import { TrailsService } from "JS/Services/Trails/Service";
import { useCallback, useEffect, useState } from "react";
import { QueryDocumentSnapshot, DocumentData } from "@firebase/firestore";

const service = new TrailsService();

export const useTrails = (filter: TrailsFilter = null) => {
  const [loading, setLoading] = useState(false);
  const [trails, setTrails] = useState<Trail[]>(null);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData>>(null);
  const [firstVisible, setFirstVisible] =
    useState<QueryDocumentSnapshot<DocumentData>>(null);

  const refetch = useCallback((filter: TrailsFilter) => {
    setLoading(true);

    return service
      .getTrailsSnapshotByFilter(filter)
      .then((val) => {
        const trails = val.docs.map((doc) => doc.data()) as Trail[];

        if (val.size) {
          setLastVisible(val.docs[val.docs.length - 1]);
          setFirstVisible(val.docs[0]);
        }

        setTrails(trails);
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
    lastVisible,
    firstVisible,
    loading,
  };
};
