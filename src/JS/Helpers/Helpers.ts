import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { config } from "JS/Config";
import { ActivityType } from "JS/Models/General";

export const makeEnumArray = (enumObject) => {
  const all = [];

  for (const key in enumObject) {
    all.push(enumObject[key]);
  }
  return all;
};

export const activityTypeToString = (actType: ActivityType) => {
  switch (actType) {
    case ActivityType.HIKING:
      return "Hiking";
    case ActivityType.RUNNING:
      return "Running";
    case ActivityType.CYCLING:
      return "Cycling";
    case ActivityType.CLIMBING:
      return "Climbing";
    case ActivityType.AVIATION:
      return "Aviation";
    case ActivityType.WINTER_SPORTS:
      return "Winter Sports";
    case ActivityType.SAILING:
      return "Sailing";
    case ActivityType.DRIVING:
      return "Driving";
    case ActivityType.MOTORCYCLING:
      return "Motorcycling";
    case ActivityType.WALKING:
      return "Walking";
    case ActivityType.DOG_WALKING:
      return "Dog Walking";
    case ActivityType.TREKKING:
      return "Trekking";
    default:
      return "Unknown";
  }
};

export const getTrailImageSrc = (fName: string) => {
  return `${config.baseApiUrl}/image?fname=${fName.replace(".json", ".jpg")}`;
};

export const getIconsByActivityType = (actType: ActivityType): IconProp => {
  switch (actType) {
    case ActivityType.HIKING:
      return ["fas", "hiking"];
    case ActivityType.RUNNING:
      return ["fas", "running"];
    case ActivityType.CYCLING:
      return ["fas", "biking"];
    case ActivityType.CLIMBING:
      return ["fas", "hiking"];
    case ActivityType.AVIATION:
      return ["fab", "fly"];
    case ActivityType.WINTER_SPORTS:
      return ["fas", "skating"];
    case ActivityType.SAILING:
      return ["fas", "ship"];
    case ActivityType.DRIVING:
      return ["fas", "car"];
    case ActivityType.MOTORCYCLING:
      return ["fas", "motorcycle"];
    case ActivityType.WALKING:
      return ["fas", "walking"];
    case ActivityType.DOG_WALKING:
      return ["fas", "dog"];
    case ActivityType.TREKKING:
      return ["fas", "hiking"];
    default:
      return ["fas", "hiking"];
  }
};

export const normalizeValue = (val: string): string => {
  if (val && val.length) {
    return val;
  } else {
    return "Unknown";
  }
};
