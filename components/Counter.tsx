import { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, GestureResponderEvent } from "react-native";

export default function Counter() {
    
    const [counter, setCounter] = useState(1);

    const pressHandler = (amount: number): void => {
        setCounter((prev) => prev + amount);
        console.log(`Button Pressed do ${counter}`)
    };

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => pressHandler(-1)}
                style={styles.button}>
                <Text>-</Text>
            </TouchableOpacity>

            <Text style={styles.text}>{counter}</Text>

            <TouchableOpacity
                onPress={() => pressHandler(1)}
                style={styles.button}>
                <Text>+</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 20,
        backgroundColor: "#ceb3c5"
    },
    text: {
        paddingVertical: 20,
    },
    container: {
        overflow: "hidden",
        margin: 30,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        alignSelf: "stretch",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "lightgrey"
    }
})