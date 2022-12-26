import { Text } from "native-base";
import { useContext } from "react";
import { TasksContext } from "../../../screens/Home";

export const TaskNumber = () => {
    const tasksContext = useContext(TasksContext);
    return (
        <>
            <Text fontWeight="500" color={"warmGray.100"} fontSize="md">
                Você tem <Text bold>{tasksContext?.tasks?.length} tarefas</Text>
            </Text>
        </>
    );
};
