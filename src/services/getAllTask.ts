import { getAll } from "../database/getAll";

export const getAllTask = async (setTasks:any) => {
    const tasksAll = await getAll() as unknown as String[] | null;
    setTasks(tasksAll);
};