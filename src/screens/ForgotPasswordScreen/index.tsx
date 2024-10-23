import illustrations from '@assets/illustrations';
import TextFieldWithThreeCTA from '@components/templates/TextFiledWithThreeCTA';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from 'types/navigation';

interface ForgotPasswordScreenProps {
  navigation: StackNavigationProp<AuthStackParamList, 'ForgotPassword'>;
}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation: navigator }) => {
  return (
    <TextFieldWithThreeCTA
      imageSource={illustrations.forgotPassword}
      heading="Forgot Password?"
      body="Don't worry! It occurs. Please enter the email id linked with your account."
      placeholder="Enter your email"
      buttonOneText="Try with Phone"
      buttonTwoText="Send Code"
      buttonThreeSupplementalText="Remember Password? "
      buttonThreeText="Login"
      onButtonOnePress={() => {}}
      onButtonTwoPress={() => {}}
      onButtonThreePress={() => {
        navigator.goBack();
      }}
    />
  );
};

export default ForgotPasswordScreen;
