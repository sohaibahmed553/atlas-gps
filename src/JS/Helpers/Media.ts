export enum ImageNames {
  GOOGLE_PLAY_BADGE = "GOOGLE_PLAY_BADGE",
  DIVIDER = "DIVIDER",
  HEADER_SMARTPHONES = "HEADER_SMARTPHONES",
  FIVE_STARS = "FIVE_STARS",
  FEATURES_SMARTPHONE_DISCOVERING = "FEATURES_SMARTPHONE_DISCOVERING",
  FEATURES_SMARTPHONE_MONITORING = "FEATURES_SMARTPHONE_MONITORING",
  FEATURES_SMARTPHONE_RECORDING = "FEATURES_SMARTPHONE_RECORDING",
  SCREENSHOT_1 = "SCREENSHOT_1",
  SCREENSHOT_2 = "SCREENSHOT_2",
  SCREENSHOT_3 = "SCREENSHOT_3",
  SCREENSHOT_4 = "SCREENSHOT_4",
  SCREENSHOT_5 = "SCREENSHOT_5",
  SCREENSHOT_6 = "SCREENSHOT_6",
  SCREENSHOT_7 = "SCREENSHOT_7",
  SCREENSHOT_8 = "SCREENSHOT_8",
  SCREENSHOT_9 = "SCREENSHOT_9",
  SCREENSHOT_10 = "SCREENSHOT_10",
  DOWNLOAD = "DOWNLOAD",
  ALTLAS_LOGO = "ALTLAS_LOGO",
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
    case ImageNames.SCREENSHOT_1:
      return "images/screenshot-1.png";
    case ImageNames.SCREENSHOT_2:
      return "images/screenshot-2.png";
    case ImageNames.SCREENSHOT_3:
      return "images/screenshot-3.png";
    case ImageNames.SCREENSHOT_4:
      return "images/screenshot-4.png";
    case ImageNames.SCREENSHOT_5:
      return "images/screenshot-5.png";
    case ImageNames.SCREENSHOT_6:
      return "images/screenshot-6.png";
    case ImageNames.SCREENSHOT_7:
      return "images/screenshot-7.png";
    case ImageNames.SCREENSHOT_8:
      return "images/screenshot-8.png";
    case ImageNames.SCREENSHOT_9:
      return "images/screenshot-9.png";
    case ImageNames.SCREENSHOT_10:
      return "images/screenshot-10.png";
    case ImageNames.DOWNLOAD:
      return "images/download.png";
    case ImageNames.ALTLAS_LOGO:
      return "images/logo.svg";
  }
};

export const getVideoSrc = (name: VideoNames) => {
  switch (name) {
    case VideoNames.PREVIEW_VIDEO:
      return "https://www.youtube.com/embed/hqGvXB7tVuw";
  }
};
