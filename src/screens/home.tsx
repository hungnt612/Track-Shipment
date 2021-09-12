/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FONTS, COLORS, icons, images} from '../constants';

const Home = () => {
  const renderHearderSection = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          //   marginTop: 2,
          //   backgroundColor: 'red',
          marginHorizontal: 30,
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            // backgroundColor: 'green'
          }}>
          <Image source={icons.dots2Gray} style={{width: 30, height: 30}} />
        </TouchableOpacity>
        <View style={{flex: 2}}>
          <Text
            style={{
              color: COLORS.lightGray2,
              ...FONTS.h3,
              textAlign: 'center',
            }}>
            Shipment
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'blue'
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.lightOrange,
              width: 50,
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'flex-end',
            }}>
            <Image
              source={images.profile}
              style={{width: 40, height: 40, borderRadius: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderDetailSection = () => {
    return (
      <View
        style={{flexDirection: 'column', marginHorizontal: 26, marginTop: 40}}>
        <View style={{marginHorizontal: 26}}>
          <Text style={{color: COLORS.lightGray3, ...FONTS.h1}}>Universal</Text>
          <Text style={{color: COLORS.lightGray3, ...FONTS.h1}}>
            Parcel Tracking
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 80,
            backgroundColor: COLORS.lightOrange,
            marginVertical: 26,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: '96%',
              height: '86%',
              borderRadius: 18,
              backgroundColor: COLORS.black2,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 2,
                // backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: COLORS.lightOrange, ...FONTS.h3}}>
                Enter track number
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: 'blue'
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginRight: 10,
              }}>
              <View
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: COLORS.lightOrange,
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={icons.deliveryTruck}
                  style={{width: 25, height: 25}}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: 26,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              //  backgroundColor: 'red'
            }}>
            <View
              style={{
                width: '100%',
                height: 20,
                backgroundColor: COLORS.lightGray2,
                borderRadius: 20,
                marginTop: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.infomation}
                style={{width: 12, height: 12}}
              />
            </View>
          </View>
          <View style={{flex: 12, marginLeft: 10}}>
            <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
              Enter the code and we will check
            </Text>
            <Text style={{color: COLORS.lightGray2, ...FONTS.body4}}>
              where is your package
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black2}}>
      <StatusBar hidden />
      <View style={{flex: 1}}>
        {renderHearderSection()}
        {renderDetailSection()}
      </View>
    </SafeAreaView>
  );
};

export default Home;
