import { Text, useColorScheme, View } from 'react-native';
import { useAppColorScheme, useDeviceContext } from 'twrnc';
import tw from './shared/libs/tailwindInstance';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './presentation/navigations/AppNavigation';
import './shared/libs/googleSigninInstnace';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

const queryClient = new QueryClient();

const App = () => {
  // enable prefix
  useDeviceContext(tw);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppNavigation />
        <Toast />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
