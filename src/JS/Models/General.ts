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
  country: string;
  distance?: number;
  duration?: number;
  name: string;
  activity: ActivityType;
}

export interface Trail {
  gDistanceMetric: number;
  scalars: number[];
  diffSec: number;
  author: string;
  alt: string;
  description: string;
  dist: string;
  lon: number;
  title: string;
  version: string;
  geoPoints: number[];
  duration: string;
  latLon: string;
  elev: string;
  elevationM: number;
  actType: string;
  id: string;
  isRoute: number;
  lat: number;
  tripTime: string;
  imageUrl?: string;
}
