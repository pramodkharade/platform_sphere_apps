import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  scrollView: ViewStyle;
  scrollViewContent: ViewStyle;
  logo: ImageStyle;
  title: TextStyle;
}

const styles: Styles = {
  container: {
    flex: 1,
  },
  scrollView: {
    width: '100%',
    padding: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
};

export default styles;
