import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextError = ({ error }) => {
    return (
        <Text style={styles.textErro}>{error}</Text>
    );
};

const styles = StyleSheet.create({
    textErro: {
        color: 'red',
        marginBottom: 9,
        marginTop: -10,
        marginLeft: 5
    }
})

export default TextError;
