import AsyncStorage from "@react-native-async-storage/async-storage";

type Data = {
    kay: string;
    value: any;
};

export const setValue = async ({ kay, value }: Data) => {
    try {
        await AsyncStorage.setItem(kay, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
};
