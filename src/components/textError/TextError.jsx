import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const TextError = ({ error }) => {
    return (
        <View>
            <Text style={styles.textErro}>{error}</Text>
        </View>
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
