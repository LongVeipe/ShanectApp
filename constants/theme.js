import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#12A207", // green
    lightGreen: "#D1EC8D",
    secondary: "#CDCDD2",   // gray

    logoViolet: "#351CC6",
    logoPink: "#C74A93",

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#e5e5e5",
    transparent: "transparent",
    darkgray: '#636469',
    
    accent: '#D8211B',
    red: '#cc1812',
    deepRed2: '#630118',



    blue: "#2D88FF",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    logoName: 50,
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    logoName: {fontFamily: "cassannet",fontWeight: 'bold', fontSize: SIZES.logoName, lineHeight: 55},
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontWeight: 'bold', fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold",fontWeight: 'bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontWeight: 'bold', fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold",fontWeight: 'bold', fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;