// This import is required if you are defining react components in this module.
import React, { useRef } from 'react';

// Add any other imports you need here. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section.
import { Text, StyleSheet, View, Pressable } from 'react-native';
import Swiper from 'react-native-swiper';
// Define and export your components as named exports here.

// You can use components exported from this file within a Custom Code component as
// <SwiperTest.MyExampleComponent />

export function MyExampleComponent() {
  const swiperRef = useRef(4);
  const scrollToSecondSlide = index => {
    //swiperRef.current.slideTo(4);
    return 4;
  };

  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <View style={styles.controView}>
          <Pressable onPress={scrollToSecondSlide(1)}>
            <View style={styles.myButton}>
              <Text style={styles.paginationText}>1</Text>
            </View>
          </Pressable>
          <View style={styles.indication}></View>
        </View>
        <View style={styles.controView}>
          <Pressable onPress={onPressFunction(1)}>
            <View style={styles.myButton}>
              <Text style={styles.paginationText}>2</Text>
            </View>
          </Pressable>
          <View style={styles.indication}></View>
        </View>
        <View style={styles.controView}>
          <Pressable onPress={onPressFunction(2)}>
            <View style={styles.myButton}>
              <Text style={styles.paginationText}>3</Text>
            </View>
          </Pressable>
          <View style={styles.indication}></View>
        </View>
        <View style={styles.controView}>
          <Pressable onPress={onPressFunction(3)}>
            <View style={styles.myButton}>
              <Text style={styles.paginationText}>4</Text>
            </View>
          </Pressable>
          <View style={styles.indication}></View>
        </View>
        <View style={styles.controView}>
          <Pressable onPress={onPressFunction(4)}>
            <View style={styles.myButton}>
              <Text style={styles.paginationText}>5</Text>
            </View>
          </Pressable>
          <View style={styles.indication}></View>
        </View>
        <View style={styles.controView}>
          <Pressable onPress={onPressFunction(5)}>
            <View style={styles.myButton}>
              <Text style={styles.paginationText}>6</Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.wrapperView}>
      <Swiper
        ref={swiperRef}
        scrollBy={4}
        style={styles.wrapper}
        loop={true}
        index={0}
        showsPagination={true}
        pagingEnabled={true}
        renderPagination={renderPagination}
      >
        <View testID="Hello" style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View testID="Beautiful" style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View testID="Simple" style={styles.slide3}>
          <Text style={styles.text}>And simple1</Text>
        </View>
        <View testID="Simple" style={styles.slide3}>
          <Text style={styles.text}>And simple2</Text>
        </View>
        <View testID="Simple" style={styles.slide3}>
          <Text style={styles.text}>And simple3</Text>
        </View>
        <View testID="Simple" style={styles.slide3}>
          <Text style={styles.text}>And simple4</Text>
        </View>
      </Swiper>
    </View>
  );
}

function renderPagination(index, total, context) {
  return (
    <View style={styles.paginationStyle}>
      <View style={styles.controView}>
        <Pressable>
          <View style={styles.myButton}>
            <Text style={styles.paginationText}>1</Text>
          </View>
        </Pressable>
        <View style={styles.indication}></View>
      </View>
      <View style={styles.controView}>
        <Pressable onPress={onPressFunction(1)}>
          <View style={styles.myButton}>
            <Text style={styles.paginationText}>2</Text>
          </View>
        </Pressable>
        <View style={styles.indication}></View>
      </View>
      <View style={styles.controView}>
        <Pressable onPress={onPressFunction(2)}>
          <View style={styles.myButton}>
            <Text style={styles.paginationText}>3</Text>
          </View>
        </Pressable>
        <View style={styles.indication}></View>
      </View>
      <View style={styles.controView}>
        <Pressable onPress={onPressFunction(3)}>
          <View style={styles.myButton}>
            <Text style={styles.paginationText}>4</Text>
          </View>
        </Pressable>
        <View style={styles.indication}></View>
      </View>
      <View style={styles.controView}>
        <Pressable onPress={onPressFunction(4)}>
          <View style={styles.myButton}>
            <Text style={styles.paginationText}>5</Text>
          </View>
        </Pressable>
        <View style={styles.indication}></View>
      </View>
      <View style={styles.controView}>
        <Pressable onPress={onPressFunction(5)}>
          <View style={styles.myButton}>
            <Text style={styles.paginationText}>6</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
function onPressFunction(index, indexFlg) {
  return '';
}

const styles = StyleSheet.create({
  wrapper: {},
  wrapperView: { width: 400, height: 300, marginTop: 150 },
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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paginationStyle: {
    position: 'absolute',
    marginTop: -40,
    width: 400,
    height: 30,
    flexDirection: 'row',
    marginLeft: 20,
  },
  container: {
    backgroundColor: '#fff',
  },
  myButton: {
    height: 16,
    width: 16, //The Width must be the same as the height
    borderRadius: 400, //Then Make the Border Radius twice the size of width or Height
    marginTop: -4,
    backgroundColor: 'rgb(195, 125, 198)',
    marginLeft: -6,
  },
  button1: {
    backgroundColor: 'rgb(195, 125, 198)',
  },
  indication: {
    width: 50,
    height: 10,
    backgroundColor: 'rgb(195, 125, 198)',
  },
  controView: {
    display: 'flex',
    flexDirection: 'row',
  },
  paginationText: {
    fontSize: 15,
    fontWeight: Blob,
    backgroundColor: 'while',
    zIndex: '10',
  },
});
