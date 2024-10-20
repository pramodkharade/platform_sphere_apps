import PrimaryButton from '@components/PrimaryButton';
import SecondaryButton from '@components/SecondaryButton';
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

/**
 * A screen component that displays an image centered in the screen, with a
 * header, body text, and a button below it. The image is resized to fit the
 * screen while maintaining its aspect ratio.
 *
 * @param imageSource the source of the image to display
 * @param headerText the header text to display
 * @param bodyText the body text to display
 * @param buttonText the text of the button to display
 * @param onButtonPress the function to call when the button is pressed
 * @param containerStyle optional style overrides for the outermost container
 * @param imageStyle optional style overrides for the image
 * @param headerTextStyle optional style overrides for the header text
 * @param bodyTextStyle optional style overrides for the body text
 * @param buttonStyle optional style overrides for the button
 * @param buttonTextStyle optional style overrides for the button text
 */
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
          <Spacer size={spacing.xxs} />
          <Text style={[typography.caption, bodyTextStyle]}>{bodyText}</Text>
          <Spacer size={spacing.lg} />
          <PrimaryButton title={buttonText} onPress={onButtonPress} style={buttonStyle} textStyle={buttonTextStyle} />
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
});

export default CenteredImageScreen;
