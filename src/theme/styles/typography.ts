import { StyleSheet } from 'react-native';

import { colors } from '../../theme/colors';

const typography = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Outfit-Bold',
    color: colors.text,
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Outfit-Bold',
    color: colors.text,
  },
  heading3: {
    fontSize: 18,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    fontFamily: 'Outfit-Medium',
    color: colors.textDim,
  },
  pillSecondaryButton: {
    fontSize: 12,
    fontFamily: 'Outfit-Medium',
    color: colors.palette.primary,
  },
});

export default typography;
