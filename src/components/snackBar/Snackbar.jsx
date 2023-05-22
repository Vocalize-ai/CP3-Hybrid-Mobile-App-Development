import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Snackbar = ({ message, duration = 3000, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose]);

  const handleSnackbarClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <View style={styles.snackbar}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={handleSnackbarClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    bottom: 30,
    left: '41%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#f44336',
    color: '#fff',
    padding: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    flex: 1,
    marginRight: 10,
    color: '#fff',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Snackbar;
