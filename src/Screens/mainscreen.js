// MainScreen.js
import { View, StyleSheet, Text } from "react-native";
import AllButtons from "../components/Allbuttons";
import { useState } from "react";
import { evaluate } from 'mathjs';


const MainScreen = () => {
    const [calculationString, setCalculationString] = useState('');
    const [answer, setAnswer] = useState(0);
    const handleSendBackData = (item) => {
        if (item === 'C') {
            setCalculationString('')
            setAnswer(0)
        }
        else if (item === '=') {
            calculateAnswer(calculationString)
        }
        else {
            setCalculationString(prevCalculationString => prevCalculationString + item);
        }
        // if (!isNaN(item)) {
        // } else {
        //     // Handle other types of items if necessary
        // }
    }; const calculateAnswer = (calculationString) => {
        try {
            const result = evaluate(calculationString);
            if (!isNaN(result) && result !== Infinity) {
                setAnswer(result);
                console.log("Result:", result);
            } else {
                setAnswer("Error: Invalid expression");
            }
        } catch (error) {
            console.error("Error:", error.message);
            setAnswer("invalid");
        }
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: '30%' }}>
                <View style={styles.container}>
                    <Text style={styles.calculation} numberOfLines={1} ellipsizeMode="tail">{calculationString}</Text>

                    <Text style={styles.result} numberOfLines={1}>{answer}</Text>
                </View>

            </View>
            <View style={{ height: '70%' }}>
                <AllButtons sendBackData={(item) => { handleSendBackData(item) }} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white'
    },
    calculation: {
        color: '#BEBEBE',
        height: '50%',
        paddingRight: '5%',
        textAlign: 'right',
        textAlignVertical: 'center',
        fontWeight: '600',
        fontSize: 30,
        overflow: 'hidden'
    },
    result: {
        color: 'black',
        paddingRight: '5%',
        textAlign: 'right',
        textAlignVertical: 'center',
        fontWeight: '800',
        fontSize: 45
    }
});

export default MainScreen;
