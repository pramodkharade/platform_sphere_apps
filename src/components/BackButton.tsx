import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Reusable BackButton component
const BackButton: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BackButton;
