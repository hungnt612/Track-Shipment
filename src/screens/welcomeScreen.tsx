/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FONTS, COLORS, icons, images} from '../constants';

const WelcomeScreen = () => {
  const renderImageSection = () => {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={images.login}
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            marginTop: '10%',
          }}
          resizeMode="contain"
        />
      </View>
    );
  };

  const renderDetailSection = () => {
    return (
      <View
        style={{
          flex: 0.7,
          backgroundColor: COLORS.black,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.largeTitle,
            marginVertical: 20,
          }}>
          Track Shipment
        </Text>
        <View>
          <Text
            style={{color: COLORS.orange, textAlign: 'center', ...FONTS.body3}}>
            Now you can easily trach your shipments
          </Text>
          <Text
            style={{color: COLORS.orange, textAlign: 'center', ...FONTS.body3}}>
            and organize a hassle free delivery!
          </Text>
        </View>
        <View style={{marginVertical: 20, alignItems: 'center'}}>
          {renderIconSection()}
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.lightYellow,
              width: 150,
              height: 60,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              console.log('hihi');
            }}>
            <Text style={{color: COLORS.black, ...FONTS.body2}}>Let's go</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderIconSection = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={icons.searchGeoWhite} style={{width: 50, height: 50}} />
        <Image
          source={icons.dots}
          style={{width: 40, height: 10, marginRight: 8}}
        />
        <Image
          source={icons.deliveryTruckWhite}
          style={{width: 50, height: 50}}
        />
        <Image
          source={icons.dots}
          style={{width: 40, height: 10, marginHorizontal: 8}}
        />
        <Image source={icons.locationPin} style={{width: 50, height: 50}} />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightYellow,
        flexDirection: 'column',
      }}>
      {renderImageSection()}
      {renderDetailSection()}
    </View>
  );
};

export default WelcomeScreen;
