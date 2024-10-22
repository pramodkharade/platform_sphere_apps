import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';

const typography = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontFamily: 'Outfit-Bold',
    color: colors.text,
  },
  heading2: {
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
    color: colors.text,
  },
  heading3: {
    fontSize: 18,
    fontFamily: 'Outfit-SemiBold',
    color: colors.text,
  },
  body: {
    fontSize: 16,
    fontFamily: 'Outfit-Regular',
    color: colors.text,
  },
  bodyBold: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Outfit-Medium',
    color: colors.text,
  },
  caption: {
    fontSize: 14,
    fontFamily: 'Outfit-Regular',
    color: colors.textDim,
  },
  captionBold: {
    fontSize: 14,
    fontFamily: 'Outfit-Medium',
    color: colors.textDim,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Outfit-Bold',
    color: colors.palette.surface,
  },
  labelSecondary: {
    fontSize: 16,
    fontFamily: 'Outfit-Bold',
    color: colors.palette.primary,
  },
  pillSecondaryButton: {
    fontSize: 12,
    fontFamily: 'Outfit-Medium',
    color: colors.palette.primary,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Outfit-Medium',
    color: '#8E8E8E',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: colors.palette.primary,
    fontFamily: 'Outfit-SemiBold',
    fontSize: 16,
  },
  textButton: {
    color: colors.palette.textButton,
    fontFamily: 'Outfit-Bold',
    fontSize: 16,
  },
  bottomTextButton: {
    color: colors.palette.accent,
    fontFamily: 'Outfit-SemiBold',
    fontSize: 16,
  },
});

export default typography;
