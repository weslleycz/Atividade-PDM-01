import { Box, Text } from "native-base";
import { useEffect } from "react";
import { Logo } from "../../components/atoms/Logo";
import { NavigationProps } from "../../types/navigation";
import { styles } from "./styles";

export const Splash = ({ navigation }: NavigationProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("Home");
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <Box style={styles.container}>
            <Logo height="100" width="150" />
            <Text
                fontWeight="500"
                style={styles.containerText}
                color={"warmGray.100"}
                fontSize="md"
            >
                Seu aplicativo favorito de afarezes
            </Text>
        </Box>
    );
};
