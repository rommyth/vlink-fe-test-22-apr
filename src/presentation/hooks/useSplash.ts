import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { SplashScreenProps } from '../navigations/AppNavigationTypes';

export default function useSplash() {
  const navigation = useNavigation<SplashScreenProps['navigation']>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return {};
}
