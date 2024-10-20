import { colors } from '@theme/colors';
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

const SecondaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress, style, textStyle, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[typography.labelSecondary, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.xs,
    backgroundColor: colors.palette.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.palette.button,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default SecondaryButton;
