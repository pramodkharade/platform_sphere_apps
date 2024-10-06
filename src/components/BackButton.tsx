
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const BackButton = () => {

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{'←'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    top: 10, 
    padding: 10, 
    zIndex: 1,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default BackButton;
