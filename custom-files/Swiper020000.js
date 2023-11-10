import React from 'react';
import { View, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export const CustomCode = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      <View style={styles.slide1}>
        <Image
          style={{
            height: 250,
            marginLeft: '1%',
            marginTop: 120,
            width: '90%',
          }}
          resizeMode={'cover'}
          source={{
            uri: 'https://img2.baidu.com/it/u=1231026579,590551703&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
          }}
        />
      </View>
      <View style={styles.slide2}>
        <Image
          style={{
            height: 250,
            marginLeft: '1%',
            marginTop: 120,
            width: '90%',
          }}
          resizeMode={'cover'}
          source={{ uri: 'https://tgi1.jia.com/116/328/16328483.jpg' }}
        />
      </View>
      <View style={styles.slide3}>
        <Image
          style={{
            height: 250,
            marginLeft: '1%',
            marginTop: 120,
            width: '90%',
          }}
          resizeMode={'cover'}
          source={{
            uri: 'https://lmg.jj20.com/up/allimg/tp01/1Z9120152555I9-0-lp.jpg',
          }}
        />
      </View>
    </Swiper>
  );
};

const styles = {
  wrapper: {
    backgroundColor: 'red',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
};
