import { createContext, useEffect, useState } from "react";
import { Header } from "../../components/molecules/Header";
import { HomeContainer } from "../../components/molecules/HomeContainer";
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
                </HomeContainer>
            </TasksContext.Provider>
        </>
    );
};
