// src/components/templates/styles.ts

import { spacing } from '@theme/spacing';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  image: {
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: spacing.lg,
  },
  textInput: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 150,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export { styles };
