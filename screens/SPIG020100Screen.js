import React from 'react';
import * as StepIndicator from '../custom-files/StepIndicator';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { ScrollView, View, useWindowDimensions } from 'react-native';

const SPIG020100Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        {
          alignContent: 'flex-end',
          alignItems: 'flex-end',
          alignSelf: 'flex-end',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          justifyContent: 'space-evenly',
        },
        dimensions.width
      )}
    >
      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { height: 1000, width: 390 },
          dimensions.width
        )}
        contentContainerStyle={StyleSheet.applyWidth(
          {
            alignContent: 'space-around',
            alignItems: 'flex-start',
            alignSelf: 'flex-start',
            justifyContent: 'space-evenly',
            marginTop: 20,
            paddingLeft: 10,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { height: 750, paddingLeft: 54 },
            dimensions.width
          )}
        >
          <Utils.CustomCodeErrorBoundary>
            <StepIndicator.PositionedTimeline />
          </Utils.CustomCodeErrorBoundary>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SPIG020100Screen);
