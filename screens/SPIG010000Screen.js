import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SPIG010000Api from '../apis/SPIG010000Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
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
import { BottomSheet, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const SPIG010000Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const [BottomSheetFlg, setBottomSheetFlg] = React.useState(
    Constants['IsFalse']
  );
  const [BottomSheetVar, setBottomSheetVar] = React.useState([]);

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
        latitude={34.6937}
        loadingEnabled={true}
        longitude={135.5023}
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
          onPress={(latitude, longitude) => {
            try {
              setBottomSheetFlg(Constants['IsTrue']);
            } catch (err) {
              console.error(err);
            }
          }}
          pinImage={Images.Buin2}
          pinImageSize={50}
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
      <>
        {!BottomSheetFlg ? null : (
          <BottomSheet
            borderColor={theme.colors.divider}
            borderWidth={1}
            bottomSnapPosition={'80%'}
            bounces={true}
            enableOverScroll={true}
            friction={0.95}
            handleColor={theme.colors.divider}
            initialSnapPosition={'top'}
            middleSnapPosition={'60%'}
            onSettle={() => {
              try {
                setBottomSheetFlg(Constants['IsFalse']);
              } catch (err) {
                console.error(err);
              }
            }}
            showHandle={true}
            showsVerticalScrollIndicator={false}
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgb(228, 163, 127)', flex: 200 },
              dimensions.width
            )}
            topBorderRadius={20}
            topSnapPosition={'60%'}
          >
            <SPIG010000Api.FetchQueryPersonGET name={'张可'}>
              {({ loading, error, data, refetchQueryPerson }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <View
                    style={StyleSheet.applyWidth(
                      { flexDirection: 'row', marginLeft: 5, marginTop: -7 },
                      dimensions.width
                    )}
                  >
                    <View>
                      <Image
                        resizeMode={'cover'}
                        source={{ uri: `${fetchData?.headShot}` }}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          dimensions.width
                        )}
                      />
                    </View>
                    {/* View 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                          marginLeft: 25,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { color: 'rgb(255, 255, 255)', fontSize: 16 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'姓名：'}
                      </Text>
                      {/* Text 2 */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { color: 'rgb(252, 252, 252)', fontSize: 16 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'电话：'}
                      </Text>
                      {/* Text 3 */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { color: 'rgb(253, 252, 252)', fontSize: 16 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'职位：'}
                      </Text>
                      {/* Text 4 */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { color: 'rgb(253, 252, 252)', fontSize: 16 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'状态：'}
                      </Text>
                      {/* Text 5 */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { color: 'rgb(253, 252, 252)', fontSize: 16 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'公司：'}
                      </Text>
                    </View>
                    {/* View 2 */}
                    <View>
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { color: 'rgb(253, 252, 252)', fontSize: 16 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.name}
                      </Text>
                      {/* Text 2 */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { color: 'rgb(253, 252, 252)', fontSize: 16 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.tel}
                      </Text>
                      {/* Text 3 */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { color: 'rgb(253, 252, 252)', fontSize: 16 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.occupation}
                      </Text>
                      {/* Text 4 */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { color: 'rgb(253, 252, 252)', fontSize: 16 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.status}
                      </Text>
                      {/* Text 5 */}
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { color: 'rgb(253, 252, 252)', fontSize: 16 }
                          ),
                          dimensions.width
                        )}
                      >
                        {fetchData?.company}
                      </Text>
                    </View>
                  </View>
                );
              }}
            </SPIG010000Api.FetchQueryPersonGET>
          </BottomSheet>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(SPIG010000Screen);
