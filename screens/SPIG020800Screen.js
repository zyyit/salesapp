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
  ScreenContainer,
  Surface,
  SwipeableItem,
  withTheme,
} from '@draftbit/ui';
import { H1 } from '@expo/html-elements';
import * as Linking from 'expo-linking';
import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

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
            borderColor: 'rgb(204, 204, 204)',
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
          {'営業権利決裁'}
        </Text>
      </View>
      {/* View 3 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              height: 60,
              marginTop: 10,
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
                  flexDirection: 'row',
                  height: 50,
                  marginLeft: 15,
                  marginTop: 4,
                  width: 379,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 40, marginTop: 4, width: 40 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${Constants['image']}` }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { borderRadius: 55, height: 40, width: 40 }
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
                    height: 40,
                    justifyContent: 'space-between',
                    marginLeft: 10,
                    marginTop: 4,
                    width: 200,
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
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontSize: 13,
                    }),
                    dimensions.width
                  )}
                >
                  {'名古屋市中区栄１丁目２－３'}
                </Text>
              </View>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Light'],
                  flexDirection: 'row',
                  height: 58,
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
                    height: 58,
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
                    height: 58,
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
      {/* View 7 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              height: 60,
              marginTop: 10,
              width: '135%',
            },
            dimensions.width
          )}
        >
          <SwipeableItem
            closeOnPress={true}
            friction={20}
            leftOpenValue={-0.1}
            rightOpenValue={-135}
            stopLeftSwipe={-135}
            stopRightSwipe={0.001}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SwipeableItemStyles(theme)['Swipeable Item'],
                { flexDirection: 'row', justifyContent: 'space-between' }
              ),
              dimensions.width
            )}
            swipeActivationPercentage={80}
            swipeToClosePercent={50}
            swipeToOpenPercent={10}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  height: 50,
                  marginLeft: 15,
                  marginTop: 4,
                  width: 379,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 40, marginTop: 4, width: 40 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${Constants['image']}` }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { borderRadius: 55, height: 40, width: 40 }
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
                    height: 40,
                    justifyContent: 'space-between',
                    marginLeft: 10,
                    marginTop: 4,
                    width: 200,
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
                  {'田中    誠伸    様'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontSize: 13,
                    }),
                    dimensions.width
                  )}
                >
                  {'名古屋市中区栄２丁目２－１'}
                </Text>
              </View>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Light'],
                  flexDirection: 'row',
                  height: 58,
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
                    height: 58,
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
                    height: 58,
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
      {/* View 8 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              height: 60,
              marginTop: 10,
              width: '135%',
            },
            dimensions.width
          )}
        >
          <SwipeableItem
            closeOnPress={true}
            friction={20}
            leftOpenValue={-0.1}
            rightOpenValue={-135}
            stopLeftSwipe={-135}
            stopRightSwipe={0.001}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SwipeableItemStyles(theme)['Swipeable Item'],
                { flexDirection: 'row', justifyContent: 'space-between' }
              ),
              dimensions.width
            )}
            swipeActivationPercentage={80}
            swipeToClosePercent={50}
            swipeToOpenPercent={10}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  height: 50,
                  marginLeft: 15,
                  marginTop: 4,
                  width: 379,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 40, marginTop: 4, width: 40 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={{ uri: `${Constants['image']}` }}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { borderRadius: 55, height: 40, width: 40 }
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
                    height: 40,
                    justifyContent: 'space-between',
                    marginLeft: 10,
                    marginTop: 4,
                    width: 200,
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
                  {'長島    川    様'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                      fontSize: 13,
                    }),
                    dimensions.width
                  )}
                >
                  {'名古屋市中区栄３丁目２－２'}
                </Text>
              </View>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Light'],
                  flexDirection: 'row',
                  height: 58,
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
                    height: 58,
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
                    height: 58,
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
                  <Icon name={'Ionicons/people'} size={24} />
                </Pressable>
              </View>
            </View>
          </SwipeableItem>
        </View>
      </View>
      {/* View 4 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              height: 60,
              marginTop: 10,
              width: '125%',
            },
            dimensions.width
          )}
        >
          <SwipeableItem
            closeOnPress={true}
            friction={20}
            leftOpenValue={-0.1}
            rightOpenValue={-97}
            stopLeftSwipe={-97}
            stopRightSwipe={0.001}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SwipeableItemStyles(theme)['Swipeable Item'],
                { flexDirection: 'row', justifyContent: 'space-between' }
              ),
              dimensions.width
            )}
            swipeActivationPercentage={80}
            swipeToClosePercent={50}
            swipeToOpenPercent={10}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  height: 50,
                  marginLeft: 15,
                  marginTop: 4,
                  width: 379,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 40, marginTop: 4, width: 40 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.User}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { height: 40, width: 40 }
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
                    height: 40,
                    justifyContent: 'space-between',
                    marginLeft: 10,
                    marginTop: 4,
                    width: 200,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'],
                    dimensions.width
                  )}
                >
                  {'伊藤    忠    様'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'],
                    dimensions.width
                  )}
                >
                  {'名古屋市中区栄３丁目２－２'}
                </Text>
              </View>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  alignSelf: 'center',
                  backgroundColor: theme.colors['GetFit Orange'],
                  flexDirection: 'row',
                  height: 58,
                  justifyContent: 'center',
                  width: 98,
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
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'stretch',
                      alignItems: 'center',
                      alignSelf: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Icon name={'Entypo/grid'} size={24} />
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { color: theme.colors['Strong'], fontSize: 15 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'拨 号'}
                  </Text>
                </View>
              </Pressable>
            </View>
          </SwipeableItem>
        </View>
      </View>
      {/* View 5 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderBottomWidth: 1,
              borderTopWidth: 1,
              height: 80,
              marginTop: 10,
              width: '125%',
            },
            dimensions.width
          )}
        >
          <SwipeableItem
            closeOnPress={true}
            friction={20}
            leftOpenValue={-0.1}
            rightOpenValue={-97}
            stopLeftSwipe={-97}
            stopRightSwipe={0.001}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.SwipeableItemStyles(theme)['Swipeable Item'],
                { flexDirection: 'row', justifyContent: 'space-between' }
              ),
              dimensions.width
            )}
            swipeActivationPercentage={80}
            swipeToClosePercent={50}
            swipeToOpenPercent={10}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  height: 80,
                  marginLeft: 15,
                  marginTop: 4,
                  width: 379,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { height: 40, marginTop: 4, width: 40 },
                  dimensions.width
                )}
              >
                <Image
                  resizeMode={'cover'}
                  source={Images.User}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'],
                      { height: 40, width: 40 }
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
                    height: 40,
                    justifyContent: 'space-between',
                    marginLeft: 10,
                    marginTop: 4,
                    width: 200,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'],
                    dimensions.width
                  )}
                >
                  {'吉川    明    様'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'],
                    dimensions.width
                  )}
                >
                  {'Tel:15820226666'}
                </Text>
                {/* Text 3 */}
                <Text
                  accessible={true}
                  allowFontScaling={true}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'],
                    dimensions.width
                  )}
                >
                  {'名古屋市中区栄３丁目２－２'}
                </Text>
              </View>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  alignSelf: 'center',
                  backgroundColor: theme.colors['GetFit Orange'],
                  flexDirection: 'row',
                  height: 58,
                  justifyContent: 'center',
                  width: 98,
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
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignContent: 'stretch',
                      alignItems: 'center',
                      alignSelf: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Icon name={'Entypo/grid'} size={24} />
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        { color: theme.colors['Strong'], fontSize: 15 }
                      ),
                      dimensions.width
                    )}
                  >
                    {'拨 号'}
                  </Text>
                </View>
              </Pressable>
            </View>
          </SwipeableItem>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SPIG020800Screen);
