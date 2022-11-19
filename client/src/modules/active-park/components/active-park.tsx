import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Park } from '../../graphql/graphql';

interface ActiveParkProps {
  park: Park;
}

const ActivePark: React.FC<ActiveParkProps> = (props) => {
  const { park } = props;

  const timeLeft = useMemo(() => {
    let minutesLeft: number = 0;
    if (park.createdAt && park.duration) {
      const now = new Date();
      now.setMinutes(now.getMinutes() + park.duration);
      const total: number = Date.parse(now.toString()) - Date.parse(park.createdAt.toString());
      minutesLeft = Math.floor((total / 1000 / 60) % 60);
    }
    return minutesLeft;
  }, [park]);

  return (
    <View className="flex flex-col p-2.5 bg-gray-800 shadow-xl rounded-lg w-full">
      {/* Top */}
      <View className="flex flex-row items-center justify-between">
        {/* Left */}
        <View>
          <Text className="font-bold text-2xl text-white">Active Park</Text>
          <Text className="font-semibold text-lg text-gray-200">Located At: {park.location}</Text>
          <Text className="font-semibold text-lg text-gray-200">Domain: {park.domain?.domain}</Text>
        </View>

        {/* Right */}
        <View className="flex flex-col items-center">
          <Icon name="clock" size={36} color="#0ea5e9" />
          <Text className="font-medium text-lg text-gray-100 mt-1">{timeLeft}' left</Text>
        </View>
      </View>
    </View>
  );
};

export default ActivePark;
