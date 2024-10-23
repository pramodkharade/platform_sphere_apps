import { colors } from '@theme/colors';
import { ImageStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  scrollView: ViewStyle;
  scrollViewContent: ViewStyle;
  logo: ImageStyle;
}

const styles: Styles = {
  container: {
    flex: 1,
    backgroundColor: colors.palette.surface,
  },
  scrollView: {
    width: '100%',
    padding: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
};

export default styles;
