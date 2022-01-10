/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {FONTS, COLORS, icons, images, dummyData} from '../constants';
import {Card} from '../components';
import {BlurView} from '@react-native-community/blur';
import store from '../redux/store';
import CustomModal from '../components/CustomModal';

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
                Enter track code
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

  const renderCardSection = () => {
    return (
      <View
        style={{
          marginHorizontal: 14,
          height: 100,
          //   backgroundColor: 'red',
          flexDirection: 'row',
          marginTop: 30,
        }}>
        <Card
          name={'Tracking'}
          onPress={function (val: string): void {
            throw new Error('Function not implemented.');
          }}
          status={'20 active'}
          icon={icons.box}
          cardBackgroundColor={COLORS.black}
          iconBackgroundColor={COLORS.lightGray2}
          type={'inHome'}
          nameTextColor={COLORS.lightGray3}
        />

        <View style={{width: 8}} />

        <Card
          name={'History'}
          onPress={function (val: string): void {
            throw new Error('Function not implemented.');
          }}
          status={'40 completed'}
          icon={icons.history}
          cardBackgroundColor={COLORS.lightOrange}
          iconBackgroundColor={COLORS.lightYellow}
          type={'inHome'}
          nameTextColor={COLORS.black}
        />
      </View>
    );
  };

  const renderRecentSection = () => {
    return (
      <View
        style={{flexDirection: 'column', marginHorizontal: 20, marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: COLORS.lightGray2, ...FONTS.h2}}>
            Recent Activity
          </Text>
        </View>
        <View style={{marginHorizontal: 6, marginTop: 16}}>
          <FlatList
            style={{height: '57%'}}
            data={dummyData.DATA}
            keyExtractor={item => `${item.id}`}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    height: 70,
                    width: '100%',
                    // backgroundColor: 'red',
                    marginBottom: 10,
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    borderColor: COLORS.lightGray2,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      //   backgroundColor: 'blue',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 60,
                        height: 60,
                        backgroundColor: COLORS.black,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                      }}>
                      <Image
                        source={icons.openBoxGray}
                        style={{width: 40, height: 40}}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      //   backgroundColor: 'green',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        flex: 2,
                        // backgroundColor: 'blue',
                        height: '100%',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        marginLeft: 10,
                      }}>
                      <Text style={{color: COLORS.lightGray4, ...FONTS.h2}}>
                        {item.name}
                      </Text>
                      <Text style={{color: COLORS.gray, ...FONTS.body4}}>
                        {item.status}
                      </Text>
                    </View>

                    <View
                      style={{
                        flex: 1,
                        // backgroundColor: 'red',
                        height: '100%',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: COLORS.gray,
                          ...FONTS.body4,
                          //   marginRight: 5,
                        }}>
                        {item.time}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  };
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black2}}>
      <StatusBar hidden />
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <View style={{flex: 1}}>
        {renderHearderSection()}
        {renderDetailSection()}
        {renderCardSection()}
        {renderRecentSection()}
        <CustomModal visible={true} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
