import React from 'react';
import * as swiper02001 from '../custom-files/swiper02001';
import * as Utils from '../utils';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { ScrollView, useWindowDimensions } from 'react-native';

const Swiper020000Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <Utils.CustomCodeErrorBoundary>
          <swiper02001.CustomCode />
        </Utils.CustomCodeErrorBoundary>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(Swiper020000Screen);
