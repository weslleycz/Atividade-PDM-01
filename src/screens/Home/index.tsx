import { createContext, useEffect, useState } from "react";
import { Header } from "../../components/molecules/Header";
import { HomeContainer } from "../../components/molecules/HomeContainer";
import { TasksList } from "../../components/organisms/TasksList";
import { getAllTask } from "../../services/getAllTask";
import { ItasksContext } from "../../types/ItasksContext";

export const TasksContext = createContext<ItasksContext | null>(null);

export const Home = () => {
    const [tasks, setTasks] = useState<String[] | null>(null);
    useEffect(() => {
        getAllTask(setTasks);
    }, []);

    return (
        <>
            <TasksContext.Provider value={{ setTasks, tasks }}>
                <HomeContainer>
                    <Header />
                    <TasksList />
                </HomeContainer>
            </TasksContext.Provider>
        </>
    );
};
