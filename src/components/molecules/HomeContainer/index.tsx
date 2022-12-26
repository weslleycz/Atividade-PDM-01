import { Box } from "native-base";
import { ReactNode } from "react";
import { styles } from "./styles";

type Pros = {
    children: ReactNode;
};

export const HomeContainer = ({ children }: Pros) => {
    return <Box style={styles.container}>{children}</Box>;
};


