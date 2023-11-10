import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SPIG020000Api from '../apis/SPIG020000Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openCameraUtil from '../utils/openCamera';
import {
  Button,
  IconButton,
  Pressable,
  ScreenContainer,
  Surface,
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const SPIG020000Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-start',
            borderBottomWidth: 1,
            borderColor: theme.colors['Light'],
            flexDirection: 'row',
            height: 63,
            justifyContent: 'flex-start',
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        <Surface
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.SurfaceStyles(theme)['Surface'], {
              alignItems: 'center',
              alignSelf: 'flex-start',
              borderRadius: 5,
              borderWidth: 1,
              justifyContent: 'center',
              marginLeft: 20,
              marginTop: 5,
              minHeight: 15,
              width: 32,
            }),
            dimensions.width
          )}
        >
          <IconButton
            color={theme.colors['Medium']}
            icon={'AntDesign/logout'}
            onPress={() => {
              try {
                navigation.navigate('SPaMobile2', {
                  screen: 'SPIG020800Screen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            size={32}
          />
        </Surface>

        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontFamily: 'System',
              fontSize: 15,
              fontWeight: '700',
              marginLeft: 110,
              marginTop: 10,
            }),
            dimensions.width
          )}
        >
          {'営業権利決裁'}
        </Text>
      </View>
      {/* View 4 */}
      <View
        style={StyleSheet.applyWidth(
          { borderBottomWidth: 1, borderColor: theme.colors['Light'] },
          dimensions.width
        )}
      >
        <SPIG020000Api.FetchSelectHousePicGET>
          {({ loading, error, data, refetchSelectHousePic }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                data={fetchData}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                listKey={'lkEd1Wm5'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {!Constants['IsTrue'] ? null : (
                        <Swiper
                          dotActiveColor={theme.colors.primary}
                          dotColor={theme.colors.light}
                          dotsTouchable={true}
                          onIndexChanged={newIndex => {
                            try {
                              const picIndex = setGlobalVariableValue({
                                key: 'housePicIndex',
                                value: newIndex,
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SwiperStyles(theme)['Swiper'],
                              { height: 500 }
                            ),
                            dimensions.width
                          )}
                        >
                          <SwiperItem
                            style={StyleSheet.applyWidth(
                              { backgroundColor: 'rgb(249, 239, 239)' },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  height: 250,
                                  marginLeft: '5%',
                                  marginTop: 120,
                                  width: '90%',
                                },
                                dimensions.width
                              )}
                            >
                              <Image
                                resizeMode={'cover'}
                                source={{ uri: `${listData?.picture1}` }}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ImageStyles(theme)['Image'],
                                    { height: 250, width: '100%' }
                                  ),
                                  dimensions.width
                                )}
                              />
                            </View>
                          </SwiperItem>
                          {/* Swiper Item 3 */}
                          <SwiperItem
                            style={StyleSheet.applyWidth(
                              { backgroundColor: 'rgb(249, 239, 239)' },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  height: 250,
                                  marginLeft: '5%',
                                  marginTop: 120,
                                  width: '90%',
                                },
                                dimensions.width
                              )}
                            >
                              <Image
                                resizeMode={'cover'}
                                source={{ uri: `${listData?.picture2}` }}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ImageStyles(theme)['Image'],
                                    { height: 250, width: '100%' }
                                  ),
                                  dimensions.width
                                )}
                              />
                            </View>
                          </SwiperItem>
                          {/* Swiper Item 2 */}
                          <SwiperItem
                            style={StyleSheet.applyWidth(
                              { backgroundColor: 'rgb(249, 239, 239)' },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  height: 250,
                                  marginLeft: '5%',
                                  marginTop: 120,
                                  width: '90%',
                                },
                                dimensions.width
                              )}
                            >
                              <Image
                                resizeMode={'cover'}
                                source={{ uri: `${listData?.picture3}` }}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ImageStyles(theme)['Image'],
                                    { height: 250, width: '100%' }
                                  ),
                                  dimensions.width
                                )}
                              />
                            </View>
                          </SwiperItem>
                        </Swiper>
                      )}
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </SPIG020000Api.FetchSelectHousePicGET>
      </View>
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          {
            borderBottomWidth: 1,
            flexDirection: 'row',
            height: 65,
            justifyContent: 'space-evenly',
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { height: 45, marginTop: 10, width: 100 },
            dimensions.width
          )}
        >
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const indexPicture = (
                    await SPIG020000Api.delectPictureByIndexGET(Constants, {
                      picIndex: Constants['housePicIndex'],
                    })
                  )?.json;
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
                backgroundColor: 'rgb(252, 5, 5)',
                borderRadius: 30,
              }),
              dimensions.width
            )}
            title={'删   除'}
          />
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { height: 50, marginTop: 7 },
            dimensions.width
          )}
        >
          <Pressable
            onPress={() => {
              const handler = async () => {
                try {
                  await openCameraUtil({
                    mediaTypes: 'Images',
                    allowsEditing: false,
                    cameraType: 'back',
                    videoMaxDuration: undefined,
                    quality: 0.2,
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            <Image
              resizeMode={'cover'}
              source={Images._193485}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 50,
                  width: 50,
                }),
                dimensions.width
              )}
            />
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SPIG020000Screen);
