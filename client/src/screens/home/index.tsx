import React from 'react';
import { View, Text } from 'react-native';
import Layout from '../../modules/layout/components/layout';

const HomeScreen: React.FC = () => {
  return (
    <Layout>
      <View className="flex flex-col items-start">
        <Text className="font-semibold text-3xl text-gray-900">Bienvenido, Faustino</Text>
      </View>
    </Layout>
  );
};
export default HomeScreen;
