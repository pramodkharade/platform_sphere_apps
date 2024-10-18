import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking, SafeAreaView, Platform } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import BackButton from '../../components/BackButton';
import typography from '@theme/styles/typography';

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
      <BackButton />
      <View style={styles.content}>
        <Text style={typography.heading1} accessibilityRole="header">
          About
        </Text>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {[1, 2, 3].map((i) => (
            <Text key={i} style={typography.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </Text>
          ))}
        </ScrollView>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isTermsAccepted}
            onValueChange={setTermsAccepted}
            style={styles.checkbox}
            boxType="square" // Add this for iOS to ensure a square checkbox
            tintColors={{ true: '#000', false: '#000' }} // Customize tint colors
            accessibilityLabel="Accept terms and conditions"
          />
          <Text style={typography.captionBold}>
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
  scrollView: {
    flex: 1,
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 20,
    paddingBottom: 50,
  },
  checkbox: {
    width: 24,
    height: 24, 
    ...Platform.select({
      ios: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
      },
      android: {
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], 
      },
    }),
    marginRight:10,
    marginBottom:10,
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
