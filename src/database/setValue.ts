import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../types/Task";

type Data = {
    kay: string;
    value: Task;
};

export const setValue = async ({ kay, value }: Data) => {
    try {
        await AsyncStorage.setItem(kay, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
};
