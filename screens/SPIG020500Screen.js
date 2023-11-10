import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SPIG020500Api from '../apis/SPIG020500Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import {
  Icon,
  Picker,
  Pressable,
  SVG,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const SPIG020500Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const [cityID, setCityID] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [mit, setMit] = React.useState('');
  const [multiSelectPicker2Value, setMultiSelectPicker2Value] = React.useState(
    []
  );
  const [multiSelectPickerValue, setMultiSelectPickerValue] = React.useState(
    []
  );
  const [multiSelectPickerValue2, setMultiSelectPickerValue2] = React.useState(
    []
  );
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [pickerValue3, setPickerValue3] = React.useState('');
  const [prefecture, setPrefecture] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={false}
      scrollable={true}
    >
      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {/* View 2 */}
        <View>
          {/* TopHeader */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Light'],
                flexDirection: 'column',
                height: 50,
                justifyContent: 'center',
                marginLeft: -16,
                marginRight: -16,
                paddingBottom: 5,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  alignSelf: 'center',
                }),
                dimensions.width
              )}
            >
              {'長久手支店'}
            </Text>
          </View>
          {/* personnel 1 */}
          <View>
            {/* Header */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  flexDirection: 'row',
                  height: 125,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            >
              {/* View 3 */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', height: 75 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'center',
                      height: 65,
                      width: 65,
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
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: 'https://zynanci.top:441/buin_2.png' }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          { borderRadius: 55, height: 65, width: 65 }
                        ),
                        dimensions.width
                      )}
                    />
                  </Pressable>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    { height: 70 },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'flex-start',
                          color: theme.colors['Medium'],
                          marginLeft: 10,
                          marginTop: 9,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'斎藤チーム・営業課長 新卒'}
                  </Text>
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'baseline',
                          fontFamily: 'System',
                          fontSize: 20,
                          fontWeight: '700',
                          marginLeft: 10,
                          marginTop: 7,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'斎藤    龍之介'}
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 25,
                    left: '92%',
                    marginTop: 45,
                    position: 'absolute',
                    width: 25,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    console.log('Pressable ON_PRESS Start');
                    let error = null;
                    try {
                      console.log('Start ON_PRESS:0 SET_VARIABLE');
                      setGlobalVariableValue({
                        key: 'IsFalse',
                        value: Constants['IsTrue'],
                      });
                      console.log('Complete ON_PRESS:0 SET_VARIABLE');
                      console.log('Start ON_PRESS:1 SET_VARIABLE');
                      const Isfalse = setGlobalVariableValue({
                        key: 'IsTrue',
                        value: Constants['IsFalse'],
                      });
                      console.log('Complete ON_PRESS:1 SET_VARIABLE', {
                        Isfalse,
                      });
                    } catch (err) {
                      console.error(err);
                      error = err.message ?? err;
                    }
                    console.log(
                      'Pressable ON_PRESS Complete',
                      error ? { error } : 'no error'
                    );
                  }}
                >
                  <>
                    {Constants['IsTrue'] ? null : (
                      <Icon name={'Ionicons/chevron-up-sharp'} size={24} />
                    )}
                  </>
                  {/* Icon 2 */}
                  <>
                    {!Constants['IsTrue'] ? null : (
                      <Icon name={'Ionicons/chevron-down-sharp'} size={24} />
                    )}
                  </>
                </Pressable>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 50,
                    left: '63%',
                    marginLeft: 1,
                    marginTop: 60,
                    position: 'absolute',
                    width: 100,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      alignSelf: 'flex-start',
                      color: 'rgb(250, 4, 4)',
                      marginLeft: 2,
                    }),
                    dimensions.width
                  )}
                >
                  {'未受注SS'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignSelf: 'center',
                      backgroundColor: 'rgb(252, 3, 3)',
                      flexDirection: 'column',
                      height: 26,
                      justifyContent: 'space-between',
                      width: 100,
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
                        {
                          alignSelf: 'center',
                          color: theme.colors['Surface'],
                          fontFamily: 'System',
                          fontSize: 13,
                          fontWeight: '700',
                          marginTop: 3,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'未受注18ヵ月'}
                  </Text>
                </View>
              </View>
            </View>
            {/* View 2 */}
            <>
              {Constants['IsTrue'] ? null : (
                <View>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignContent: 'space-around',
                        alignSelf: 'stretch',
                        borderColor: theme.colors['Light'],
                        flexDirection: 'row',
                        height: 80,
                        justifyContent: 'space-evenly',
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          marginLeft: 45,
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            showAlertUtil({
                              title: '信息',
                              message: '这是一个文本信息',
                              buttonText: undefined,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG1 */}
                        <SVG
                          source={'https://zynanci.top:441/note.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 12,
                                marginTop: 12,
                                width: 28,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('SPaMobile', {
                              screen: 'SPIG010000Screen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 2 */}
                        <SVG
                          source={'https://zynanci.top:441/house.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 12,
                                marginTop: 12,
                                width: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            Linking.openURL('tel:1234567890');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 3 */}
                        <SVG
                          source={'https://zynanci.top:441/phone_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 11,
                                marginTop: 12,
                                width: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 4 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          marginRight: 30,
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('SPaMobile2', {
                              screen: 'SPIG020800Screen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 4 */}
                        <SVG
                          source={'https://zynanci.top:441/msg_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 9,
                                marginTop: 12,
                                width: 33,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                  </View>
                  {/* Items */}
                  <View
                    style={StyleSheet.applyWidth(
                      { paddingLeft: 16, paddingRight: 16 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          borderTopWidth: 1,
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'入社後実績'}
                      </Text>
                    </View>

                    <View>
                      <SPIG020500Api.FetchSelectNyushajisekiGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchSelectNyushajiseki,
                        }) => {
                          const fetchData = data?.json;
                          if (loading) {
                            return <ActivityIndicator />;
                          }

                          if (
                            error ||
                            data?.status < 200 ||
                            data?.status >= 300
                          ) {
                            return <ActivityIndicator />;
                          }

                          return (
                            <FlatList
                              data={fetchData}
                              keyExtractor={listData =>
                                listData?.id ||
                                listData?.uuid ||
                                JSON.stringify(listData)
                              }
                              listKey={'P1AniJVp'}
                              numColumns={1}
                              onEndReachedThreshold={0.5}
                              renderItem={({ item }) => {
                                const listData = item;
                                return (
                                  <>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'社歴'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors['Strong'],
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.kirekega}
                                      </Text>
                                    </View>
                                    {/* View 2 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 8,
                                          paddingTop: 5,
                                          position: 'relative',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'入社後 受注件数'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                            marginLeft: -17,
                                            marginRight: '-53%',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.number}
                                      </Text>

                                      <View
                                        style={StyleSheet.applyWidth(
                                          { height: 25, width: 25 },
                                          dimensions.width
                                        )}
                                      >
                                        <Pressable
                                          onPress={() => {
                                            try {
                                              navigation.navigate(
                                                'SPaMobile2',
                                                { screen: 'SPIG020800Screen' }
                                              );
                                            } catch (err) {
                                              console.error(err);
                                            }
                                          }}
                                          style={StyleSheet.applyWidth(
                                            { height: 25, width: 25 },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            name={
                                              'Ionicons/chevron-forward-sharp'
                                            }
                                            size={24}
                                          />
                                        </Pressable>
                                      </View>
                                    </View>
                                    {/* View 3 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'入社後 受注金額'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.betamount}
                                      </Text>
                                    </View>
                                    {/* View 4 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'キャンセル'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.cancel}
                                      </Text>
                                    </View>
                                  </>
                                );
                              }}
                              showsHorizontalScrollIndicator={true}
                              showsVerticalScrollIndicator={true}
                            />
                          );
                        }}
                      </SPIG020500Api.FetchSelectNyushajisekiGET>
                    </View>
                    {/* View 5 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'今期実績'}
                      </Text>
                    </View>

                    <SPIG020500Api.FetchSelectProductGET
                      handlers={{
                        onData: fetchData => {
                          const handler = async () => {
                            try {
                              const produce = (
                                await SPIG020500Api.selectProductGET(Constants)
                              )?.json;
                            } catch (err) {
                              console.error(err);
                            }
                          };
                          handler();
                        },
                      }}
                    >
                      {({ loading, error, data, refetchSelectProduct }) => {
                        const fetchData = data?.json;
                        if (loading) {
                          return <ActivityIndicator />;
                        }

                        if (
                          error ||
                          data?.status < 200 ||
                          data?.status >= 300
                        ) {
                          return <ActivityIndicator />;
                        }

                        return (
                          <FlatList
                            data={fetchData}
                            keyExtractor={listData =>
                              listData?.id ||
                              listData?.uuid ||
                              JSON.stringify(listData)
                            }
                            listKey={'TO5Shwxz'}
                            numColumns={1}
                            onEndReachedThreshold={0.5}
                            renderItem={({ item }) => {
                              const listData = item;
                              return (
                                <>
                                  {/* View 12 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderBottomWidth: 1,
                                        borderColor: theme.colors['Light'],
                                        flexDirection: 'row',
                                        height: 40,
                                        justifyContent: 'space-between',
                                        marginBottom: 10,
                                        marginLeft: -16,
                                        marginRight: -16,
                                        marginTop: -10,
                                        paddingBottom: 5,
                                        paddingLeft: 16,
                                        paddingRight: 44,
                                        paddingTop: 5,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          color: theme.colors.medium,
                                          fontSize: 15,
                                          textTransform: 'capitalize',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.proName}
                                    </Text>

                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          fontFamily: 'System',
                                          fontSize: 15,
                                          fontWeight: '400',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.proNum}
                                      {' 円'}
                                    </Text>
                                  </View>
                                </>
                              );
                            }}
                            showsHorizontalScrollIndicator={true}
                            showsVerticalScrollIndicator={true}
                          />
                        );
                      }}
                    </SPIG020500Api.FetchSelectProductGET>
                    {/* View 8 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          borderTopWidth: 1,
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -11,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            flex: 1,
                            justifyContent: 'center',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Strong'],
                              fontSize: 15,
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {'経過日数'}
                        </Text>
                      </View>
                    </View>
                    {/* View 9 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置獲得'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'65 日経過'}
                      </Text>
                    </View>
                    {/* View 10 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置提出'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'90 日経過'}
                      </Text>
                    </View>
                    {/* View 14 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置提出'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'90 日経過'}
                      </Text>
                    </View>
                    {/* View 11 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'収支説明'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'150 日経過'}
                      </Text>
                    </View>
                    {/* View 12 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          justifyContent: 'center',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Fetch 2 */}
                      <SPIG020500Api.FetchSelectPrefecturesGET
                        handlers={{
                          onData: fetch2Data => {
                            const handler = async () => {
                              try {
                                const prefectureList = (
                                  await SPIG020500Api.selectPrefecturesGET(
                                    Constants
                                  )
                                )?.json;
                                setGlobalVariableValue({
                                  key: 'prefectures',
                                  value: prefectureList,
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            };
                            handler();
                          },
                        }}
                      >
                        {({
                          loading,
                          error,
                          data,
                          refetchSelectPrefectures,
                        }) => {
                          const fetch2Data = data?.json;
                          if (loading) {
                            return <ActivityIndicator />;
                          }

                          if (
                            error ||
                            data?.status < 200 ||
                            data?.status >= 300
                          ) {
                            return <ActivityIndicator />;
                          }

                          return (
                            <Picker
                              autoDismissKeyboard={true}
                              dropDownBackgroundColor={theme.colors.background}
                              dropDownBorderColor={theme.colors.divider}
                              dropDownBorderRadius={8}
                              dropDownBorderWidth={1}
                              dropDownTextColor={theme.colors.strong}
                              iconSize={24}
                              leftIconMode={'inset'}
                              mode={'native'}
                              onValueChange={newPickerValue => {
                                const handler = async () => {
                                  try {
                                    setPrefecture(newPickerValue);
                                    const cititys = (
                                      await SPIG020500Api.selectCitisGET(
                                        Constants,
                                        { prefectureId: newPickerValue }
                                      )
                                    )?.json;
                                    setGlobalVariableValue({
                                      key: 'citys',
                                      value: cititys,
                                    });
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                              options={Constants['prefectures']}
                              placeholder={'都道府県'}
                              selectedIconColor={theme.colors.strong}
                              selectedIconSize={20}
                              style={StyleSheet.applyWidth(
                                {
                                  marginLeft: 30,
                                  paddingBottom: 0,
                                  paddingTop: 0,
                                  width: 180,
                                },
                                dimensions.width
                              )}
                              type={'solid'}
                              value={prefecture}
                            />
                          );
                        }}
                      </SPIG020500Api.FetchSelectPrefecturesGET>
                      <Picker
                        autoDismissKeyboard={true}
                        dropDownBackgroundColor={theme.colors.background}
                        dropDownBorderColor={theme.colors.divider}
                        dropDownBorderRadius={8}
                        dropDownBorderWidth={1}
                        dropDownTextColor={theme.colors.strong}
                        iconSize={24}
                        leftIconMode={'inset'}
                        mode={'native'}
                        onValueChange={newPickerValue => {
                          try {
                            setCityID(newPickerValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        options={Constants['citys']}
                        placeholder={'市区町村'}
                        selectedIconColor={theme.colors.strong}
                        selectedIconName={'Feather/check'}
                        selectedIconSize={20}
                        style={StyleSheet.applyWidth(
                          {
                            height: 20,
                            marginLeft: 10,
                            paddingBottom: 0,
                            paddingTop: 0,
                            width: 180,
                          },
                          dimensions.width
                        )}
                        type={'solid'}
                        value={cityID}
                      />
                    </View>
                  </View>
                </View>
              )}
            </>
            <Modal
              animationType={'none'}
              presentationStyle={'pageSheet'}
              transparent={false}
              visible={Constants['imageFlg']}
            >
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
                    source={{ uri: 'https://zynanci.top:441/buin_2.png' }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        {
                          height: 300,
                          marginLeft: -10,
                          marginTop: 250,
                          width: 400,
                        }
                      ),
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
            </Modal>
          </View>
          {/* personnel 2 */}
          <View>
            {/* Header */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  flexDirection: 'row',
                  height: 92,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            >
              {/* View 3 */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', height: 75 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'center',
                      height: 65,
                      width: 65,
                    },
                    dimensions.width
                  )}
                >
                  <Pressable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'imageFlg2',
                          value: Constants['IsTrue'],
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: 'https://zynanci.top:441/buin_3.png' }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          { borderRadius: 55, height: 65, width: 65 }
                        ),
                        dimensions.width
                      )}
                    />
                  </Pressable>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    { height: 70 },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'flex-start',
                          color: theme.colors['Medium'],
                          marginLeft: 10,
                          marginTop: 9,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'山田チーム・営業課長'}
                  </Text>
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'baseline',
                          fontFamily: 'System',
                          fontSize: 20,
                          fontWeight: '700',
                          marginLeft: 10,
                          marginTop: 7,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'山田    次郎'}
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 25,
                    left: '92%',
                    marginTop: 28,
                    position: 'absolute',
                    width: 25,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    console.log('Pressable ON_PRESS Start');
                    let error = null;
                    try {
                      console.log('Start ON_PRESS:0 SET_VARIABLE');
                      setGlobalVariableValue({
                        key: 'False2',
                        value: Constants['True2'],
                      });
                      console.log('Complete ON_PRESS:0 SET_VARIABLE');
                      console.log('Start ON_PRESS:1 SET_VARIABLE');
                      const Isfalse = setGlobalVariableValue({
                        key: 'True2',
                        value: Constants['False2'],
                      });
                      console.log('Complete ON_PRESS:1 SET_VARIABLE', {
                        Isfalse,
                      });
                    } catch (err) {
                      console.error(err);
                      error = err.message ?? err;
                    }
                    console.log(
                      'Pressable ON_PRESS Complete',
                      error ? { error } : 'no error'
                    );
                  }}
                >
                  <>
                    {Constants['True2'] ? null : (
                      <Icon name={'Ionicons/chevron-up-sharp'} size={24} />
                    )}
                  </>
                  {/* Icon 2 */}
                  <>
                    {!Constants['True2'] ? null : (
                      <Icon name={'Ionicons/chevron-down-sharp'} size={24} />
                    )}
                  </>
                </Pressable>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 26,
                    left: '63%',
                    marginLeft: 1,
                    marginTop: 28,
                    position: 'absolute',
                    width: 100,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignSelf: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Light'],
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'column',
                      height: 26,
                      justifyContent: 'space-between',
                      width: 100,
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
                        {
                          alignSelf: 'center',
                          color: theme.colors['Light'],
                          fontFamily: 'System',
                          fontSize: 13,
                          fontWeight: '700',
                          marginTop: 2,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'未受注10ヵ月'}
                  </Text>
                </View>
              </View>
            </View>
            {/* View 2 */}
            <>
              {Constants['True2'] ? null : (
                <View>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignContent: 'space-around',
                        alignSelf: 'stretch',
                        borderColor: theme.colors['Light'],
                        flexDirection: 'row',
                        height: 80,
                        justifyContent: 'space-evenly',
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          marginLeft: 45,
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            showAlertUtil({
                              title: '信息',
                              message: '这是一个文本信息',
                              buttonText: undefined,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        <SVG
                          source={'https://zynanci.top:441/note.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 12,
                                marginTop: 12,
                                width: 28,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('SPaMobile', {
                              screen: 'SPIG010000Screen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 2 */}
                        <SVG
                          source={'https://zynanci.top:441/map_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 12,
                                marginTop: 12,
                                width: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            Linking.openURL('tel:1234567890');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 3 */}
                        <SVG
                          source={'https://zynanci.top:441/phone_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 11,
                                marginTop: 12,
                                width: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 4 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          marginRight: 30,
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('SPaMobile2', {
                              screen: 'SPIG020800Screen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 4 */}
                        <SVG
                          source={'https://zynanci.top:441/msg_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 9,
                                marginTop: 12,
                                width: 33,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                  </View>
                  {/* Items */}
                  <View
                    style={StyleSheet.applyWidth(
                      { paddingLeft: 16, paddingRight: 16 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          borderTopWidth: 1,
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'入社後実績'}
                      </Text>
                    </View>

                    <View>
                      <SPIG020500Api.FetchSelectNyushajisekiGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchSelectNyushajiseki,
                        }) => {
                          const fetchData = data?.json;
                          if (loading) {
                            return <ActivityIndicator />;
                          }

                          if (
                            error ||
                            data?.status < 200 ||
                            data?.status >= 300
                          ) {
                            return <ActivityIndicator />;
                          }

                          return (
                            <FlatList
                              data={fetchData}
                              keyExtractor={listData =>
                                listData?.id ||
                                listData?.uuid ||
                                JSON.stringify(listData)
                              }
                              listKey={'aP5a5BbZ'}
                              numColumns={1}
                              onEndReachedThreshold={0.5}
                              renderItem={({ item }) => {
                                const listData = item;
                                return (
                                  <>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'社歴'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.kirekega}
                                      </Text>
                                    </View>
                                    {/* View 2 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 8,
                                          paddingTop: 5,
                                          position: 'relative',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'入社後 受注件数'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                            marginLeft: -17,
                                            marginRight: '-53%',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.number}
                                      </Text>

                                      <View
                                        style={StyleSheet.applyWidth(
                                          { height: 25, width: 25 },
                                          dimensions.width
                                        )}
                                      >
                                        <Pressable
                                          onPress={() => {
                                            try {
                                              navigation.navigate(
                                                'SPaMobile2',
                                                { screen: 'SPIG020800Screen' }
                                              );
                                            } catch (err) {
                                              console.error(err);
                                            }
                                          }}
                                          style={StyleSheet.applyWidth(
                                            { height: 25, width: 25 },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            name={
                                              'Ionicons/chevron-forward-sharp'
                                            }
                                            size={24}
                                          />
                                        </Pressable>
                                      </View>
                                    </View>
                                    {/* View 3 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'入社後 受注金額'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.betamount}
                                      </Text>
                                    </View>
                                    {/* View 4 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'キャンセル'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.cancel}
                                      </Text>
                                    </View>
                                  </>
                                );
                              }}
                              showsHorizontalScrollIndicator={true}
                              showsVerticalScrollIndicator={true}
                            />
                          );
                        }}
                      </SPIG020500Api.FetchSelectNyushajisekiGET>
                    </View>
                    {/* View 5 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'今期実績'}
                      </Text>
                    </View>

                    <SPIG020500Api.FetchSelectProductGET
                      handlers={{
                        onData: fetchData => {
                          const handler = async () => {
                            try {
                              const produce = (
                                await SPIG020500Api.selectProductGET(Constants)
                              )?.json;
                            } catch (err) {
                              console.error(err);
                            }
                          };
                          handler();
                        },
                      }}
                    >
                      {({ loading, error, data, refetchSelectProduct }) => {
                        const fetchData = data?.json;
                        if (loading) {
                          return <ActivityIndicator />;
                        }

                        if (
                          error ||
                          data?.status < 200 ||
                          data?.status >= 300
                        ) {
                          return <ActivityIndicator />;
                        }

                        return (
                          <FlatList
                            data={fetchData}
                            keyExtractor={listData =>
                              listData?.id ||
                              listData?.uuid ||
                              JSON.stringify(listData)
                            }
                            listKey={'8LWz5rVi'}
                            numColumns={1}
                            onEndReachedThreshold={0.5}
                            renderItem={({ item }) => {
                              const listData = item;
                              return (
                                <>
                                  {/* View 12 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderBottomWidth: 1,
                                        borderColor: theme.colors['Light'],
                                        flexDirection: 'row',
                                        height: 40,
                                        justifyContent: 'space-between',
                                        marginBottom: 10,
                                        marginLeft: -16,
                                        marginRight: -16,
                                        marginTop: -10,
                                        paddingBottom: 5,
                                        paddingLeft: 16,
                                        paddingRight: 44,
                                        paddingTop: 5,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          color: theme.colors.medium,
                                          fontSize: 15,
                                          textTransform: 'capitalize',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.proName}
                                    </Text>

                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          fontFamily: 'System',
                                          fontSize: 15,
                                          fontWeight: '400',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.proNum}
                                      {' 円'}
                                    </Text>
                                  </View>
                                </>
                              );
                            }}
                            showsHorizontalScrollIndicator={true}
                            showsVerticalScrollIndicator={true}
                          />
                        );
                      }}
                    </SPIG020500Api.FetchSelectProductGET>
                    {/* View 8 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          borderTopWidth: 1,
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -11,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            flex: 1,
                            justifyContent: 'center',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Strong'],
                              fontSize: 15,
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {'経過日数'}
                        </Text>
                      </View>
                    </View>
                    {/* View 9 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置獲得'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'65 日経過'}
                      </Text>
                    </View>
                    {/* View 10 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置提出'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'90 日経過'}
                      </Text>
                    </View>
                    {/* View 14 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置提出'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'90 日経過'}
                      </Text>
                    </View>
                    {/* View 11 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'収支説明'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'150 日経過'}
                      </Text>
                    </View>
                    {/* View 12 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          justifyContent: 'center',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Fetch 2 */}
                      <SPIG020500Api.FetchSelectPrefecturesGET
                        handlers={{
                          onData: fetch2Data => {
                            const handler = async () => {
                              try {
                                const prefectureList = (
                                  await SPIG020500Api.selectPrefecturesGET(
                                    Constants
                                  )
                                )?.json;
                                setGlobalVariableValue({
                                  key: 'prefectures',
                                  value: prefectureList,
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            };
                            handler();
                          },
                        }}
                      >
                        {({
                          loading,
                          error,
                          data,
                          refetchSelectPrefectures,
                        }) => {
                          const fetch2Data = data?.json;
                          if (loading) {
                            return <ActivityIndicator />;
                          }

                          if (
                            error ||
                            data?.status < 200 ||
                            data?.status >= 300
                          ) {
                            return <ActivityIndicator />;
                          }

                          return (
                            <Picker
                              autoDismissKeyboard={true}
                              dropDownBackgroundColor={theme.colors.background}
                              dropDownBorderColor={theme.colors.divider}
                              dropDownBorderRadius={8}
                              dropDownBorderWidth={1}
                              dropDownTextColor={theme.colors.strong}
                              iconSize={24}
                              leftIconMode={'inset'}
                              mode={'native'}
                              onValueChange={newPickerValue => {
                                const handler = async () => {
                                  try {
                                    setPrefecture(newPickerValue);
                                    const cititys = (
                                      await SPIG020500Api.selectCitisGET(
                                        Constants,
                                        { prefectureId: newPickerValue }
                                      )
                                    )?.json;
                                    setGlobalVariableValue({
                                      key: 'citys',
                                      value: cititys,
                                    });
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                              options={Constants['prefectures']}
                              placeholder={'都道府県'}
                              selectedIconColor={theme.colors.strong}
                              selectedIconSize={20}
                              style={StyleSheet.applyWidth(
                                {
                                  marginLeft: 30,
                                  paddingBottom: 0,
                                  paddingTop: 0,
                                  width: 180,
                                },
                                dimensions.width
                              )}
                              type={'solid'}
                              value={prefecture}
                            />
                          );
                        }}
                      </SPIG020500Api.FetchSelectPrefecturesGET>
                      <Picker
                        autoDismissKeyboard={true}
                        dropDownBackgroundColor={theme.colors.background}
                        dropDownBorderColor={theme.colors.divider}
                        dropDownBorderRadius={8}
                        dropDownBorderWidth={1}
                        dropDownTextColor={theme.colors.strong}
                        iconSize={24}
                        leftIconMode={'inset'}
                        mode={'native'}
                        onValueChange={newPickerValue => {
                          try {
                            setCityID(newPickerValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        options={Constants['citys']}
                        placeholder={'市区町村'}
                        selectedIconColor={theme.colors.strong}
                        selectedIconName={'Feather/check'}
                        selectedIconSize={20}
                        style={StyleSheet.applyWidth(
                          {
                            height: 20,
                            marginLeft: 10,
                            paddingBottom: 0,
                            paddingTop: 0,
                            width: 180,
                          },
                          dimensions.width
                        )}
                        type={'solid'}
                        value={cityID}
                      />
                    </View>
                  </View>
                </View>
              )}
            </>
            <Modal
              animationType={'none'}
              presentationStyle={'pageSheet'}
              transparent={false}
              visible={Constants['imageFlg2']}
            >
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'imageFlg2',
                        value: Constants['IsFalse'],
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Image
                    resizeMode={'cover'}
                    source={{ uri: 'https://zynanci.top:441/buin_3.png' }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        {
                          height: 300,
                          marginLeft: -10,
                          marginTop: 250,
                          width: 400,
                        }
                      ),
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
            </Modal>
          </View>
          {/* personnel 3 */}
          <View>
            {/* Header */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  flexDirection: 'row',
                  height: 92,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            >
              {/* View 3 */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', height: 75 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'center',
                      height: 65,
                      width: 65,
                    },
                    dimensions.width
                  )}
                >
                  <Pressable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'imageFlg3',
                          value: Constants['IsTrue'],
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: 'https://zynanci.top:441/buin_1.png' }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          { borderRadius: 55, height: 65, width: 65 }
                        ),
                        dimensions.width
                      )}
                    />
                  </Pressable>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    { height: 70 },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'flex-start',
                          color: theme.colors['Medium'],
                          marginLeft: 10,
                          marginTop: 9,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'山田チーム・主任'}
                  </Text>
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'baseline',
                          fontFamily: 'System',
                          fontSize: 20,
                          fontWeight: '700',
                          marginLeft: 10,
                          marginTop: 7,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'田崎    京子'}
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 25,
                    left: '92%',
                    marginTop: 28,
                    position: 'absolute',
                    width: 25,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    console.log('Pressable ON_PRESS Start');
                    let error = null;
                    try {
                      console.log('Start ON_PRESS:0 SET_VARIABLE');
                      setGlobalVariableValue({
                        key: 'False3',
                        value: Constants['True3'],
                      });
                      console.log('Complete ON_PRESS:0 SET_VARIABLE');
                      console.log('Start ON_PRESS:1 SET_VARIABLE');
                      const Isfalse = setGlobalVariableValue({
                        key: 'True3',
                        value: Constants['False3'],
                      });
                      console.log('Complete ON_PRESS:1 SET_VARIABLE', {
                        Isfalse,
                      });
                    } catch (err) {
                      console.error(err);
                      error = err.message ?? err;
                    }
                    console.log(
                      'Pressable ON_PRESS Complete',
                      error ? { error } : 'no error'
                    );
                  }}
                >
                  <>
                    {Constants['True3'] ? null : (
                      <Icon name={'Ionicons/chevron-up-sharp'} size={24} />
                    )}
                  </>
                  {/* Icon 2 */}
                  <>
                    {!Constants['True3'] ? null : (
                      <Icon name={'Ionicons/chevron-down-sharp'} size={24} />
                    )}
                  </>
                </Pressable>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 26,
                    left: '63%',
                    marginLeft: 1,
                    marginTop: 28,
                    position: 'absolute',
                    width: 100,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignSelf: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Light'],
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'column',
                      height: 26,
                      justifyContent: 'space-between',
                      width: 100,
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
                        {
                          alignSelf: 'center',
                          color: theme.colors['Light'],
                          fontFamily: 'System',
                          fontSize: 13,
                          fontWeight: '700',
                          marginTop: 2,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'未受注8ヵ月'}
                  </Text>
                </View>
              </View>
            </View>
            {/* View 2 */}
            <>
              {Constants['True3'] ? null : (
                <View>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignContent: 'space-around',
                        alignSelf: 'stretch',
                        borderColor: theme.colors['Light'],
                        flexDirection: 'row',
                        height: 80,
                        justifyContent: 'space-evenly',
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          marginLeft: 45,
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            showAlertUtil({
                              title: '信息',
                              message: '这是一个文本信息',
                              buttonText: undefined,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        <SVG
                          source={'https://zynanci.top:441/note.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 12,
                                marginTop: 12,
                                width: 28,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('SPaMobile', {
                              screen: 'SPIG010000Screen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 2 */}
                        <SVG
                          source={'https://zynanci.top:441/map_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 12,
                                marginTop: 12,
                                width: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            Linking.openURL('tel:1234567890');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 3 */}
                        <SVG
                          source={'https://zynanci.top:441/phone_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 11,
                                marginTop: 12,
                                width: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 4 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          marginRight: 30,
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('SPaMobile2', {
                              screen: 'SPIG020800Screen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 4 */}
                        <SVG
                          source={'https://zynanci.top:441/msg_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 9,
                                marginTop: 12,
                                width: 33,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                  </View>
                  {/* Items */}
                  <View
                    style={StyleSheet.applyWidth(
                      { paddingLeft: 16, paddingRight: 16 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          borderTopWidth: 1,
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'入社後実績'}
                      </Text>
                    </View>

                    <View>
                      <SPIG020500Api.FetchSelectNyushajisekiGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchSelectNyushajiseki,
                        }) => {
                          const fetchData = data?.json;
                          if (loading) {
                            return <ActivityIndicator />;
                          }

                          if (
                            error ||
                            data?.status < 200 ||
                            data?.status >= 300
                          ) {
                            return <ActivityIndicator />;
                          }

                          return (
                            <FlatList
                              data={fetchData}
                              keyExtractor={listData =>
                                listData?.id ||
                                listData?.uuid ||
                                JSON.stringify(listData)
                              }
                              listKey={'R4J27GW4'}
                              numColumns={1}
                              onEndReachedThreshold={0.5}
                              renderItem={({ item }) => {
                                const listData = item;
                                return (
                                  <>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'社歴'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.kirekega}
                                      </Text>
                                    </View>
                                    {/* View 2 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 8,
                                          paddingTop: 5,
                                          position: 'relative',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'入社後 受注件数'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                            marginLeft: -17,
                                            marginRight: '-53%',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.number}
                                      </Text>

                                      <View
                                        style={StyleSheet.applyWidth(
                                          { height: 25, width: 25 },
                                          dimensions.width
                                        )}
                                      >
                                        <Pressable
                                          onPress={() => {
                                            try {
                                              navigation.navigate(
                                                'SPaMobile2',
                                                { screen: 'SPIG020800Screen' }
                                              );
                                            } catch (err) {
                                              console.error(err);
                                            }
                                          }}
                                          style={StyleSheet.applyWidth(
                                            { height: 25, width: 25 },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            name={
                                              'Ionicons/chevron-forward-sharp'
                                            }
                                            size={24}
                                          />
                                        </Pressable>
                                      </View>
                                    </View>
                                    {/* View 3 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'入社後 受注金額'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.betamount}
                                      </Text>
                                    </View>
                                    {/* View 4 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'キャンセル'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.cancel}
                                      </Text>
                                    </View>
                                  </>
                                );
                              }}
                              showsHorizontalScrollIndicator={true}
                              showsVerticalScrollIndicator={true}
                            />
                          );
                        }}
                      </SPIG020500Api.FetchSelectNyushajisekiGET>
                    </View>
                    {/* View 5 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'今期実績'}
                      </Text>
                    </View>

                    <SPIG020500Api.FetchSelectProductGET
                      handlers={{
                        onData: fetchData => {
                          const handler = async () => {
                            try {
                              const produce = (
                                await SPIG020500Api.selectProductGET(Constants)
                              )?.json;
                            } catch (err) {
                              console.error(err);
                            }
                          };
                          handler();
                        },
                      }}
                    >
                      {({ loading, error, data, refetchSelectProduct }) => {
                        const fetchData = data?.json;
                        if (loading) {
                          return <ActivityIndicator />;
                        }

                        if (
                          error ||
                          data?.status < 200 ||
                          data?.status >= 300
                        ) {
                          return <ActivityIndicator />;
                        }

                        return (
                          <FlatList
                            data={fetchData}
                            keyExtractor={listData =>
                              listData?.id ||
                              listData?.uuid ||
                              JSON.stringify(listData)
                            }
                            listKey={'M8abRF6f'}
                            numColumns={1}
                            onEndReachedThreshold={0.5}
                            renderItem={({ item }) => {
                              const listData = item;
                              return (
                                <>
                                  {/* View 12 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderBottomWidth: 1,
                                        borderColor: theme.colors['Light'],
                                        flexDirection: 'row',
                                        height: 40,
                                        justifyContent: 'space-between',
                                        marginBottom: 10,
                                        marginLeft: -16,
                                        marginRight: -16,
                                        marginTop: -10,
                                        paddingBottom: 5,
                                        paddingLeft: 16,
                                        paddingRight: 44,
                                        paddingTop: 5,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          color: theme.colors.medium,
                                          fontSize: 15,
                                          textTransform: 'capitalize',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.proName}
                                    </Text>

                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          fontFamily: 'System',
                                          fontSize: 15,
                                          fontWeight: '400',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.proNum}
                                      {' 円'}
                                    </Text>
                                  </View>
                                </>
                              );
                            }}
                            showsHorizontalScrollIndicator={true}
                            showsVerticalScrollIndicator={true}
                          />
                        );
                      }}
                    </SPIG020500Api.FetchSelectProductGET>
                    {/* View 8 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          borderTopWidth: 1,
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -11,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            flex: 1,
                            justifyContent: 'center',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Strong'],
                              fontSize: 15,
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {'経過日数'}
                        </Text>
                      </View>
                    </View>
                    {/* View 9 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置獲得'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'65 日経過'}
                      </Text>
                    </View>
                    {/* View 10 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置提出'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'90 日経過'}
                      </Text>
                    </View>
                    {/* View 14 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置提出'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'90 日経過'}
                      </Text>
                    </View>
                    {/* View 11 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'収支説明'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'150 日経過'}
                      </Text>
                    </View>
                    {/* View 12 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          justifyContent: 'center',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Fetch 2 */}
                      <SPIG020500Api.FetchSelectPrefecturesGET
                        handlers={{
                          onData: fetch2Data => {
                            const handler = async () => {
                              try {
                                const prefectureList = (
                                  await SPIG020500Api.selectPrefecturesGET(
                                    Constants
                                  )
                                )?.json;
                                setGlobalVariableValue({
                                  key: 'prefectures',
                                  value: prefectureList,
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            };
                            handler();
                          },
                        }}
                      >
                        {({
                          loading,
                          error,
                          data,
                          refetchSelectPrefectures,
                        }) => {
                          const fetch2Data = data?.json;
                          if (loading) {
                            return <ActivityIndicator />;
                          }

                          if (
                            error ||
                            data?.status < 200 ||
                            data?.status >= 300
                          ) {
                            return <ActivityIndicator />;
                          }

                          return (
                            <Picker
                              autoDismissKeyboard={true}
                              dropDownBackgroundColor={theme.colors.background}
                              dropDownBorderColor={theme.colors.divider}
                              dropDownBorderRadius={8}
                              dropDownBorderWidth={1}
                              dropDownTextColor={theme.colors.strong}
                              iconSize={24}
                              leftIconMode={'inset'}
                              mode={'native'}
                              onValueChange={newPickerValue => {
                                const handler = async () => {
                                  try {
                                    setPrefecture(newPickerValue);
                                    const cititys = (
                                      await SPIG020500Api.selectCitisGET(
                                        Constants,
                                        { prefectureId: newPickerValue }
                                      )
                                    )?.json;
                                    setGlobalVariableValue({
                                      key: 'citys',
                                      value: cititys,
                                    });
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                              options={Constants['prefectures']}
                              placeholder={'都道府県'}
                              selectedIconColor={theme.colors.strong}
                              selectedIconSize={20}
                              style={StyleSheet.applyWidth(
                                {
                                  marginLeft: 30,
                                  paddingBottom: 0,
                                  paddingTop: 0,
                                  width: 180,
                                },
                                dimensions.width
                              )}
                              type={'solid'}
                              value={prefecture}
                            />
                          );
                        }}
                      </SPIG020500Api.FetchSelectPrefecturesGET>
                      <Picker
                        autoDismissKeyboard={true}
                        dropDownBackgroundColor={theme.colors.background}
                        dropDownBorderColor={theme.colors.divider}
                        dropDownBorderRadius={8}
                        dropDownBorderWidth={1}
                        dropDownTextColor={theme.colors.strong}
                        iconSize={24}
                        leftIconMode={'inset'}
                        mode={'native'}
                        onValueChange={newPickerValue => {
                          try {
                            setCityID(newPickerValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        options={Constants['citys']}
                        placeholder={'市区町村'}
                        selectedIconColor={theme.colors.strong}
                        selectedIconName={'Feather/check'}
                        selectedIconSize={20}
                        style={StyleSheet.applyWidth(
                          {
                            height: 20,
                            marginLeft: 10,
                            paddingBottom: 0,
                            paddingTop: 0,
                            width: 180,
                          },
                          dimensions.width
                        )}
                        type={'solid'}
                        value={cityID}
                      />
                    </View>
                  </View>
                </View>
              )}
            </>
            <Modal
              animationType={'none'}
              presentationStyle={'pageSheet'}
              transparent={false}
              visible={Constants['imageFlg3']}
            >
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'imageFlg3',
                        value: Constants['IsFalse'],
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Image
                    resizeMode={'cover'}
                    source={{ uri: 'https://zynanci.top:441/buin_1.png' }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        {
                          height: 300,
                          marginLeft: -10,
                          marginTop: 250,
                          width: 400,
                        }
                      ),
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
            </Modal>
          </View>
          {/* personnel 4 */}
          <View>
            {/* Header */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  flexDirection: 'row',
                  height: 92,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            >
              {/* View 3 */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', height: 75 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'center',
                      height: 65,
                      width: 65,
                    },
                    dimensions.width
                  )}
                >
                  <Pressable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'imageFlg4',
                          value: Constants['IsTrue'],
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: 'https://zynanci.top:441/buin_6.png' }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          { borderRadius: 55, height: 65, width: 65 }
                        ),
                        dimensions.width
                      )}
                    />
                  </Pressable>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    { height: 70 },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'flex-start',
                          color: theme.colors['Medium'],
                          marginLeft: 10,
                          marginTop: 9,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'斎藤チーム 新卒'}
                  </Text>
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'baseline',
                          fontFamily: 'System',
                          fontSize: 20,
                          fontWeight: '700',
                          marginLeft: 10,
                          marginTop: 7,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'野川    つかさ'}
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 25,
                    left: '92%',
                    marginTop: 28,
                    position: 'absolute',
                    width: 25,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    console.log('Pressable ON_PRESS Start');
                    let error = null;
                    try {
                      console.log('Start ON_PRESS:0 SET_VARIABLE');
                      setGlobalVariableValue({
                        key: 'False4',
                        value: Constants['True4'],
                      });
                      console.log('Complete ON_PRESS:0 SET_VARIABLE');
                      console.log('Start ON_PRESS:1 SET_VARIABLE');
                      const Isfalse = setGlobalVariableValue({
                        key: 'True4',
                        value: Constants['False4'],
                      });
                      console.log('Complete ON_PRESS:1 SET_VARIABLE', {
                        Isfalse,
                      });
                    } catch (err) {
                      console.error(err);
                      error = err.message ?? err;
                    }
                    console.log(
                      'Pressable ON_PRESS Complete',
                      error ? { error } : 'no error'
                    );
                  }}
                >
                  <>
                    {Constants['True4'] ? null : (
                      <Icon name={'Ionicons/chevron-up-sharp'} size={24} />
                    )}
                  </>
                  {/* Icon 2 */}
                  <>
                    {!Constants['True4'] ? null : (
                      <Icon name={'Ionicons/chevron-down-sharp'} size={24} />
                    )}
                  </>
                </Pressable>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 26,
                    left: '63%',
                    marginLeft: 1,
                    marginTop: 28,
                    position: 'absolute',
                    width: 100,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignSelf: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Light'],
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'column',
                      height: 26,
                      justifyContent: 'space-between',
                      width: 100,
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
                        {
                          alignSelf: 'center',
                          color: theme.colors['Light'],
                          fontFamily: 'System',
                          fontSize: 13,
                          fontWeight: '700',
                          marginTop: 2,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'未受注12ヵ月'}
                  </Text>
                </View>
              </View>
            </View>
            {/* View 2 */}
            <>
              {Constants['True4'] ? null : (
                <View>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignContent: 'space-around',
                        alignSelf: 'stretch',
                        borderColor: theme.colors['Light'],
                        flexDirection: 'row',
                        height: 80,
                        justifyContent: 'space-evenly',
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          marginLeft: 45,
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            showAlertUtil({
                              title: '信息',
                              message: '这是一个文本信息',
                              buttonText: undefined,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        <SVG
                          source={'https://zynanci.top:441/note.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 12,
                                marginTop: 12,
                                width: 28,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('SPaMobile', {
                              screen: 'SPIG010000Screen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 2 */}
                        <SVG
                          source={'https://zynanci.top:441/map_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 12,
                                marginTop: 12,
                                width: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            Linking.openURL('tel:1234567890');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 3 */}
                        <SVG
                          source={'https://zynanci.top:441/phone_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 11,
                                marginTop: 12,
                                width: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 4 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          marginRight: 30,
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('SPaMobile2', {
                              screen: 'SPIG020800Screen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 4 */}
                        <SVG
                          source={'https://zynanci.top:441/msg_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 9,
                                marginTop: 12,
                                width: 33,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                  </View>
                  {/* Items */}
                  <View
                    style={StyleSheet.applyWidth(
                      { paddingLeft: 16, paddingRight: 16 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          borderTopWidth: 1,
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'入社後実績'}
                      </Text>
                    </View>

                    <View>
                      <SPIG020500Api.FetchSelectNyushajisekiGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchSelectNyushajiseki,
                        }) => {
                          const fetchData = data?.json;
                          if (loading) {
                            return <ActivityIndicator />;
                          }

                          if (
                            error ||
                            data?.status < 200 ||
                            data?.status >= 300
                          ) {
                            return <ActivityIndicator />;
                          }

                          return (
                            <FlatList
                              data={fetchData}
                              keyExtractor={listData =>
                                listData?.id ||
                                listData?.uuid ||
                                JSON.stringify(listData)
                              }
                              listKey={'wVha9K6i'}
                              numColumns={1}
                              onEndReachedThreshold={0.5}
                              renderItem={({ item }) => {
                                const listData = item;
                                return (
                                  <>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'社歴'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.kirekega}
                                      </Text>
                                    </View>
                                    {/* View 2 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 8,
                                          paddingTop: 5,
                                          position: 'relative',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'入社後 受注件数'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                            marginLeft: -17,
                                            marginRight: '-53%',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.number}
                                      </Text>

                                      <View
                                        style={StyleSheet.applyWidth(
                                          { height: 25, width: 25 },
                                          dimensions.width
                                        )}
                                      >
                                        <Pressable
                                          onPress={() => {
                                            try {
                                              navigation.navigate(
                                                'SPaMobile2',
                                                { screen: 'SPIG020800Screen' }
                                              );
                                            } catch (err) {
                                              console.error(err);
                                            }
                                          }}
                                          style={StyleSheet.applyWidth(
                                            { height: 25, width: 25 },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            name={
                                              'Ionicons/chevron-forward-sharp'
                                            }
                                            size={24}
                                          />
                                        </Pressable>
                                      </View>
                                    </View>
                                    {/* View 3 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'入社後 受注金額'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.betamount}
                                      </Text>
                                    </View>
                                    {/* View 4 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'キャンセル'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.cancel}
                                      </Text>
                                    </View>
                                  </>
                                );
                              }}
                              showsHorizontalScrollIndicator={true}
                              showsVerticalScrollIndicator={true}
                            />
                          );
                        }}
                      </SPIG020500Api.FetchSelectNyushajisekiGET>
                    </View>
                    {/* View 5 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'今期実績'}
                      </Text>
                    </View>

                    <SPIG020500Api.FetchSelectProductGET
                      handlers={{
                        onData: fetchData => {
                          const handler = async () => {
                            try {
                              const produce = (
                                await SPIG020500Api.selectProductGET(Constants)
                              )?.json;
                            } catch (err) {
                              console.error(err);
                            }
                          };
                          handler();
                        },
                      }}
                    >
                      {({ loading, error, data, refetchSelectProduct }) => {
                        const fetchData = data?.json;
                        if (loading) {
                          return <ActivityIndicator />;
                        }

                        if (
                          error ||
                          data?.status < 200 ||
                          data?.status >= 300
                        ) {
                          return <ActivityIndicator />;
                        }

                        return (
                          <FlatList
                            data={fetchData}
                            keyExtractor={listData =>
                              listData?.id ||
                              listData?.uuid ||
                              JSON.stringify(listData)
                            }
                            listKey={'mIsGNTs8'}
                            numColumns={1}
                            onEndReachedThreshold={0.5}
                            renderItem={({ item }) => {
                              const listData = item;
                              return (
                                <>
                                  {/* View 12 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderBottomWidth: 1,
                                        borderColor: theme.colors['Light'],
                                        flexDirection: 'row',
                                        height: 40,
                                        justifyContent: 'space-between',
                                        marginBottom: 10,
                                        marginLeft: -16,
                                        marginRight: -16,
                                        marginTop: -10,
                                        paddingBottom: 5,
                                        paddingLeft: 16,
                                        paddingRight: 44,
                                        paddingTop: 5,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          color: theme.colors.medium,
                                          fontSize: 15,
                                          textTransform: 'capitalize',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.proName}
                                    </Text>

                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          fontFamily: 'System',
                                          fontSize: 15,
                                          fontWeight: '400',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.proNum}
                                      {' 円'}
                                    </Text>
                                  </View>
                                </>
                              );
                            }}
                            showsHorizontalScrollIndicator={true}
                            showsVerticalScrollIndicator={true}
                          />
                        );
                      }}
                    </SPIG020500Api.FetchSelectProductGET>
                    {/* View 8 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          borderTopWidth: 1,
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -11,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            flex: 1,
                            justifyContent: 'center',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Strong'],
                              fontSize: 15,
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {'経過日数'}
                        </Text>
                      </View>
                    </View>
                    {/* View 9 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置獲得'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'65 日経過'}
                      </Text>
                    </View>
                    {/* View 10 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置提出'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'90 日経過'}
                      </Text>
                    </View>
                    {/* View 14 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置提出'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'90 日経過'}
                      </Text>
                    </View>
                    {/* View 11 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'収支説明'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'150 日経過'}
                      </Text>
                    </View>
                    {/* View 12 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          justifyContent: 'center',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Fetch 2 */}
                      <SPIG020500Api.FetchSelectPrefecturesGET
                        handlers={{
                          onData: fetch2Data => {
                            const handler = async () => {
                              try {
                                const prefectureList = (
                                  await SPIG020500Api.selectPrefecturesGET(
                                    Constants
                                  )
                                )?.json;
                                setGlobalVariableValue({
                                  key: 'prefectures',
                                  value: prefectureList,
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            };
                            handler();
                          },
                        }}
                      >
                        {({
                          loading,
                          error,
                          data,
                          refetchSelectPrefectures,
                        }) => {
                          const fetch2Data = data?.json;
                          if (loading) {
                            return <ActivityIndicator />;
                          }

                          if (
                            error ||
                            data?.status < 200 ||
                            data?.status >= 300
                          ) {
                            return <ActivityIndicator />;
                          }

                          return (
                            <Picker
                              autoDismissKeyboard={true}
                              dropDownBackgroundColor={theme.colors.background}
                              dropDownBorderColor={theme.colors.divider}
                              dropDownBorderRadius={8}
                              dropDownBorderWidth={1}
                              dropDownTextColor={theme.colors.strong}
                              iconSize={24}
                              leftIconMode={'inset'}
                              mode={'native'}
                              onValueChange={newPickerValue => {
                                const handler = async () => {
                                  try {
                                    setPrefecture(newPickerValue);
                                    const cititys = (
                                      await SPIG020500Api.selectCitisGET(
                                        Constants,
                                        { prefectureId: newPickerValue }
                                      )
                                    )?.json;
                                    setGlobalVariableValue({
                                      key: 'citys',
                                      value: cititys,
                                    });
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                              options={Constants['prefectures']}
                              placeholder={'都道府県'}
                              selectedIconColor={theme.colors.strong}
                              selectedIconSize={20}
                              style={StyleSheet.applyWidth(
                                {
                                  marginLeft: 30,
                                  paddingBottom: 0,
                                  paddingTop: 0,
                                  width: 180,
                                },
                                dimensions.width
                              )}
                              type={'solid'}
                              value={prefecture}
                            />
                          );
                        }}
                      </SPIG020500Api.FetchSelectPrefecturesGET>
                      <Picker
                        autoDismissKeyboard={true}
                        dropDownBackgroundColor={theme.colors.background}
                        dropDownBorderColor={theme.colors.divider}
                        dropDownBorderRadius={8}
                        dropDownBorderWidth={1}
                        dropDownTextColor={theme.colors.strong}
                        iconSize={24}
                        leftIconMode={'inset'}
                        mode={'native'}
                        onValueChange={newPickerValue => {
                          try {
                            setCityID(newPickerValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        options={Constants['citys']}
                        placeholder={'市区町村'}
                        selectedIconColor={theme.colors.strong}
                        selectedIconName={'Feather/check'}
                        selectedIconSize={20}
                        style={StyleSheet.applyWidth(
                          {
                            height: 20,
                            marginLeft: 10,
                            paddingBottom: 0,
                            paddingTop: 0,
                            width: 180,
                          },
                          dimensions.width
                        )}
                        type={'solid'}
                        value={cityID}
                      />
                    </View>
                  </View>
                </View>
              )}
            </>
            <Modal
              animationType={'none'}
              presentationStyle={'pageSheet'}
              transparent={false}
              visible={Constants['imageFlg4']}
            >
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'imageFlg4',
                        value: Constants['IsFalse'],
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Image
                    resizeMode={'cover'}
                    source={{ uri: 'https://zynanci.top:441/buin_6.png' }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        {
                          height: 300,
                          marginLeft: -10,
                          marginTop: 250,
                          width: 400,
                        }
                      ),
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
            </Modal>
          </View>
          {/* personnel 5 */}
          <View>
            {/* Header */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Light'],
                  flexDirection: 'row',
                  height: 92,
                  paddingBottom: 8,
                  paddingLeft: 12,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            >
              {/* View 3 */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', height: 75 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'center',
                      height: 65,
                      width: 65,
                    },
                    dimensions.width
                  )}
                >
                  <Pressable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'imageFlg5',
                          value: Constants['IsTrue'],
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={{ uri: 'https://zynanci.top:441/buin_4.png' }}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          { borderRadius: 55, height: 65, width: 65 }
                        ),
                        dimensions.width
                      )}
                    />
                  </Pressable>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    { height: 70 },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'flex-start',
                          color: theme.colors['Medium'],
                          marginLeft: 10,
                          marginTop: 9,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'斎藤チーム'}
                  </Text>
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          alignSelf: 'baseline',
                          fontFamily: 'System',
                          fontSize: 20,
                          fontWeight: '700',
                          marginLeft: 10,
                          marginTop: 7,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'赤羽根    美智子'}
                  </Text>
                </View>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 25,
                    left: '92%',
                    marginTop: 28,
                    position: 'absolute',
                    width: 25,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    console.log('Pressable ON_PRESS Start');
                    let error = null;
                    try {
                      console.log('Start ON_PRESS:0 SET_VARIABLE');
                      setGlobalVariableValue({
                        key: 'False5',
                        value: Constants['True5'],
                      });
                      console.log('Complete ON_PRESS:0 SET_VARIABLE');
                      console.log('Start ON_PRESS:1 SET_VARIABLE');
                      const Isfalse = setGlobalVariableValue({
                        key: 'True5',
                        value: Constants['False5'],
                      });
                      console.log('Complete ON_PRESS:1 SET_VARIABLE', {
                        Isfalse,
                      });
                    } catch (err) {
                      console.error(err);
                      error = err.message ?? err;
                    }
                    console.log(
                      'Pressable ON_PRESS Complete',
                      error ? { error } : 'no error'
                    );
                  }}
                >
                  <>
                    {Constants['True5'] ? null : (
                      <Icon name={'Ionicons/chevron-up-sharp'} size={24} />
                    )}
                  </>
                  {/* Icon 2 */}
                  <>
                    {!Constants['True5'] ? null : (
                      <Icon name={'Ionicons/chevron-down-sharp'} size={24} />
                    )}
                  </>
                </Pressable>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    height: 26,
                    left: '63%',
                    marginLeft: 1,
                    marginTop: 28,
                    position: 'absolute',
                    width: 100,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignSelf: 'center',
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Light'],
                      borderLeftWidth: 1,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      flexDirection: 'column',
                      height: 26,
                      justifyContent: 'space-between',
                      width: 100,
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
                        {
                          alignSelf: 'center',
                          color: theme.colors['Light'],
                          fontFamily: 'System',
                          fontSize: 13,
                          fontWeight: '700',
                          marginTop: 2,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'未受注2ヵ月'}
                  </Text>
                </View>
              </View>
            </View>
            {/* View 2 */}
            <>
              {Constants['True5'] ? null : (
                <View>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignContent: 'space-around',
                        alignSelf: 'stretch',
                        borderColor: theme.colors['Light'],
                        flexDirection: 'row',
                        height: 80,
                        justifyContent: 'space-evenly',
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          marginLeft: 45,
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            showAlertUtil({
                              title: '信息',
                              message: '这是一个文本信息',
                              buttonText: undefined,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        <SVG
                          source={'https://zynanci.top:441/note.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 12,
                                marginTop: 12,
                                width: 28,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('SPaMobile', {
                              screen: 'SPIG010000Screen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 2 */}
                        <SVG
                          source={'https://zynanci.top:441/map_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 12,
                                marginTop: 12,
                                width: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            Linking.openURL('tel:1234567890');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 3 */}
                        <SVG
                          source={'https://zynanci.top:441/phone_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 11,
                                marginTop: 12,
                                width: 30,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                    {/* View 4 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'center',
                          alignSelf: 'center',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Boder_1'],
                          borderLeftWidth: 1,
                          borderRadius: 55,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          height: 55,
                          justifyContent: 'space-around',
                          marginRight: 30,
                          width: 55,
                        },
                        dimensions.width
                      )}
                    >
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('SPaMobile2', {
                              screen: 'SPIG020800Screen',
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { height: 55, width: 55 },
                          dimensions.width
                        )}
                      >
                        {/* SVG 4 */}
                        <SVG
                          source={'https://zynanci.top:441/msg_blue.svg'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.SVGStyles(theme)['SVG'],
                              {
                                height: 30,
                                marginLeft: 9,
                                marginTop: 12,
                                width: 33,
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </Touchable>
                    </View>
                  </View>
                  {/* Items */}
                  <View
                    style={StyleSheet.applyWidth(
                      { paddingLeft: 16, paddingRight: 16 },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          borderTopWidth: 1,
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'入社後実績'}
                      </Text>
                    </View>

                    <View>
                      <SPIG020500Api.FetchSelectNyushajisekiGET>
                        {({
                          loading,
                          error,
                          data,
                          refetchSelectNyushajiseki,
                        }) => {
                          const fetchData = data?.json;
                          if (loading) {
                            return <ActivityIndicator />;
                          }

                          if (
                            error ||
                            data?.status < 200 ||
                            data?.status >= 300
                          ) {
                            return <ActivityIndicator />;
                          }

                          return (
                            <FlatList
                              data={fetchData}
                              keyExtractor={listData =>
                                listData?.id ||
                                listData?.uuid ||
                                JSON.stringify(listData)
                              }
                              listKey={'mXbVMx48'}
                              numColumns={1}
                              onEndReachedThreshold={0.5}
                              renderItem={({ item }) => {
                                const listData = item;
                                return (
                                  <>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'社歴'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.kirekega}
                                      </Text>
                                    </View>
                                    {/* View 2 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 8,
                                          paddingTop: 5,
                                          position: 'relative',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'入社後 受注件数'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                            marginLeft: -17,
                                            marginRight: '-53%',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.number}
                                      </Text>

                                      <View
                                        style={StyleSheet.applyWidth(
                                          { height: 25, width: 25 },
                                          dimensions.width
                                        )}
                                      >
                                        <Pressable
                                          onPress={() => {
                                            try {
                                              navigation.navigate(
                                                'SPaMobile2',
                                                { screen: 'SPIG020800Screen' }
                                              );
                                            } catch (err) {
                                              console.error(err);
                                            }
                                          }}
                                          style={StyleSheet.applyWidth(
                                            { height: 25, width: 25 },
                                            dimensions.width
                                          )}
                                        >
                                          <Icon
                                            name={
                                              'Ionicons/chevron-forward-sharp'
                                            }
                                            size={24}
                                          />
                                        </Pressable>
                                      </View>
                                    </View>
                                    {/* View 3 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginBottom: 10,
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'入社後 受注金額'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.betamount}
                                      </Text>
                                    </View>
                                    {/* View 4 */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 1,
                                          borderColor: theme.colors['Light'],
                                          flexDirection: 'row',
                                          height: 40,
                                          justifyContent: 'space-between',
                                          marginLeft: -16,
                                          marginRight: -16,
                                          marginTop: -10,
                                          paddingBottom: 5,
                                          paddingLeft: 16,
                                          paddingRight: 44,
                                          paddingTop: 5,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            color: theme.colors.medium,
                                            fontSize: 15,
                                            textTransform: 'capitalize',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {'キャンセル'}
                                      </Text>

                                      <Text
                                        style={StyleSheet.applyWidth(
                                          {
                                            alignSelf: 'center',
                                            fontFamily: 'System',
                                            fontSize: 15,
                                            fontWeight: '400',
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.cancel}
                                      </Text>
                                    </View>
                                  </>
                                );
                              }}
                              showsHorizontalScrollIndicator={true}
                              showsVerticalScrollIndicator={true}
                            />
                          );
                        }}
                      </SPIG020500Api.FetchSelectNyushajisekiGET>
                    </View>
                    {/* View 5 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'今期実績'}
                      </Text>
                    </View>

                    <SPIG020500Api.FetchSelectProductGET
                      handlers={{
                        onData: fetchData => {
                          const handler = async () => {
                            try {
                              const produce = (
                                await SPIG020500Api.selectProductGET(Constants)
                              )?.json;
                            } catch (err) {
                              console.error(err);
                            }
                          };
                          handler();
                        },
                      }}
                    >
                      {({ loading, error, data, refetchSelectProduct }) => {
                        const fetchData = data?.json;
                        if (loading) {
                          return <ActivityIndicator />;
                        }

                        if (
                          error ||
                          data?.status < 200 ||
                          data?.status >= 300
                        ) {
                          return <ActivityIndicator />;
                        }

                        return (
                          <FlatList
                            data={fetchData}
                            keyExtractor={listData =>
                              listData?.id ||
                              listData?.uuid ||
                              JSON.stringify(listData)
                            }
                            listKey={'u64wozPA'}
                            numColumns={1}
                            onEndReachedThreshold={0.5}
                            renderItem={({ item }) => {
                              const listData = item;
                              return (
                                <>
                                  {/* View 12 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderBottomWidth: 1,
                                        borderColor: theme.colors['Light'],
                                        flexDirection: 'row',
                                        height: 40,
                                        justifyContent: 'space-between',
                                        marginBottom: 10,
                                        marginLeft: -16,
                                        marginRight: -16,
                                        marginTop: -10,
                                        paddingBottom: 5,
                                        paddingLeft: 16,
                                        paddingRight: 44,
                                        paddingTop: 5,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          color: theme.colors.medium,
                                          fontSize: 15,
                                          textTransform: 'capitalize',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.proName}
                                    </Text>

                                    <Text
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignSelf: 'center',
                                          fontFamily: 'System',
                                          fontSize: 15,
                                          fontWeight: '400',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.proNum}
                                      {' 円'}
                                    </Text>
                                  </View>
                                </>
                              );
                            }}
                            showsHorizontalScrollIndicator={true}
                            showsVerticalScrollIndicator={true}
                          />
                        );
                      }}
                    </SPIG020500Api.FetchSelectProductGET>
                    {/* View 8 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: 'rgb(236, 233, 233)',
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          borderTopWidth: 1,
                          flexDirection: 'row',
                          height: 32,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -11,
                          paddingBottom: 5,
                          paddingLeft: 15,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            flex: 1,
                            justifyContent: 'center',
                          },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Strong'],
                              fontSize: 15,
                              textTransform: 'capitalize',
                            },
                            dimensions.width
                          )}
                        >
                          {'経過日数'}
                        </Text>
                      </View>
                    </View>
                    {/* View 9 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置獲得'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'65 日経過'}
                      </Text>
                    </View>
                    {/* View 10 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置提出'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'90 日経過'}
                      </Text>
                    </View>
                    {/* View 14 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'配置提出'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'90 日経過'}
                      </Text>
                    </View>
                    {/* View 11 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'space-between',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            color: theme.colors.medium,
                            fontSize: 15,
                            textTransform: 'capitalize',
                          },
                          dimensions.width
                        )}
                      >
                        {'収支説明'}
                      </Text>

                      <Text
                        style={StyleSheet.applyWidth(
                          {
                            alignSelf: 'center',
                            fontFamily: 'System',
                            fontSize: 15,
                            fontWeight: '400',
                          },
                          dimensions.width
                        )}
                      >
                        {'150 日経過'}
                      </Text>
                    </View>
                    {/* View 12 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Light'],
                          flexDirection: 'row',
                          justifyContent: 'center',
                          marginBottom: 10,
                          marginLeft: -16,
                          marginRight: -16,
                          marginTop: -10,
                          paddingBottom: 5,
                          paddingLeft: 16,
                          paddingRight: 44,
                          paddingTop: 5,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Fetch 2 */}
                      <SPIG020500Api.FetchSelectPrefecturesGET
                        handlers={{
                          onData: fetch2Data => {
                            const handler = async () => {
                              try {
                                const prefectureList = (
                                  await SPIG020500Api.selectPrefecturesGET(
                                    Constants
                                  )
                                )?.json;
                                setGlobalVariableValue({
                                  key: 'prefectures',
                                  value: prefectureList,
                                });
                              } catch (err) {
                                console.error(err);
                              }
                            };
                            handler();
                          },
                        }}
                      >
                        {({
                          loading,
                          error,
                          data,
                          refetchSelectPrefectures,
                        }) => {
                          const fetch2Data = data?.json;
                          if (loading) {
                            return <ActivityIndicator />;
                          }

                          if (
                            error ||
                            data?.status < 200 ||
                            data?.status >= 300
                          ) {
                            return <ActivityIndicator />;
                          }

                          return (
                            <Picker
                              autoDismissKeyboard={true}
                              dropDownBackgroundColor={theme.colors.background}
                              dropDownBorderColor={theme.colors.divider}
                              dropDownBorderRadius={8}
                              dropDownBorderWidth={1}
                              dropDownTextColor={theme.colors.strong}
                              iconSize={24}
                              leftIconMode={'inset'}
                              mode={'native'}
                              onValueChange={newPickerValue => {
                                const handler = async () => {
                                  try {
                                    setPrefecture(newPickerValue);
                                    const cititys = (
                                      await SPIG020500Api.selectCitisGET(
                                        Constants,
                                        { prefectureId: newPickerValue }
                                      )
                                    )?.json;
                                    setGlobalVariableValue({
                                      key: 'citys',
                                      value: cititys,
                                    });
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                              options={Constants['prefectures']}
                              placeholder={'都道府県'}
                              selectedIconColor={theme.colors.strong}
                              selectedIconSize={20}
                              style={StyleSheet.applyWidth(
                                {
                                  marginLeft: 30,
                                  paddingBottom: 0,
                                  paddingTop: 0,
                                  width: 180,
                                },
                                dimensions.width
                              )}
                              type={'solid'}
                              value={prefecture}
                            />
                          );
                        }}
                      </SPIG020500Api.FetchSelectPrefecturesGET>
                      <Picker
                        autoDismissKeyboard={true}
                        dropDownBackgroundColor={theme.colors.background}
                        dropDownBorderColor={theme.colors.divider}
                        dropDownBorderRadius={8}
                        dropDownBorderWidth={1}
                        dropDownTextColor={theme.colors.strong}
                        iconSize={24}
                        leftIconMode={'inset'}
                        mode={'native'}
                        onValueChange={newPickerValue => {
                          try {
                            setCityID(newPickerValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        options={Constants['citys']}
                        placeholder={'市区町村'}
                        selectedIconColor={theme.colors.strong}
                        selectedIconName={'Feather/check'}
                        selectedIconSize={20}
                        style={StyleSheet.applyWidth(
                          {
                            height: 20,
                            marginLeft: 10,
                            paddingBottom: 0,
                            paddingTop: 0,
                            width: 180,
                          },
                          dimensions.width
                        )}
                        type={'solid'}
                        value={cityID}
                      />
                    </View>
                  </View>
                </View>
              )}
            </>
            <Modal
              animationType={'none'}
              presentationStyle={'pageSheet'}
              transparent={false}
              visible={Constants['imageFlg5']}
            >
              <View>
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'imageFlg5',
                        value: Constants['IsFalse'],
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Image
                    resizeMode={'cover'}
                    source={{ uri: 'https://zynanci.top:441/buin_4.png' }}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        {
                          height: 300,
                          marginLeft: -10,
                          marginTop: 250,
                          width: 400,
                        }
                      ),
                      dimensions.width
                    )}
                  />
                </Touchable>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SPIG020500Screen);
