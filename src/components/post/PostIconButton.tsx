// components/ActionButton.tsx

import typography from '@theme/styles/typography';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export enum IconType {
  Appreciation = 'appreciation.png',
  Comment = 'comment.png',
  Share = 'share.png',
}

interface ActionButtonProps {
  icon: IconType;
  text: string;
  onPress?: () => void;
}

const getImageSource = (icon: IconType) => {
  switch (icon) {
    case IconType.Appreciation:
      return require('../../assets/icons/appreciation.png');
    case IconType.Comment:
      return require('../../assets/icons/comment.png');
    case IconType.Share:
      return require('../../assets/icons/share.png');
    default:
      return null;
  }
};

export const ActionButton: React.FC<ActionButtonProps> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <View style={styles.imageButton}>
        <Image source={getImageSource(icon)} style={styles.icon} />
        <Text style={typography.caption}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    padding: 8,
  },
  imageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    margin: 4,
  },
});

export default ActionButton;
