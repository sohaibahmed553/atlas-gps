export enum ImageNames {
  GOOGLE_PLAY_BADGE = "GOOGLE_PLAY_BADGE",
  DIVIDER = "DIVIDER",
}

export const getImageSrc = (name: ImageNames) => {
  switch (name) {
    case ImageNames.GOOGLE_PLAY_BADGE:
      return "images/google-play-badge.png";
    case ImageNames.DIVIDER:
      return "images/divider.jpg";
  }
};
