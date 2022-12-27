import { Feather } from "@expo/vector-icons";
import { Box, HStack, Text } from "native-base";
import { useContext, useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import { deletData } from "../../../database/deletValue";
import { getValue } from "../../../database/getValue";
import { updateValue } from "../../../database/updateValue";
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
                    await getAllTask(tasksContext?.setTasks);
                },
            },
        ]);
    };

    const handleCheckbox = async (id: string) => {
        await updateValue(id, { ...taskData, status: !taskData?.status });
        const data = (await getValue(id)) as Itask;
        setTaskData(data);
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
                    <HStack space={1} justifyContent="center">
                        <TouchableOpacity
                            onPress={() => handleCheckbox(id)}
                            testID={`button-${index}`}
                            activeOpacity={0.7}
                            style={styles.taskButton}
                        >
                            <Box
                                style={
                                    taskData?.status
                                        ? styles.taskMarkerDone
                                        : styles.taskMarker
                                }
                                testID={`marker-${index}`}
                            >
                                {taskData?.status && (
                                    <Feather
                                        name="check"
                                        size={12}
                                        color="#FFF"
                                    />
                                )}
                            </Box>
                        </TouchableOpacity>

                        <Text
                            onPress={() => handleCheckbox(id)}
                            color={taskData?.status ? "#1DB863" : "#666666"}
                            style={{
                                textDecorationLine: taskData?.status
                                    ? "line-through"
                                    : "none",
                                marginTop: 5,
                            }}
                            fontSize="lg"
                        >
                            {taskData?.title}
                        </Text>
                    </HStack>
                </Box>
                <Box style={{ marginLeft: "60%" }}>
                    <HStack justifyContent="center">
                        <TouchableOpacity
                            style={{
                                marginTop: 5,
                            }}
                        >
                            <PenIcon height="30" width="48" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                marginTop: 5,
                            }}
                            onPress={() => handleDeletTask(id)}
                        >
                            <TrashIcon height="30" width="48" />
                        </TouchableOpacity>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    );
};
