import WelcomeScreen from './WelcomeScreen';

const App = () => {
  return (
    <WelcomeScreen
      logoSrc="/path/to/logo.png"
      headingText="Welcome to our platform"
      primaryButtonText="Get Started"
      secondaryButtonText="Menu"
      onPrimaryClick={() => console.log('Primary button clicked')}
      onSecondaryClick={() => console.log('Secondary button clicked')}
    />
  );
};

export default App;
