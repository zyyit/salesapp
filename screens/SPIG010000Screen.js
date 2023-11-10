import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  MapCircle,
  MapMarker,
  MapMarkerCluster,
  MapMarkerClusterView,
  MapView,
} from '@draftbit/maps';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const SPIG010000Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { flexDirection: 'column' },
        dimensions.width
      )}
    >
      <MapView
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        autoClusterMarkersDistanceMeters={10000}
        customMapStyle={'Beautiful West Coast Villa'}
        latitude={35.6895}
        loadingEnabled={true}
        longitude={139.6917}
        mapType={'standard'}
        moveOnMarkerPress={true}
        provider={'google'}
        rotateEnabled={true}
        scrollEnabled={true}
        showsCompass={false}
        showsPointsOfInterest={true}
        style={StyleSheet.applyWidth(
          GlobalStyles.MapViewStyles(theme)['Map View'],
          dimensions.width
        )}
        zoom={8}
        zoomEnabled={true}
      >
        {/* BeijJIngCircle */}
        <MapCircle
          fillColor={theme.colors.primary}
          latitude={39.9042}
          longitude={116.4074}
          radius={30000}
          strokeColor={theme.colors.primary}
        />
        {/* ToKyoCircle */}
        <MapCircle
          fillColor={theme.colors.primary}
          latitude={35.6895}
          longitude={139.6917}
          radius={30000}
          strokeColor={theme.colors.primary}
        />
        {/* OsakaMarker */}
        <MapMarker
          androidUseDefaultIconImplementation={true}
          latitude={34.6937}
          longitude={135.5023}
          pinImage={Images.Snipaste1}
          pinImageSize={50}
          title={
            '日本大阪市中央区心斎橋筋1丁目8-3 道頓堀川沿い的 Glico 旗艦店（Dotonbori Glico Sign）'
          }
          tracksViewChanges={true}
        />
        <MapMarkerCluster />
        <MapMarkerClusterView
          renderItem={({ markerCount }) => {
            return null;
          }}
          tracksViewChanges={true}
          zoomOnPress={true}
        />
      </MapView>
    </ScreenContainer>
  );
};

export default withTheme(SPIG010000Screen);
