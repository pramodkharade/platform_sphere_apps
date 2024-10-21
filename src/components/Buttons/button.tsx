import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography'; 

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={typography.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.palette.buttonBackground,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg, 
    borderRadius: spacing.sm, 
    marginVertical: spacing.sm,
    alignItems: 'center',
  }
});

export default Button;
