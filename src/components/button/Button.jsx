import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

const Button = ({ labelButton, onPress, loading }) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={[styles.button, loading && styles.buttonLoading]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles.text}>{labelButton}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#800080',
    borderRadius: 7,
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonLoading: {
    backgroundColor: 'gray',
  },
  text: {
    fontWeight: '500',
    color: 'white',
  },
});
