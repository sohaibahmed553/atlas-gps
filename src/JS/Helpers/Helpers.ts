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
