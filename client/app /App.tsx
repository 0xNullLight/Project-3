/* The main purpose of this code is to create a simple root component 
that can be mounted to the webpage, while delegating the actual UI rendering 
to the LastScreen component. This pattern helps organize 
code by having a clear entry point (App) 
that then renders more specific components (LastScreen). */

import { LastScreen } from './components';

function App() {
  return <LastScreen />;
}

export default App;
