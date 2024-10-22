import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography';
import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const PrimaryTextButton: React.FC<PrimaryButtonProps> = ({ title, onPress, style, textStyle, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[typography.textButton, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default PrimaryTextButton;
