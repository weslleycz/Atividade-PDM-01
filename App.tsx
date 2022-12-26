import { Box, NativeBaseProvider } from "native-base";
import { Routes } from "./Routes";

import { theme } from "./src/theme";

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <Box bg={"primary.900"} safeAreaTop />
            <Routes/>
        </NativeBaseProvider>
    );
}
