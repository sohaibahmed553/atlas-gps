import { QueryDocumentSnapshot, DocumentData } from "@firebase/firestore";

export enum ActivityType {
  HIKING = "Hiking",
  CYCLING = "Cycling",
  CLIMBING = "Climbing",
  AVIATION = "Aviation",
  WINTER_SPORTS = "Winter_sports",
  SAILING = "Sailing",
  DRIVING = "Driving",
  MOTORCYCLING = "Motorcycling",
  WALKING = "Walking",
  DOG_WALKING = "Dog_walking",
  TREKKING = "Trekking",
}

export interface TrailsFilter {
  country?: string;
  distance?: number;
  duration?: number;
  name?: string;
  activity?: ActivityType;
  page?: "next" | "prev";
  lastVisible?: QueryDocumentSnapshot<DocumentData>;
  firstVisible?: QueryDocumentSnapshot<DocumentData>;
}

export interface Trail {
  actType: string;
  alt: string;
  author: string;
  country_code?: string;
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
  version: string;
  scalars: number[];
  description: string;
  geoPoints: number[];
  imageUrl?: string;
}
