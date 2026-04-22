import { View, Text } from 'react-native';
import React from 'react';
import useDetailUser from '../hooks/useDetailUser';

const DetailUser = () => {
  const {} = useDetailUser();
  return (
    <View>
      <Text>DetailUser</Text>
    </View>
  );
};

export default DetailUser;
