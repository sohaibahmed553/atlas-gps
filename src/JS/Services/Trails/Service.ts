import {
  collection,
  limit,
  orderBy,
  query,
  getDocs,
  startAfter,
  endBefore,
  QuerySnapshot,
  DocumentData,
  limitToLast,
} from "@firebase/firestore";
import { ref } from "@firebase/storage";
import { ActivityType, TrailsFilter, Trail } from "JS/Models/General";
import { BaseService } from "../BaseService";

export class TrailsService extends BaseService {
  private imagesRef = ref(this.storage, "images");
  protected lastVisible = null;

  // async getTrailsByFilter(filter: TrailsFilter): Promise<Trail[]> {
  //   return new Promise((res, rej) => {
  //     setTimeout(() => {
  //       res([
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //           imageUrl:
  //             "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //           imageUrl:
  //             "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //           imageUrl:
  //             "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //           imageUrl:
  //             "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //           imageUrl:
  //             "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //           imageUrl:
  //             "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //           imageUrl:
  //             "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //         },
  //         {
  //           gDistanceMetric: 2.06,
  //           scalars: [1436.9918, 1436.9918],
  //           diffSec: 2059,
  //           author: "oren omesi",
  //           alt: "4557ft",
  //           description: "",
  //           dist: "1.28mi",
  //           lon: 21.2047297,
  //           title: "Greece Ionnina bear trail grand forest matzovo",
  //           version: "2.2.6",
  //           geoPoints: [39.7814491, 21.2092563],
  //           duration: "0:34:19",
  //           latLon: "39.775,21.205",
  //           elev: "505ft",
  //           elevationM: 154,
  //           actType: ActivityType.AVIATION,
  //           id: "654132156456",
  //           isRoute: 1,
  //           lat: 39.7746346,
  //           tripTime: "14/09/2021 13:36:52",
  //           imageUrl:
  //             "https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  //         },
  //       ]);
  //     }, 3000);
  //   });
  // }

  async getTrailsSnapshotByFilter(
    filter: TrailsFilter
  ): Promise<QuerySnapshot<DocumentData>> {
    const routesRef = collection(this.db, "Routes");

    if (!filter.page) {
      const first = query(routesRef, orderBy("country_code"), limit(5));
      return await getDocs(first);
    } else {
      if (filter.page === "next" && filter.lastVisible) {
        const next = query(
          routesRef,
          orderBy("country_code"),
          startAfter(filter.lastVisible),
          limit(5)
        );

        return await getDocs(next);
      }

      if (filter.page === "prev" && filter.firstVisible) {
        const prev = query(
          routesRef,
          orderBy("country_code"),
          endBefore(filter.firstVisible),
          limitToLast(5)
        );

        return await getDocs(prev);
      }
    }
  }

  async getFireBaseData() {
    const routesRef = collection(this.db, "Routes");

    const first = query(routesRef, orderBy("country_code"), limit(5));

    const firstSnap = await getDocs(first);

    const lastVisible = firstSnap.docs[firstSnap.docs.length - 1];
    const list = firstSnap.docs.map((doc) => doc.data());

    const next = query(
      routesRef,
      orderBy("country_code"),
      startAfter(lastVisible),
      limit(5)
    );

    const nextSnap = await getDocs(next);
    const nextList = nextSnap.docs.map((doc) => doc.data());

    console.log("first", list);
    console.log("next", nextList);
  }
}
