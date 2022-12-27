import { Box } from "native-base";
import { useContext, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";
import Icon from "react-native-vector-icons/Feather";
import { setValue } from "../../../database/setValue";
import { TasksContext } from "../../../screens/Home";
import { getAllTask } from "../../../services/getAllTask";
import { styles } from "./styles";

export const TodoInput = () => {
    const [text, setText] = useState("");
    const tasksContext = useContext(TasksContext);

    const handleAddNewTask = async () => {
        if (text != "") {
            const task = {
                title: text,
                status: false,
            };
            const kay = uuid.v4() as string;
            await setValue({ kay, value: task });
            setText("");
            getAllTask(tasksContext?.setTasks);
        }
    };

    return (
        <Box style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Adicionar novo todo..."
                placeholderTextColor="#B2B2B2"
                returnKeyType="send"
                value={text}
                selectionColor="#666666"
                onSubmitEditing={() => handleAddNewTask()}
                onChangeText={(valor) => setText(valor)}
            />
            <TouchableOpacity
                testID="add-new-task-button"
                activeOpacity={0.7}
                style={styles.addButton}
                onPress={() => handleAddNewTask()}
            >
                <Icon name="chevron-right" size={24} color="#B2B2B2" />
            </TouchableOpacity>
        </Box>
    );
};
