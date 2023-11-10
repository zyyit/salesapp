import React from 'react';
import { ScreenContainer, Swiper, SwiperItem } from '@draftbit/ui';
import { View, Image, useWindowDimensions } from 'react-native';

export const eventTest2 = () => {
  const dimensions = useWindowDimensions();
  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={{ width: dimensions.width, height: dimensions.height / 2 }}
    >
      <Swiper
        dotsTouchable={true}
        scrollable={false}
        style={{ width: dimensions.width, height: dimensions.height / 2 }}
      >
        <SwiperItem
          scrollable={false}
          style={{ width: dimensions.width, height: dimensions.height / 2 }}
        >
          <View
            style={{ width: dimensions.width, height: dimensions.height / 2 }}
          >
            <Image
              style={{
                width: dimensions.width - 20,
                height: dimensions.height / 2,
                marginLeft: 10,
                marginTop: 50,
              }}
              resizeMode={'cover'}
              source={{ uri: 'https://tgi1.jia.com/116/328/16328483.jpg' }}
            />
          </View>
        </SwiperItem>
        {/* Swiper Item 2 */}
        <SwiperItem
          scrollable={false}
          style={{ width: dimensions.width, height: dimensions.height / 2 }}
        >
          <View
            style={{ width: dimensions.width, height: dimensions.height / 2 }}
          >
            <Image
              style={{
                width: dimensions.width - 20,
                height: dimensions.height / 2,
                marginLeft: 10,
                marginTop: 50,
              }}
              resizeMode={'cover'}
              source={{
                uri: 'https://lmg.jj20.com/up/allimg/tp01/1Z9120152555I9-0-lp.jpg',
              }}
            />
          </View>
        </SwiperItem>
      </Swiper>
    </ScreenContainer>
  );
};
