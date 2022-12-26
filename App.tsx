import { Box, NativeBaseProvider } from "native-base";
import { LogBox } from "react-native";
import { Routes } from "./Routes";
import { theme } from "./src/theme";

export default function App() {
    LogBox.ignoreLogs(["Warning: ..."]);
    LogBox.ignoreAllLogs();
    return (
        <NativeBaseProvider theme={theme}>
            <Box bg={"primary.900"} safeAreaTop />
            <Routes />
        </NativeBaseProvider>
    );
}
