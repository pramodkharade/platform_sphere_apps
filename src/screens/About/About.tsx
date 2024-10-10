import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking, SafeAreaView, Platform } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import BackButton from '../../components/BackButton';

interface LinkProps {
  url: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ url, children }) => (
  <Text style={styles.link} onPress={() => Linking.openURL(url)} accessibilityRole="link">
    {children}
  </Text>
);

const AboutScreen: React.FC = () => {
  const [isTermsAccepted, setTermsAccepted] = useState<boolean>(false);

  const handleLinkPress = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.warn(`Cannot open URL: ${url}`);
      }
    } catch (error) {
      console.error(`Error opening URL: ${error}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <BackButton style={styles.backButton} />
        <Text style={styles.header} accessibilityRole="header">
          About
        </Text>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {[1, 2, 3].map((i) => (
            <Text key={i} style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </Text>
          ))}
        </ScrollView>

        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxBorder}>
            <CheckBox
              value={isTermsAccepted}
              onValueChange={setTermsAccepted}
              style={styles.checkbox}
              accessibilityLabel="Accept terms and conditions"
            />
          </View>
          <Text style={styles.label}>
            I Am Accepting <Link url="https://example.com/terms">Terms And Conditions</Link> &{' '}
            <Link url="https://example.com/privacy">Privacy Policy</Link>
          </Text>
        </View>
      </View>

      {isTermsAccepted && (
        <TouchableOpacity
          style={styles.button}
          accessibilityLabel="Continue"
          accessibilityHint="Proceeds to next screen"
        >
          <Text style={styles.buttonText}>→</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  header: {
    fontSize: 28,
    fontWeight: Platform.select({ ios: '600', android: 'bold' }),
    marginBottom: 20,
    color: '#000',
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingBottom: 50,
  },
  checkboxBorder: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#333',
    marginRight: 10
  },
  checkbox: {
    width: 24,
    height: 18,

    ...Platform.select({
      ios: {
        borderRadius: 4,
      },
      android: {
        borderRadius: 2,
      },
    }),
  },
  label: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  link: {
    color: '#0066CC',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#9c27b0',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },
});

export default AboutScreen;
