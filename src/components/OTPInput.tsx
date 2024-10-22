import { colors } from '@theme/colors';
import React, { useEffect, useRef, useState } from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native';

interface OTPInputProps {
  length: number;
  onChange(otp: string): void;
  keyboardType?: KeyboardTypeOptions;
  autoFocus?: boolean;
}

const OTPInput: React.FC<OTPInputProps> = ({
  length,
  onChange,
  keyboardType = 'number-pad',
  autoFocus = false,
}: OTPInputProps) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<(TextInput | null)[]>(new Array(length)).current;

  useEffect(() => {
    onChange(otp.join(''));
  }, [onChange, otp]);

  const handleChangeText = (text: string, index: number): void => {
    if (text.length > 1) {
      return;
    }
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < length - 1) {
      inputs[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<TextInput>, index: number): void => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          value={digit}
          keyboardType={keyboardType}
          maxLength={1}
          ref={(ref) => (inputs[index] = ref)}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          autoFocus={autoFocus && index === 0}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  input: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: colors.palette.primary,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Outfit-SemiBold',
    backgroundColor: colors.palette.primaryButton,
  },
});

/**
 * Renders a row of TextInput components for entering an OTP.
 *
 * @param {number} length The number of digits in the OTP.
 * @param {(otp: string) => void} onChange Called when the OTP changes.
 * @param {KeyboardTypeOptions} [keyboardType="number-pad"] The keyboard type to use.
 * @param {boolean} [autoFocus=false] Whether the first input should have autofocus.
 * @returns {JSX.Element}
 */
export default OTPInput;
