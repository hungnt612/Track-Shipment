/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';

type CardProperties = {
  name: string;
  onPress: (val: string) => void;
  status: string;
  icon: any;
  cardBackgroundColor: any;
  iconBackgroundColor: any;
  type: string;
  nameTextColor: any;
};

const Card: React.FC<CardProperties> = ({
  name,
  status,
  onPress,
  icon,
  cardBackgroundColor,
  iconBackgroundColor,
  type,
  nameTextColor,
}) => {
  if (type === 'inHome') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: cardBackgroundColor,
          borderRadius: 12,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 2,
            //   backgroundColor: 'blue',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: iconBackgroundColor,
              borderRadius: 50,
              alignSelf: 'flex-end',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={icon} style={{width: 25, height: 25}} />
          </View>
        </View>
        <View
          style={{
            flex: 3,
            //   backgroundColor: 'red',
            justifyContent: 'center',
            marginLeft: 10,
          }}>
          <Text style={{color: nameTextColor, ...FONTS.h3}}>{name}</Text>
          <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
            {status}
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};

export default Card;
