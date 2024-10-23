// src/components/templates/TextFieldWithThreeCTA.tsx

import PrimaryButton from '@components/PrimaryButton';
import PrimaryTextButton from '@components/PrimaryTextButton';
import Spacer from '@components/spacer';
import typography from '@theme/styles/typography';
import React, { useState } from 'react';
import { Image, ImageSourcePropType, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { styles } from './TextFieldWithThreeCTA.style';

interface Props {
  imageSource: ImageSourcePropType;
  heading: string;
  body: string;
  placeholder: string;
  buttonOneText: string;
  buttonTwoText: string;
  buttonTwoLoading?: boolean;
  buttonThreeSupplementalText?: string;
  buttonThreeText: string;
  onButtonOnePress: () => void;
  onButtonTwoPress: () => void;
  onButtonThreePress: () => void;
}

const TextFieldWithThreeCTA: React.FC<Props> = ({
  imageSource,
  heading,
  body,
  placeholder,
  buttonOneText,
  buttonTwoText,
  buttonTwoLoading,
  buttonThreeSupplementalText,
  buttonThreeText,
  onButtonOnePress,
  onButtonTwoPress,
  onButtonThreePress,
}) => {
  const [text, setText] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={imageSource} style={styles.image} />
      <Text style={typography.heading2}>{heading}</Text>
      <Spacer />
      <Text style={typography.body}>{body}</Text>
      <Spacer />
      <TextInput
        style={styles.textInput}
        mode="outlined"
        placeholder={placeholder}
        value={text}
        textContentType="emailAddress"
        keyboardType="email-address"
        onChangeText={(text) => setText(text)}
        contentStyle={typography.body}
      />
      <PrimaryTextButton title={buttonOneText} onPress={onButtonOnePress} />

      <View style={styles.buttonContainer}>
        <PrimaryButton title={buttonTwoText} onPress={onButtonTwoPress} loading={buttonTwoLoading} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={typography.body}>{buttonThreeSupplementalText}</Text>
          <TouchableOpacity onPress={onButtonThreePress}>
            <Text style={typography.bottomTextButton}>{buttonThreeText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default TextFieldWithThreeCTA;
