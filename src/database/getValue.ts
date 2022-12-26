import AsyncStorage from "@react-native-async-storage/async-storage";

export const getValue = async (kay: string) => {
    try {
        const value = await AsyncStorage.getItem(kay);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        alert("Ocorreu um erro inesperado!!");
    }
};
