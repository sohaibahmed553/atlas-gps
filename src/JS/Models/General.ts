import { QueryDocumentSnapshot, DocumentData } from "@firebase/firestore";

export enum ActivityType {
  HIKING = "0",
  RUNNING = "1",
  CYCLING = "2",
  CLIMBING = "3",
  AVIATION = "4",
  WINTER_SPORTS = "5",
  SAILING = "6",
  DRIVING = "7",
  MOTORCYCLING = "8",
  WALKING = "9",
  DOG_WALKING = "10",
  TREKKING = "11",
}

export interface TrailsResponse {
  trails: Trail[];
  page: string;
  amount: number;
}
export interface TrailsFilter {
  country?: string;
  minDistance?: number;
  maxDistance?: number;
  minDuration?: number;
  maxDuration?: number;
  filterByDistance?: boolean;
  comment?: string;
  activity?: ActivityType;
  page?: string;
  lastVisible?: QueryDocumentSnapshot<DocumentData>;
  firstVisible?: QueryDocumentSnapshot<DocumentData>;
}

export interface Trail {
  actType: number;
  alt: string;
  author: string;
  country_code: string;
  country: string;
  city: string;
  diffSec: number;
  dist: string;
  duration: string;
  elev: string;
  elevationM: number;
  file_name: string;
  gDistanceMetric: number;
  id: string;
  isRoute: number;
  lat: number;
  latLon: string;
  lon: number;
  title: string;
  tripTime: string;
  version?: string;
  scalars?: number[];
  description?: string;
  geoPoints?: number[];
}
