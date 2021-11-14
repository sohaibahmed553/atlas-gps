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
  DUMMY_IMAGE = "DUMMY_IMAGE",
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
    case ImageNames.DUMMY_IMAGE:
      return "images/dummy-image.jpg";
  }
};

export const getVideoSrc = (name: VideoNames) => {
  switch (name) {
    case VideoNames.PREVIEW_VIDEO:
      return "https://www.youtube.com/embed/hqGvXB7tVuw";
  }
};

export const mapView = {
  google: {
    streets: {
      url: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      subDomains: ["mt0", "mt1", "mt2", "mt3"],
    },
    hybrid: {
      url: "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
      subDomains: ["mt0", "mt1", "mt2", "mt3"],
    },
    satellite: {
      url: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      subDomains: ["mt0", "mt1", "mt2", "mt3"],
    },
    terrain: {
      url: "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
      subDomains: ["mt0", "mt1", "mt2", "mt3"],
    },
  },
  mapBox: {
    url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXJvbDEiLCJhIjoiY2tldmlmNW83NDVrbzJybnA5NG4wNGRmZCJ9.Q7iDNnSEB_kmHV6StdqOLg",
    satellite: {
      id: "mapbox/satellite-v9",
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 19,
      tileSize: 512,
      zoomOffset: -1,
    },
    street: {
      id: "mapbox/streets-v11",
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 19,
      tileSize: 512,
      zoomOffset: -1,
    },
  },
};
