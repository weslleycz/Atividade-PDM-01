import { Box } from "native-base";
import { TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

type TodoInputProps = {
    addTask: (task: string) => void;
};

export const TodoInput = () => {
    const handleAddNewTask = () => {};

    return (
        <Box style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Adicionar novo todo..."
                placeholderTextColor="#B2B2B2"
                returnKeyType="send"
                selectionColor="#666666"
                //TODO - use value, onChangeText and onSubmitEditing props
            />
            <TouchableOpacity
                testID="add-new-task-button"
                activeOpacity={0.7}
                style={styles.addButton}
                //TODO - onPress prop
            >
                <Icon name="chevron-right" size={24} color="#B2B2B2" />
            </TouchableOpacity>
        </Box>
    );
};
