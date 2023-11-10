import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SPIG020100Api from '../apis/SPIG020100Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import {
  Button,
  Circle,
  Icon,
  Pressable,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const SPIG020200Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(233, 231, 231)' },
        dimensions.width
      )}
    >
      <SPIG020100Api.FetchRecordTimeGET>
        {({ loading, error, data, refetchRecordTime }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <FlatList
              contentContainerStyle={StyleSheet.applyWidth(
                {
                  flex: 1,
                  paddingBottom: 24,
                  paddingLeft: 24,
                  paddingRight: 24,
                  paddingTop: 24,
                },
                dimensions.width
              )}
              data={fetchData}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              listKey={'OzJ6rRt8'}
              numColumns={1}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View>
                    <View
                      style={StyleSheet.applyWidth(
                        { flexDirection: 'row' },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            borderWidth: 0,
                            flex: 1,
                            flexDirection: 'row',
                            margin: 0,
                            marginLeft: 0,
                            minWidth: 50,
                            padding: 0,
                            width: 0,
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          numberOfLines={20}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Strong'],
                              fontFamily: 'System',
                              fontSize: 16,
                              fontWeight: '600',
                            },
                            dimensions.width
                          )}
                        >
                          {listData?.date}
                        </Text>
                      </View>
                      <>
                        {!listData?.id ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                marginLeft: -40,
                                marginTop: -13,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Circle 2 */}
                            <>
                              {!listData?.iconFlg ? null : (
                                <Circle
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.CircleStyles(theme)[
                                        'Circle'
                                      ],
                                      {
                                        backgroundColor: 'rgb(223, 215, 215)',
                                        borderColor: 'rgb(237, 235, 235)',
                                        borderWidth: 8,
                                        marginBottom: -10,
                                        marginTop: 15,
                                        paddingBottom: -30,
                                        zIndex: 1,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                />
                              )}
                            </>
                            <>
                              {listData?.iconFlg ? null : (
                                <Circle
                                  bgColor={theme.colors.primary}
                                  size={16}
                                  style={StyleSheet.applyWidth(
                                    {
                                      backgroundColor: 'rgb(255, 255, 255)',
                                      borderColor: 'rgba(250, 250, 250, 0.95)',
                                      borderStyle: 'solid',
                                      borderWidth: 20,
                                      height: 20,
                                      marginBottom: -9,
                                      width: 20,
                                      zIndex: 2,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Icon
                                    color={theme.colors['Light']}
                                    name={'AntDesign/sync'}
                                    size={28}
                                    style={StyleSheet.applyWidth(
                                      {
                                        backgroundColor:
                                          'rgba(255, 255, 255, 0.97)',
                                        zIndex: 3,
                                      },
                                      dimensions.width
                                    )}
                                  />
                                </Circle>
                              )}
                            </>
                            <>
                              {!listData?.stage ? null : (
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      backgroundColor: theme.colors['F7B116'],
                                      borderRadius: 4,
                                      flex: 1,
                                      height: 100,
                                      marginBottom: -10,
                                      width: 18,
                                    },
                                    dimensions.width
                                  )}
                                />
                              )}
                            </>
                            {/* View 2 */}
                            <>
                              {listData?.stage ? null : (
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      backgroundColor: 'rgb(132, 132, 132)',
                                      flex: 1,
                                      height: 100,
                                      marginBottom: -5,
                                      marginTop: -5,
                                      width: 15,
                                    },
                                    dimensions.width
                                  )}
                                />
                              )}
                            </>
                          </View>
                        )}
                      </>
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 4 },
                          dimensions.width
                        )}
                      >
                        {/* deepTitle */}
                        <>
                          {listData?.iconFlg ? null : (
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.strong,
                                  fontFamily: 'System',
                                  fontSize: 17,
                                  fontWeight: '600',
                                  lineHeight: 17,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.deepTitle}
                            </Text>
                          )}
                        </>
                        {/* shallowTitle */}
                        <>
                          {!listData?.iconFlg ? null : (
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: 'rgb(135, 132, 132)',
                                  fontFamily: 'System',
                                  fontSize: 14,
                                  fontWeight: '600',
                                  lineHeight: 16,
                                },
                                dimensions.width
                              )}
                            >
                              {listData?.shallowTitle}
                            </Text>
                          )}
                        </>
                        {/* Spacer 3 */}
                        <>
                          {!listData?.title ? null : (
                            <Spacer bottom={8} left={8} right={8} top={8} />
                          )}
                        </>
                        <>
                          {!listData?.btnflg ? null : (
                            <Button
                              onPress={() => {
                                try {
                                  showAlertUtil({
                                    title: '配置已獲得',
                                    message: undefined,
                                    buttonText: undefined,
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ButtonStyles(theme)['Button'],
                                  {
                                    backgroundColor: 'rgb(241, 237, 237)',
                                    borderColor: 'rgb(27, 53, 215)',
                                    borderWidth: 1,
                                    color: 'rgb(0,0,0)',
                                    fontSize: 15,
                                    height: 20,
                                    marginTop: 5,
                                    maxHeight: 20,
                                    padding: 0,
                                    width: 90,
                                  }
                                ),
                                dimensions.width
                              )}
                              title={'配置獲得'}
                            />
                          )}
                        </>
                        {/* Spacer 2 */}
                        <>
                          {!listData?.title ? null : (
                            <Spacer bottom={8} left={8} right={8} top={8} />
                          )}
                        </>
                        {/* notes1 */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: 'rgb(100, 97, 97)',
                              fontFamily: 'System',
                              fontSize: 14,
                              fontWeight: '600',
                              lineHeight: 16,
                              marginTop: 5,
                            },
                            dimensions.width
                          )}
                        >
                          {listData?.notes}
                        </Text>
                        {/* notes2 */}
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: 'rgb(100, 97, 97)',
                              fontFamily: 'System',
                              fontSize: 14,
                              fontWeight: '600',
                              lineHeight: 16,
                              marginTop: 5,
                            },
                            dimensions.width
                          )}
                        >
                          {listData?.notesTwo}
                        </Text>
                        {/* image */}
                        <>
                          {!listData?.imageFlg ? null : (
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  flex: 1,
                                  flexDirection: 'row',
                                  marginTop: -10,
                                },
                                dimensions.width
                              )}
                            >
                              <Pressable
                                onPress={() => {
                                  try {
                                    setGlobalVariableValue({
                                      key: 'imageFlg',
                                      value: Constants['IsTrue'],
                                    });
                                    setGlobalVariableValue({
                                      key: 'imageUrl',
                                      value: listData?.imageUrl,
                                    });
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                <Image
                                  resizeMode={'cover'}
                                  source={{ uri: `${listData?.imageUrl}` }}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ImageStyles(theme)['Image'],
                                      {
                                        borderRightWidth: 5,
                                        height: 50,
                                        right: 5,
                                        width: 70,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                />
                              </Pressable>
                              {/* Pressable 2 */}
                              <Pressable
                                onPress={() => {
                                  try {
                                    setGlobalVariableValue({
                                      key: 'imageFlg',
                                      value: Constants['IsTrue'],
                                    });
                                    setGlobalVariableValue({
                                      key: 'imageUrl',
                                      value: listData?.imageUrl2,
                                    });
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                {/* Image 2 */}
                                <Image
                                  resizeMode={'cover'}
                                  source={{ uri: `${listData?.imageUrl2}` }}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ImageStyles(theme)['Image'],
                                      { height: 50, width: 70 }
                                    ),
                                    dimensions.width
                                  )}
                                />
                              </Pressable>
                            </View>
                          )}
                        </>
                        <>
                          {!listData?.title ? null : (
                            <Spacer bottom={4} left={8} right={8} top={4} />
                          )}
                        </>
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.medium,
                              fontFamily: 'System',
                              fontWeight: '400',
                            },
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                        <Spacer bottom={12} left={8} right={8} top={12} />
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          );
        }}
      </SPIG020100Api.FetchRecordTimeGET>
      <Modal animationType={'none'} visible={Constants['imageFlg']}>
        <View>
          <Touchable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'imageFlg',
                  value: Constants['IsFalse'],
                });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Image
              resizeMode={'cover'}
              source={{ uri: `${Constants['imageUrl']}` }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 300,
                  marginTop: 250,
                  width: 430,
                }),
                dimensions.width
              )}
            />
          </Touchable>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(SPIG020200Screen);
