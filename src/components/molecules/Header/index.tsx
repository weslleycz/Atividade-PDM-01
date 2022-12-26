import { Box, HStack } from "native-base";
import { Logo } from "../../atoms/Logo";
import { TaskNumber } from "../../atoms/TaskNumber";
import { TodoInput } from "../../atoms/TodoInput";
import { styles } from "./styles";

export const Header = () => {
    return (
        <>
            <Box style={styles.container}>
                <HStack style={styles.cont}>
                    <Logo height="30" width="130" />
                    <TaskNumber />
                </HStack>
            </Box>
            <TodoInput />
        </>
    );
};
