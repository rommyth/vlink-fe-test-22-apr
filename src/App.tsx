import { Text, View } from 'react-native';
import { useDeviceContext } from 'twrnc';
import tw from './shared/libs/tailwindInstance';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './presentation/navigations/AppNavigation';
import './shared/libs/googleSigninInstnace';

const App = () => {
  // enable prefix
  useDeviceContext(tw);

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
