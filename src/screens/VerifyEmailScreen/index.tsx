import illustrations from '@assets/illustrations';
import TextFieldWithThreeCTA from '@components/templates/TextFiledWithThreeCTA';

const VerifyEmailScreen: React.FC = ({}) => {
  return (
    <TextFieldWithThreeCTA
      imageSource={illustrations.verifyEmail}
      heading="Verify your email"
      body="We have sent you a verification email. Please check your inbox and click on the link to verify your account."
      placeholder="Enter your email"
      buttonOneText="Try with Phone"
      buttonTwoText="Send Code"
      buttonThreeSupplementalText="Remember Password? "
      buttonThreeText="Go back"
      onButtonOnePress={() => {}}
      onButtonTwoPress={() => {}}
      onButtonThreePress={() => {}}
    />
  );
};

export default VerifyEmailScreen;
