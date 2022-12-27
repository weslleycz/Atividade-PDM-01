import { Box } from "native-base";
import { useContext } from "react";
import { TasksContext } from "../../../screens/Home";
import { Task } from "../../molecules/Task";

export const TasksList = () => {
    const tasksContext = useContext(TasksContext);
    return (
        <>
            <Box style={{ marginTop: 25 }}>
                {tasksContext?.tasks?.map((task, index) => (
                    <Task
                        index={index}
                        id={task as string}
                        key={task as string}
                    />
                ))}
            </Box>
        </>
    );
};
