import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface PillButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const PillButton: React.FC<PillButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={typography.pillSecondaryButton}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.md,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
});

export default PillButton;
