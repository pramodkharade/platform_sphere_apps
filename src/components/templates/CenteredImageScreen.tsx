import Spacer from '@components/spacer';
import { colors } from '@theme/colors';
import { spacing } from '@theme/spacing';
import typography from '@theme/styles/typography';
import React from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  ImageStyle,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';

interface CenteredImageScreenProps {
  imageSource: ImageSourcePropType;
  headerText: string;
  bodyText: string;
  buttonText: string;
  onButtonPress: (event: GestureResponderEvent) => void;

  // Optional style overrides
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  headerTextStyle?: TextStyle;
  bodyTextStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
}

const CenteredImageScreen: React.FC<CenteredImageScreenProps> = ({
  imageSource,
  headerText,
  bodyText,
  buttonText,
  onButtonPress,
  containerStyle,
  imageStyle,
  headerTextStyle,
  bodyTextStyle,
  buttonStyle,
  buttonTextStyle,
}) => {
  const { height } = useWindowDimensions();

  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView
        contentContainerStyle={[styles.scrollViewContent, { minHeight: height }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Image source={imageSource} style={[styles.image, imageStyle]} resizeMode="contain" />
          <Text style={[typography.heading1, headerTextStyle]}>{headerText}</Text>
          <Spacer size={4} />
          <Text style={[typography.caption, bodyTextStyle]}>{bodyText}</Text>
          <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onButtonPress}>
            <Text style={[typography.label, buttonTextStyle]}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.palette.surface,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  image: {
    height: 200,
    aspectRatio: 1,
    marginBottom: spacing.md,
  },
  button: {
    marginTop: spacing.xl,
    backgroundColor: colors.palette.button,
    padding: spacing.sm,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default CenteredImageScreen;
