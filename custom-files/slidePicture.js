import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  PanResponder,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const Carousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const addImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('请允许访问相册以选择图片');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled && result.uri) {
      const newImages = [...images, result.uri];
      setImages(newImages);
      setCurrentIndex(newImages.length - 1);
    }
  };

  const deleteImage = () => {
    const updatedImages = images.filter((_, index) => index !== currentIndex);
    setImages(updatedImages);
    if (currentIndex >= updatedImages.length) {
      setCurrentIndex(updatedImages.length - 1);
    }
  };

  const handleStartGesture = evt => {
    setStartX(evt.nativeEvent.locationX);
  };

  const handleEndGesture = evt => {
    const endX = evt.nativeEvent.locationX;
    const dx = endX - startX;

    if (dx > 50) {
      prevSlide();
    } else if (dx < -50) {
      nextSlide();
    }
  };

  return (
    <View style={styles.carousel}>
      {images.length > 0 ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: images[currentIndex] }}
            style={styles.image}
            onTouchStart={handleStartGesture}
            onTouchEnd={handleEndGesture}
          />
        </View>
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>写真を選択してください</Text>
        </View>
      )}
      <View style={styles.imageNumber}>
        <Text style={styles.imageNumberText}>
          {images.length > 0
            ? `${currentIndex + 1} / ${images.length}`
            : '0 / 0'}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.actionButtons}>
          <TouchableOpacity onPress={addImage}>
            <Image
              source={{ uri: 'https://zynanci.top:441/193485.jpg' }}
              style={styles.addImageButton}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: '#FF0000', marginTop: 15 },
            ]}
            onPress={deleteImage}
            disabled={images.length === 0}
          >
            <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>
              写真を削除する
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginLeft: '5%',
  },
  imageContainer: {
    width: '100%',
    height: '55%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholder: {
    width: '100%',
    height: '55%',
    marginBottom: 20,
    backgroundColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    width: '100%',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  placeholderText: {
    fontSize: 16,
    textAlign: 'center',
  },
  imageNumber: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageNumberText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
  },
  addImageButton: {
    width: 100,
    height: 60,
    borderRadius: 10,
    marginLeft: 24,
    marginTop: 5,
  },
});

export default Carousel;
