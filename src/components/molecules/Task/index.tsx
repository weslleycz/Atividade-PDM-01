import { Box, Checkbox, HStack, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { deletData } from "../../../database/deletValue";
import { getValue } from "../../../database/getValue";
import { TasksContext } from "../../../screens/Home";
import { getAllTask } from "../../../services/getAllTask";
import { Itask } from "../../../types/Itask";
import { PenIcon } from "../../atoms/PenIcon";
import { TrashIcon } from "../../atoms/TrashIcon";
import { styles } from "./styles";

type Props = {
    id: string;
    index: number;
};

export const Task = ({ id, index }: Props) => {
    const [taskData, setTaskData] = useState<Itask>();

    const tasksContext = useContext(TasksContext);

    const handleDeletTask = async (id: string) => {
        Alert.alert("Atenção", "Gostaria de apagar essa tarefa?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel",
            },
            {
                text: "OK",
                onPress: async () => {
                    await deletData(id);
                    getAllTask(tasksContext?.setTasks);
                },
            },
        ]);
    };

    useEffect(() => {
        const getTask = async () => {
            const data = (await getValue(id)) as Itask;
            setTaskData(data);
        };
        getTask();
    }, []);
    return (
        <Box style={styles.taskButton} bg={index % 2 == 0 ? "#e3e3e4" : ""}>
            <HStack style={styles.cont}>
                <Box>
                    <HStack space={3} justifyContent="center">
                        <Checkbox
                            bg={"#e3e3e4"}
                            value="test"
                            accessibilityLabel="This is a dummy checkbox"
                            colorScheme={"success"}
                            defaultIsChecked={taskData?.status}
                        />
                        <Text
                            color={taskData?.status ? "#1DB863" : "#666666"}
                            fontSize="lg"
                        >
                            {taskData?.title}
                        </Text>
                    </HStack>
                </Box>
                <Box style={{ marginLeft: "60%" }}>
                    <HStack justifyContent="center">
                        <PenIcon height="30" width="48" />
                        <TouchableOpacity onPress={() => handleDeletTask(id)}>
                            <TrashIcon height="30" width="48" />
                        </TouchableOpacity>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    );
};
