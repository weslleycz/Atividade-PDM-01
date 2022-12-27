import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskButton: {
        paddingHorizontal: 24,
        paddingVertical: 10,
        marginBottom: 4,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        textAlignVertical: "center",
    },
    cont: {
        justifyContent: "space-around",
    },
    taskMarker: {
        height: 20,
        width: 20,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#B2B2B2",
        marginRight: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    taskMarkerDone: {
        height: 20,
        width: 20,
        borderRadius: 4,
        backgroundColor: "#1DB863",
        marginRight: 15,
        alignItems: "center",
        justifyContent: "center",
    },
});
