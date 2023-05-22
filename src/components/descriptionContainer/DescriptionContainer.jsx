import react from "react";
import { View, StyleSheet, Text } from "react-native";


const DescriptionContainer = ({ data }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CCCCCC',
        width: '100%',
        height: 50,
        borderRadius: 11,
        padding: 10,
        marginVertical: 10,
        justifyContent:'center'
    },
    text: {
        fontWeight: 500,

    }
});
export default DescriptionContainer;