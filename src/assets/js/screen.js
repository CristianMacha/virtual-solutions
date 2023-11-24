export const getDisplay = (widthScreen) => {
  if (widthScreen < 640) {
      return "isMobile";
  } else if (widthScreen < 1024) {
      return "isTablet";
  } else {
      return "isDesktop";
  }
};
