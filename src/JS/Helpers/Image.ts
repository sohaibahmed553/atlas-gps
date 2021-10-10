export enum ImageNames {
  GOOGLE_PLAY_BADGE = "GOOGLE_PLAY_BADGE",
  DIVIDER = "DIVIDER",
  HEADER_SMARTPHONES = "HEADER_SMARTPHONES",
}

export const getImageSrc = (name: ImageNames) => {
  switch (name) {
    case ImageNames.GOOGLE_PLAY_BADGE:
      return "images/google-play-badge.png";
    case ImageNames.DIVIDER:
      return "images/divider.jpg";
    case ImageNames.HEADER_SMARTPHONES:
      return "images/header-smartphones.png";
  }
};
