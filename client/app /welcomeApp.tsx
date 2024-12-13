/* The code defines a component called App that serves as the 
main container for displaying a welcome screen to users.*/

/* The code doesn't take any direct inputs from users or other 
parts of the application. Instead, it sets up a welcome screen with 
predefined properties like a logo path, welcome text, and button labels. */

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
