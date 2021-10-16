export enum ImageNames {
  GOOGLE_PLAY_BADGE = "GOOGLE_PLAY_BADGE",
  DIVIDER = "DIVIDER",
  HEADER_SMARTPHONES = "HEADER_SMARTPHONES",
  FIVE_STARS = "FIVE_STARS",
  FEATURES_SMARTPHONE_DISCOVERING = "FEATURES_SMARTPHONE_DISCOVERING",
  FEATURES_SMARTPHONE_MONITORING = "FEATURES_SMARTPHONE_MONITORING",
  FEATURES_SMARTPHONE_RECORDING = "FEATURES_SMARTPHONE_RECORDING",
}

export enum VideoNames {
  PREVIEW_VIDEO = "PREVIEW_VIDEO",
}

export const getImageSrc = (name: ImageNames) => {
  switch (name) {
    case ImageNames.GOOGLE_PLAY_BADGE:
      return "images/google-play-badge.png";
    case ImageNames.DIVIDER:
      return "images/divider.jpg";
    case ImageNames.HEADER_SMARTPHONES:
      return "images/header-smartphones.png";
    case ImageNames.FIVE_STARS:
      return "images/five-stars.svg";
    case ImageNames.FEATURES_SMARTPHONE_DISCOVERING:
      return "images/features-smartphone-1.png";
    case ImageNames.FEATURES_SMARTPHONE_MONITORING:
      return "images/features-smartphone-2.png";
    case ImageNames.FEATURES_SMARTPHONE_RECORDING:
      return "images/features-smartphone-3.png";
  }
};

export const getVideoSrc = (name: VideoNames) => {
  switch (name) {
    case VideoNames.PREVIEW_VIDEO:
      return "https://www.youtube.com/embed/hqGvXB7tVuw";
  }
};
