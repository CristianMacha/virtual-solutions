export const getDisplay = (widthScreen) => {
    if (widthScreen < 640) {
        return "Small";
    } else if (widthScreen < 1024) {
        return "Medium";
    } else {
        return "Large";
    }
};
