import { Text } from "native-base";

type Pros = {
    amount:number
};

export const TaskNumber = ({amount}: Pros) => {
    return (
        <>
            <Text fontWeight="500" color={"warmGray.100"} fontSize="md">
                Você tem <Text bold>{amount} tarefas</Text>
            </Text>
        </>
    );
};
