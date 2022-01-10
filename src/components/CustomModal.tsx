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
              alignSelf: 'center',
              marginTop: '75%',
              width: '85%',
              height: '30%',
              // backgroundColor: 'rgba(0,0,0,0.5)',
              backgroundColor: COLORS.black2,
            }}>
            <Text>hihi</Text>
          </View>
        </TouchableOpacity>
      </BlurView>
    </Modal>
  );
};

export default CustomModal;
