/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {icons, images, theme, COLORS, SIZES, FONTS} from '../constants';
import {Svg, Polygon} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur';
import store from '../redux/store';
import _ from 'lodash';

type CustomProperties = {
  item: any;
  visible: boolean;
  type: string;
};

const CustomModal: React.FC<CustomProperties> = ({item, visible, type}) => {
  // var _ = require('lodash');
  const [text, onChangeText] = React.useState('');
  const renderBtn = () => {
    return (
      <View
        style={{
          width: '80%',
          height: 80,
          backgroundColor: COLORS.lightOrange,
          marginVertical: 26,
          borderRadius: 20,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '96%',
            height: '86%',
            borderRadius: 18,
            backgroundColor: COLORS.black2,
            flexDirection: 'row',
            alignSelf: 'center',
          }}
          onPress={() => {
            console.log(text);
          }}>
          <View
            style={{
              flex: 2,
              // backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: COLORS.lightOrange, ...FONTS.h3}}>
              Find my package
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
    );
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <BlurView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        blurType="light"
        blurAmount={20}
        reducedTransparencyFallbackColor={COLORS.black}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          onPress={() => {
            console.log('dm hieu');
          }}
          activeOpacity={1}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: '75%',
              width: '85%',
              height: '30%',
              // backgroundColor: 'rgba(0,0,0,0.5)',
              backgroundColor: COLORS.black2,
              borderRadius: 18,
            }}>
            {/* <Text style={{color: 'white'}}>hihi</Text> */}
            <View
              style={{
                width: '80%',
                height: '24%',
                backgroundColor: 'blue',
                borderRadius: 18,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                onChangeText={onChangeText}
                value={text}
                style={{
                  width: '96%',
                  height: '86%',
                  borderRadius: 18,
                  backgroundColor: 'red',
                }}
                placeholder="Input your code"
                textAlign={'center'}
              />
            </View>
            {renderBtn()}
          </View>
        </TouchableOpacity>
      </BlurView>
    </Modal>
  );
};

export default CustomModal;
