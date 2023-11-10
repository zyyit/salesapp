import React from 'react';
import * as SwiperTest from '../custom-files/SwiperTest';
import * as Utils from '../utils';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const Swiper2Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Utils.CustomCodeErrorBoundary>
        <SwiperTest.MyExampleComponent />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default withTheme(Swiper2Screen);
