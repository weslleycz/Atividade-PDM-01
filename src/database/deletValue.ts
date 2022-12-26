import AsyncStorage from "@react-native-async-storage/async-storage";

export const deletData = async (kay: string) => {
    try {
        await AsyncStorage.removeItem(kay);
    } catch (error) {
        console.log(error);
    }
};
