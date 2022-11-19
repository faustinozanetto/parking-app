import React from 'react';
import { View, Text } from 'react-native';
import ActivePark from '../../modules/active-park/components/active-park';
import Layout from '../../modules/layout/components/layout';

const HomeScreen: React.FC = () => {
  return (
    <Layout>
      <View className="flex flex-col items-start space-y-4 w-full">
        <Text className="font-semibold text-3xl text-gray-900 mb-2">Bienvenido, Faustino</Text>
        <ActivePark
          park={{
            domain: {
              domain: 'AC472UL',
            },
            location: 'Alem 150',
            createdAt: new Date('2022-11-18 23:30:01.58'),
            duration: 1,
          }}
        />
      </View>
    </Layout>
  );
};
export default HomeScreen;
