import React from 'react';
import * as slidePicture from '../custom-files/slidePicture';
import * as Utils from '../utils';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { View, useWindowDimensions } from 'react-native';

const SlidePictureScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View>
        <Utils.CustomCodeErrorBoundary>
          <slidePicture.Carousel />
        </Utils.CustomCodeErrorBoundary>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SlidePictureScreen);
