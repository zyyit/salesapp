import React, { useState } from 'react';
import { View, Image, useWindowDimensions, Button } from 'react-native';
import Swiper from 'react-native-swiper';

export const CustomCode = () => {
  const dimensions = useWindowDimensions();

  const [components, setComponents] = useState([]);

  const addComponent = () => {
    const newComponent = (
      <View style={styles.slide1}>
        <Image
          style={{
            width: dimensions.width - 20,
            height: dimensions.height / 3,
            marginLeft: 5,
          }}
          resizeMode={'cover'}
          source={{
            uri: 'https://img2.baidu.com/it/u=1231026579,590551703&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
          }}
        />
      </View>
    );
    setComponents([...components, newComponent]);
  };

  return (
    <View style={{ width: dimensions.width, height: dimensions.height - 200 }}>
      <Button
        title="Add Component"
        onPress={addComponent}
        style={{ width: 200, height: 200 }}
      />
      <Swiper style={styles.wrapper} showsButtons={false}>
        {components.map(component => component)}
      </Swiper>
    </View>
  );
};

const styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
