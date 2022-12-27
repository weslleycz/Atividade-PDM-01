import { extendTheme } from "native-base";
export const theme = extendTheme({
    colors: {
        primary: {
            50: "#FBFAFE",
            100: "#EBE0FF",
            200: "#E4D4FF",
            300: "#D9C3FF",
            400: "#CCAFFF",
            500: "#B58EFC",
            600: "#9E71F0",
            700: "#8B59E5",
            800: "#8250F6",
            900: "#8257E5",
        },
        success: {
            50: "#eff8f3",
            100: "#dff3e8",
            200: "#d2f7e3",
            300: "#b7eed0",
            400: "#a1f0c5",
            500: "#84f1b5",
            600: "#1DB863",
            700: "#43e78d",
            800: "#2bd477",
            900: "#1DB863",
        },
    },
    fontConfig: {
        Inter: {
            100: {
                normal: "Inter_100Thin",
            },
            200: {
                normal: "Inter_200ExtraLight",
            },
            300: {
                normal: "Inter_300Light",
            },
            400: {
                normal: "Inter_400Regular",
            },
            500: {
                normal: "Inter_500Medium",
            },
            600: {
                normal: "Inter_600SemiBold",
            },
        },
    },
});
