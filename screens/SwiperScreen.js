import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import {
  Circle,
  Pressable,
  ScreenContainer,
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const SwiperScreen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [pinInputValue, setPinInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['TittleBG'] },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'flex-start',
            alignSelf: 'flex-start',
            backgroundColor: 'rgb(207, 204, 204)',
            borderColor: 'rgb(124, 121, 121)',
            borderWidth: 1,
            flex: 1,
            flexDirection: 'row',
            height: 30,
            justifyContent: 'flex-start',
            marginTop: 50,
            maxHeight: 25,
            minWidth: 390,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              color: 'rgb(134, 124, 124)',
              fontSize: 15,
              marginLeft: 20,
            }),
            dimensions.width
          )}
        >
          {'セールスステップ'}
        </Text>
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
          dimensions.width
        )}
      >
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Circle
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.CircleStyles(theme)['Circle'], {
                backgroundColor: theme.colors['Custom #d3536d'],
                flexDirection: 'row',
                height: 18,
                width: 18,
              }),
              dimensions.width
            )}
          >
            <Pressable
              onPress={() => {
                const handler = async () => {
                  try {
                    await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: 'rgb(255, 255, 255)',
                  }),
                  dimensions.width
                )}
              >
                {'1'}
              </Text>
            </Pressable>
          </Circle>
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['Custom #d3536d'],
                height: 5,
                width: 50,
              },
              dimensions.width
            )}
          />
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Circle
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.CircleStyles(theme)['Circle'], {
                backgroundColor: theme.colors['ShopAppBlue'],
                flexDirection: 'row',
                height: 17,
                width: 17,
              }),
              dimensions.width
            )}
          >
            {/* Pressable 2 */}
            <Pressable
              onPress={() => {
                const handler = async () => {
                  try {
                    await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: 'rgb(250, 248, 248)',
                  }),
                  dimensions.width
                )}
              >
                {'2'}
              </Text>
            </Pressable>
          </Circle>
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['ShopAppBlue'],
                height: 5,
                width: 60,
              },
              dimensions.width
            )}
          />
        </View>
        {/* View 4 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Circle
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.CircleStyles(theme)['Circle'], {
                backgroundColor: 'rgb(45, 51, 96)',
                flexDirection: 'row',
                height: 17,
                width: 17,
              }),
              dimensions.width
            )}
          >
            {/* Pressable 3 */}
            <Pressable
              onPress={() => {
                const handler = async () => {
                  try {
                    await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: 'rgb(244, 242, 242)',
                  }),
                  dimensions.width
                )}
              >
                {'3'}
              </Text>
            </Pressable>
          </Circle>
          <View
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgb(45, 51, 96)', height: 5, width: 50 },
              dimensions.width
            )}
          />
        </View>
        {/* View 5 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Circle
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.CircleStyles(theme)['Circle'], {
                backgroundColor: 'rgb(21, 222, 95)',
                flexDirection: 'row',
                height: 17,
                width: 17,
              }),
              dimensions.width
            )}
          >
            {/* Pressable 4 */}
            <Pressable
              onPress={() => {
                const handler = async () => {
                  try {
                    await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: 'rgb(255, 255, 255)',
                  }),
                  dimensions.width
                )}
              >
                {'4'}
              </Text>
            </Pressable>
          </Circle>
          <View
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgb(21, 222, 95)', height: 5, width: 50 },
              dimensions.width
            )}
          />
        </View>
        {/* View 6 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Circle
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.CircleStyles(theme)['Circle'], {
                backgroundColor: 'rgb(161, 161, 161)',
                flexDirection: 'row',
                height: 17,
                width: 17,
              }),
              dimensions.width
            )}
          >
            {/* Pressable 5 */}
            <Pressable
              onPress={() => {
                const handler = async () => {
                  try {
                    await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: 'rgb(255, 255, 255)',
                  }),
                  dimensions.width
                )}
              >
                {'5'}
              </Text>
            </Pressable>
          </Circle>
          <View
            style={StyleSheet.applyWidth(
              { backgroundColor: 'rgb(161, 161, 161)', height: 5, width: 50 },
              dimensions.width
            )}
          />
        </View>
        {/* View 7 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Circle
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.CircleStyles(theme)['Circle'], {
                backgroundColor: 'rgb(161, 161, 161)',
                flexDirection: 'row',
                height: 5,
                width: 17,
              }),
              dimensions.width
            )}
          >
            {/* Pressable 6 */}
            <Pressable
              onPress={() => {
                const handler = async () => {
                  try {
                    await openImagePickerUtil({
                      mediaTypes: 'All',
                      allowsEditing: false,
                      quality: 0.2,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: 'rgb(253, 253, 253)',
                  }),
                  dimensions.width
                )}
              >
                {'6'}
              </Text>
            </Pressable>
          </Circle>
        </View>
      </View>
      {/* View 3 */}
      <View>
        <Swiper
          dotActiveColor={theme.colors.primary}
          dotColor={theme.colors.light}
          dotsTouchable={true}
          style={StyleSheet.applyWidth(
            GlobalStyles.SwiperStyles(theme)['Swiper 2'],
            dimensions.width
          )}
        >
          <SwiperItem>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'],
                dimensions.width
              )}
            >
              {'1'}
            </Text>
          </SwiperItem>
          {/* Swiper Item 2 */}
          <SwiperItem>
            <Text
              accessible={true}
              allowFontScaling={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'],
                dimensions.width
              )}
            >
              {'Double click me to edit 👀'}
            </Text>
          </SwiperItem>
          {/* Swiper Item 3 */}
          <SwiperItem />
        </Swiper>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SwiperScreen);
