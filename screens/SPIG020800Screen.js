import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  IconButton,
  Pressable,
  SVG,
  ScreenContainer,
  Surface,
  SwipeableItem,
  withTheme,
} from '@draftbit/ui';
import * as Linking from 'expo-linking';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const SPIG020800Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const addContent = (Variables, setGlobalVariableValue, workType) => {
    const element = Variables.elements;
    if (!element) {
      setGlobalVariableValue({ key: 'elements', value: [workType] });
    } else {
      setGlobalVariableValue({
        key: 'elements',
        value: [...element, workType],
      });
    }

    console.log(Variables.elements);
  };

  const [reciveData, setReciveData] = React.useState([]);
  const [stepperValue, setStepperValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={false}
    >
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
              borderColor: theme.colors['Medium'],
              borderRadius: 5,
              borderWidth: 1,
              justifyContent: 'center',
              marginLeft: 10,
              marginRight: 125,
              minHeight: 15,
              width: 32,
            }),
            dimensions.width
          )}
        >
          <IconButton
            color={theme.colors['Strong']}
            icon={'Entypo/back'}
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            size={26}
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
            }),
            dimensions.width
          )}
        >
          {'案件一覧'}
        </Text>
      </View>
      {/* View 3 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              height: 63,
              width: '135%',
            },
            dimensions.width
          )}
        >
          <SwipeableItem
            closeOnPress={true}
            disableLeftSwipe={Constants['IsTrue']}
            friction={20}
            rightOpenValue={-135}
            stopLeftSwipe={-135}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SwipeableItemStyles(theme)['Swipeable Item'],
                { flexDirection: 'row', justifyContent: 'space-between' }
              ),
              dimensions.width
            )}
            swipeActivationPercentage={80}
            swipeToClosePercent={50}
            swipeToOpenPercent={20}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'stretch',
                  flexDirection: 'row',
                  height: 75,
                  justifyContent: 'flex-start',
                  marginLeft: 15,
                  marginTop: 4,
                  width: 379,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 50, marginTop: 2, width: 50 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={{ uri: 'https://zynanci.top:441/buin_2.png' }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { borderRadius: 55, height: 50, width: 50 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginLeft: 10,
                    marginTop: -3,
                    width: 250,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontSize: 16,
                    }),
                    dimensions.width
                  )}
                >
                  {'斎藤    龍之介    様'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 22,
                    },
                    dimensions.width
                  )}
                >
                  <SVG
                    source={'https://zynanci.top:441/target.svg'}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(GlobalStyles.SVGStyles(theme)['SVG'], {
                        height: 13,
                        marginTop: 1,
                        width: 13,
                      }),
                      dimensions.width
                    )}
                  />
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 14, marginLeft: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'15829614581'}
                  </Text>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 40,
                    },
                    dimensions.width
                  )}
                >
                  {/* SVG 2 */}
                  <SVG
                    source={'https://zynanci.top:441/house.svg'}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(GlobalStyles.SVGStyles(theme)['SVG'], {
                        height: 13,
                        marginTop: -1,
                        width: 13,
                      }),
                      dimensions.width
                    )}
                  />
                  {/* Text 3 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 13, marginLeft: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'名古屋市中区栄１丁目２－３'}
                  </Text>
                </View>
              </View>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 63,
                  justifyContent: 'flex-start',
                  width: 130,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: theme.colors['F7B116'],
                    height: 63,
                    justifyContent: 'center',
                    width: 65,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    try {
                      Linking.openURL('tel:15820226666');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Icon name={'Entypo/phone'} size={24} />
                </Pressable>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Green BG'],
                    height: 63,
                    justifyContent: 'center',
                    width: 65,
                  },
                  dimensions.width
                )}
              >
                {/* Pressable 2 */}
                <Pressable
                  onPress={() => {
                    try {
                      navigation.navigate('SPaMobile2', {
                        screen: 'SPIG020000Screen',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Icon name={'Ionicons/documents-outline'} size={24} />
                </Pressable>
              </View>
            </View>
          </SwipeableItem>
        </View>
      </View>
      {/* View 6 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderTopWidth: 1,
              height: 63,
              width: '135%',
            },
            dimensions.width
          )}
        >
          <SwipeableItem
            closeOnPress={true}
            disableLeftSwipe={Constants['IsTrue']}
            friction={20}
            rightOpenValue={-135}
            stopLeftSwipe={-135}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SwipeableItemStyles(theme)['Swipeable Item'],
                { flexDirection: 'row', justifyContent: 'space-between' }
              ),
              dimensions.width
            )}
            swipeActivationPercentage={80}
            swipeToClosePercent={50}
            swipeToOpenPercent={20}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'stretch',
                  flexDirection: 'row',
                  height: 75,
                  justifyContent: 'flex-start',
                  marginLeft: 15,
                  marginTop: 4,
                  width: 379,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 50, marginTop: 2, width: 50 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={{ uri: 'https://zynanci.top:441/buin_3.png' }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { borderRadius: 55, height: 50, width: 50 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginLeft: 10,
                    marginTop: -3,
                    width: 250,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontSize: 16,
                    }),
                    dimensions.width
                  )}
                >
                  {'山田    次郎    様'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 22,
                    },
                    dimensions.width
                  )}
                >
                  <SVG
                    source={'https://zynanci.top:441/target.svg'}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(GlobalStyles.SVGStyles(theme)['SVG'], {
                        height: 13,
                        marginTop: 1,
                        width: 13,
                      }),
                      dimensions.width
                    )}
                  />
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 14, marginLeft: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'15825481147'}
                  </Text>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 40,
                    },
                    dimensions.width
                  )}
                >
                  {/* SVG 2 */}
                  <SVG
                    source={'https://zynanci.top:441/house.svg'}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(GlobalStyles.SVGStyles(theme)['SVG'], {
                        height: 13,
                        marginTop: -1,
                        width: 13,
                      }),
                      dimensions.width
                    )}
                  />
                  {/* Text 3 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 13, marginLeft: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'名古屋市中区栄２丁目２－１'}
                  </Text>
                </View>
              </View>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 63,
                  justifyContent: 'flex-start',
                  width: 130,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: theme.colors['F7B116'],
                    height: 63,
                    justifyContent: 'center',
                    width: 65,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    try {
                      Linking.openURL('tel:15820226666');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Icon name={'Entypo/phone'} size={24} />
                </Pressable>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Green BG'],
                    height: 63,
                    justifyContent: 'center',
                    width: 65,
                  },
                  dimensions.width
                )}
              >
                {/* Pressable 2 */}
                <Pressable
                  onPress={() => {
                    try {
                      navigation.navigate('SPaMobile', {
                        screen: 'SPIG020500Screen',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Icon 2 */}
                  <Icon
                    name={'MaterialCommunityIcons/account-convert-outline'}
                    size={24}
                  />
                </Pressable>
              </View>
            </View>
          </SwipeableItem>
        </View>
      </View>
      {/* View 9 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderTopWidth: 1,
              height: 63,
              width: '135%',
            },
            dimensions.width
          )}
        >
          <SwipeableItem
            closeOnPress={true}
            disableLeftSwipe={Constants['IsTrue']}
            friction={20}
            rightOpenValue={-135}
            stopLeftSwipe={-135}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SwipeableItemStyles(theme)['Swipeable Item'],
                { flexDirection: 'row', justifyContent: 'space-between' }
              ),
              dimensions.width
            )}
            swipeActivationPercentage={80}
            swipeToClosePercent={50}
            swipeToOpenPercent={20}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'stretch',
                  flexDirection: 'row',
                  height: 75,
                  justifyContent: 'flex-start',
                  marginLeft: 15,
                  marginTop: 4,
                  width: 379,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 50, marginTop: 2, width: 50 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={{ uri: 'https://zynanci.top:441/buin_1.png' }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { borderRadius: 55, height: 50, width: 50 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginLeft: 10,
                    marginTop: -3,
                    width: 250,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontSize: 16,
                    }),
                    dimensions.width
                  )}
                >
                  {'田崎    京子    様'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 22,
                    },
                    dimensions.width
                  )}
                >
                  <SVG
                    source={'https://zynanci.top:441/target.svg'}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(GlobalStyles.SVGStyles(theme)['SVG'], {
                        height: 13,
                        marginTop: 1,
                        width: 13,
                      }),
                      dimensions.width
                    )}
                  />
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 14, marginLeft: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'15811598546'}
                  </Text>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 40,
                    },
                    dimensions.width
                  )}
                >
                  {/* SVG 2 */}
                  <SVG
                    source={'https://zynanci.top:441/house.svg'}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(GlobalStyles.SVGStyles(theme)['SVG'], {
                        height: 13,
                        marginTop: -1,
                        width: 13,
                      }),
                      dimensions.width
                    )}
                  />
                  {/* Text 3 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 13, marginLeft: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'名古屋市中区栄３丁目２－８'}
                  </Text>
                </View>
              </View>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 63,
                  justifyContent: 'flex-start',
                  width: 130,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: theme.colors['F7B116'],
                    height: 63,
                    justifyContent: 'center',
                    width: 65,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    try {
                      Linking.openURL('tel:15820226666');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Icon name={'Entypo/phone'} size={24} />
                </Pressable>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Green BG'],
                    height: 63,
                    justifyContent: 'center',
                    width: 65,
                  },
                  dimensions.width
                )}
              >
                {/* Pressable 2 */}
                <Pressable
                  onPress={() => {
                    try {
                      navigation.navigate('SPaMobile', {
                        screen: 'SPIG020500Screen',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Icon 2 */}
                  <Icon
                    name={'MaterialCommunityIcons/account-convert-outline'}
                    size={24}
                  />
                </Pressable>
              </View>
            </View>
          </SwipeableItem>
        </View>
      </View>
      {/* View 10 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderTopWidth: 1,
              height: 63,
              width: '135%',
            },
            dimensions.width
          )}
        >
          <SwipeableItem
            closeOnPress={true}
            disableLeftSwipe={Constants['IsTrue']}
            friction={20}
            rightOpenValue={-135}
            stopLeftSwipe={-135}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SwipeableItemStyles(theme)['Swipeable Item'],
                { flexDirection: 'row', justifyContent: 'space-between' }
              ),
              dimensions.width
            )}
            swipeActivationPercentage={80}
            swipeToClosePercent={50}
            swipeToOpenPercent={20}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'stretch',
                  flexDirection: 'row',
                  height: 75,
                  justifyContent: 'flex-start',
                  marginLeft: 15,
                  marginTop: 4,
                  width: 379,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 50, marginTop: 2, width: 50 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={{ uri: 'https://zynanci.top:441/buin_6.png' }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { borderRadius: 55, height: 50, width: 50 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginLeft: 10,
                    marginTop: -3,
                    width: 250,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontSize: 16,
                    }),
                    dimensions.width
                  )}
                >
                  {'野川    つかさ    様'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 22,
                    },
                    dimensions.width
                  )}
                >
                  <SVG
                    source={'https://zynanci.top:441/target.svg'}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(GlobalStyles.SVGStyles(theme)['SVG'], {
                        height: 13,
                        marginTop: 1,
                        width: 13,
                      }),
                      dimensions.width
                    )}
                  />
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 14, marginLeft: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'18328841765'}
                  </Text>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 40,
                    },
                    dimensions.width
                  )}
                >
                  {/* SVG 2 */}
                  <SVG
                    source={'https://zynanci.top:441/house.svg'}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(GlobalStyles.SVGStyles(theme)['SVG'], {
                        height: 13,
                        marginTop: -1,
                        width: 13,
                      }),
                      dimensions.width
                    )}
                  />
                  {/* Text 3 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 13, marginLeft: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'名古屋市中区栄５丁目２－４'}
                  </Text>
                </View>
              </View>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 63,
                  justifyContent: 'flex-start',
                  width: 130,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: theme.colors['F7B116'],
                    height: 63,
                    justifyContent: 'center',
                    width: 65,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    try {
                      Linking.openURL('tel:15820226666');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Icon name={'Entypo/phone'} size={24} />
                </Pressable>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Green BG'],
                    height: 63,
                    justifyContent: 'center',
                    width: 65,
                  },
                  dimensions.width
                )}
              >
                {/* Pressable 2 */}
                <Pressable
                  onPress={() => {
                    try {
                      navigation.navigate('SPaMobile', {
                        screen: 'SPIG020500Screen',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Icon 2 */}
                  <Icon
                    name={'MaterialCommunityIcons/account-convert-outline'}
                    size={24}
                  />
                </Pressable>
              </View>
            </View>
          </SwipeableItem>
        </View>
      </View>
      {/* View 11 */}
      <View
        style={StyleSheet.applyWidth(
          { borderBottomWidth: 1 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderTopWidth: 1,
              height: 63,
              width: '135%',
            },
            dimensions.width
          )}
        >
          <SwipeableItem
            closeOnPress={true}
            disableLeftSwipe={Constants['IsTrue']}
            friction={20}
            rightOpenValue={-135}
            stopLeftSwipe={-135}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SwipeableItemStyles(theme)['Swipeable Item'],
                { flexDirection: 'row', justifyContent: 'space-between' }
              ),
              dimensions.width
            )}
            swipeActivationPercentage={80}
            swipeToClosePercent={50}
            swipeToOpenPercent={20}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'stretch',
                  flexDirection: 'row',
                  height: 75,
                  justifyContent: 'flex-start',
                  marginLeft: 15,
                  marginTop: 4,
                  width: 379,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 50, marginTop: 2, width: 50 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={{ uri: 'https://zynanci.top:441/buin_4.png' }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { borderRadius: 55, height: 50, width: 50 }
                    ),
                    dimensions.width
                  )}
                />
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginLeft: 10,
                    marginTop: -3,
                    width: 250,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontSize: 16,
                    }),
                    dimensions.width
                  )}
                >
                  {'野川    つかさ    様'}
                </Text>

                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 22,
                    },
                    dimensions.width
                  )}
                >
                  <SVG
                    source={'https://zynanci.top:441/target.svg'}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(GlobalStyles.SVGStyles(theme)['SVG'], {
                        height: 13,
                        marginTop: 1,
                        width: 13,
                      }),
                      dimensions.width
                    )}
                  />
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 14, marginLeft: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'19229147763'}
                  </Text>
                </View>
                {/* View 2 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexDirection: 'row',
                      position: 'absolute',
                      top: 40,
                    },
                    dimensions.width
                  )}
                >
                  {/* SVG 2 */}
                  <SVG
                    source={'https://zynanci.top:441/house.svg'}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(GlobalStyles.SVGStyles(theme)['SVG'], {
                        height: 13,
                        marginTop: -1,
                        width: 13,
                      }),
                      dimensions.width
                    )}
                  />
                  {/* Text 3 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { fontSize: 13, marginLeft: 5 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'名古屋市中区栄１丁目４－６'}
                  </Text>
                </View>
              </View>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  height: 63,
                  justifyContent: 'flex-start',
                  width: 130,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: theme.colors['F7B116'],
                    height: 63,
                    justifyContent: 'center',
                    width: 65,
                  },
                  dimensions.width
                )}
              >
                <Pressable
                  onPress={() => {
                    try {
                      Linking.openURL('tel:15820226666');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Icon name={'Entypo/phone'} size={24} />
                </Pressable>
              </View>
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Green BG'],
                    height: 63,
                    justifyContent: 'center',
                    width: 65,
                  },
                  dimensions.width
                )}
              >
                {/* Pressable 2 */}
                <Pressable
                  onPress={() => {
                    try {
                      navigation.navigate('SPaMobile', {
                        screen: 'SPIG020500Screen',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Icon 2 */}
                  <Icon
                    name={'MaterialCommunityIcons/account-convert-outline'}
                    size={24}
                  />
                </Pressable>
              </View>
            </View>
          </SwipeableItem>
        </View>
      </View>
      {/* View 7 */}
      <View
        style={StyleSheet.applyWidth(
          { borderColor: theme.colors['Light'], borderTopWidth: 1 },
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(SPIG020800Screen);
