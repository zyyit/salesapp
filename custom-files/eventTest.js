import React, { useState } from 'react';
import {
  View,
  Button,
  Swiper,
  SwiperItem,
  Image,
  ScreenContainer,
  useWindowDimensions,
} from 'react-native';

const dimensions = useWindowDimensions();

export const eventTest = () => {
  const [components, setComponents] = useState([]);
  const addComponentToSwiper = () => {
    const newComponent = (
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
    );
    setComponents([...components, newComponent]);
  };

  return (
    <View>
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
          {components.map(component => component)}
        </Swiper>
      </ScreenContainer>
      <Button title="Add Component" onPress={addComponentToSwiper} />
    </View>
  );
};
