import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography';
import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface PrimaryButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress, style, textStyle, disabled, loading }) => {
  const handlePress = (event: GestureResponderEvent) => {
    if (!loading && !disabled) {
      onPress(event);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, style, (disabled || loading) && styles.disabled]}
      onPress={handlePress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors.palette.surface} />
      ) : (
        <Text style={[typography.label, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.xs,
    backgroundColor: colors.palette.button,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default PrimaryButton;
