import { Text, View } from 'react-native';
import { useDeviceContext } from 'twrnc';
import tw from './shared/libs/tailwindInstance';

const App = () => {
  // enable prefix
  useDeviceContext(tw);

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
