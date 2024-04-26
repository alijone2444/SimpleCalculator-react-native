import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Constants from "../Constants/constants";

// Common styles for buttons
const buttonCommon = {
    backgroundColor: '#e5e7eb',
    marginBottom: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25, // Add border radius for rounded corners
};

const AllButtons = (props) => {

    const handleButtonClick = (item) => {
        if (item === 'x') {
            props.sendBackData('*')
        }
        else {
            props.sendBackData(item)
        }
    }
    return (
        <View style={styles.container}>
            {Constants.buttons.map((item, index) => (
                <TouchableOpacity key={index} style={getButtonStyles(item)} onPress={() => { handleButtonClick(item) }}>
                    <Text style={handleTexStyles(item)}>{String(item)}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};


const getButtonStyles = (item) => {
    if (item === 0) {
        return styles.button0
    }
    else if (item === '/' || item === 'x' || item === '-' || item === '+') {
        return styles.buttonYellow
    }
    else if (item === '=') {
        return styles.buttonGreen
    }
    else if (item === 'C') {
        return styles.buttonClear
    }
    else {
        return styles.button
    }
}
const handleTexStyles = (item) => {
    if (item === 'C') {
        return styles.buttonTextClear
    }
    else if (item === '/' || item === 'x' || item === '-' || item === '+' || item === '=') {
        return styles.buttonTextWhite
    }
    else {
        return styles.buttonText
    }


}


const styles = StyleSheet.create({
    container: {
        borderTopColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap', // Allow buttons to wrap to the next line
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%'
    },
    button: {
        ...buttonCommon,
        width: '24%', // Adjust width to fit 4 buttons in a row
        height: '19%', // Adjust height as needed
    },
    button0: {
        ...buttonCommon,
        height: '19%', // Adjust height as needed
        width: '48%', // Adjust width to fit 2 buttons in a row
    },
    buttonYellow: {
        ...buttonCommon,
        width: '24%', // Adjust width to fit 4 buttons in a row
        height: '19%', // Adjust height as needed
        backgroundColor: '#f59e0b'
    },
    buttonGreen: {
        ...buttonCommon,
        width: '24%', // Adjust width to fit 4 buttons in a row
        height: '19%', // Adjust height as needed
        backgroundColor: '#10b981'
    },
    buttonClear: {
        ...buttonCommon,
        width: '24%', // Adjust width to fit 4 buttons in a row
        height: '19%', // Adjust height as needed
        backgroundColor: '#fef3c7',
    },
    buttonText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },
    buttonTextClear: {
        color: '#da9f5c',
        fontSize: 22,
        fontWeight: 'bold'
    },
    buttonTextWhite: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default AllButtons;