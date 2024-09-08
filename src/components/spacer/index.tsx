import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

// Define props for the Spacer component
interface SpacerProps {
  size?: number; // Size is expected to be a number
  horizontal?: boolean;
}

// Adjusted to ensure proper styling for both horizontal and vertical spacers
const Spacer: React.FC<SpacerProps> = ({ horizontal = false, size = 8 }) => {
  // Define conditional styles
  const spacerStyle: ViewStyle = horizontal ? { width: size } : { height: size };

  return <View style={[styles.spacer, spacerStyle]} />;
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  spacer: {
    width: 'auto',
    height: 'auto',
  },
});

// Default export of the Spacer component
export default Spacer;
