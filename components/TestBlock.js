import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { HStack, Spacer, VStack, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const TestBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const getToday = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    // 创建一个Date对象
    const now = new Date();

    // 获取年、月、日和星期
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    const weekday = weekDays[now.getDay()];
    const text = year + '/' + month + '/' + day + ' (' + weekday + ')';

    return text;
  };

  const [isTodayFlg, setIsTodayFlg] = React.useState(false);

  return (
    <View
      style={StyleSheet.applyWidth(
        { paddingLeft: 5, width: '64%' },
        dimensions.width
      )}
    >
      {/* top */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            { borderColor: 'rgb(228, 228, 228)', borderWidth: 1, height: 80 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: 'rgb(228, 228, 228)',
                flexDirection: 'row',
                height: '35%',
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: 'rgb(228, 228, 228)',
                  borderRightWidth: 1,
                  width: '19%',
                },
                dimensions.width
              )}
            />
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '81%',
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    color: 'rgb(0, 102, 204)',
                    fontFamily: 'System',
                    fontSize: 17,
                    fontWeight: '700',
                    letterSpacing: 1,
                  }),
                  dimensions.width
                )}
              >
                {getToday()}
              </Text>
            </View>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', height: '65%' },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderColor: 'rgb(228, 228, 228)',
                  borderRightWidth: 1,
                  justifyContent: 'center',
                  width: '19%',
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                allowFontScaling={true}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'System',
                    fontSize: 16,
                    fontWeight: '400',
                  }),
                  dimensions.width
                )}
              >
                {'終日'}
              </Text>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['F6F1D6'],
                  justifyContent: 'center',
                  width: '81%',
                },
                dimensions.width
              )}
            />
          </View>
        </View>
      </View>
      <Spacer bottom={2} left={8} right={8} top={2} />
      {/* body */}
      <>
        {!(isTodayFlg === Constants['IsTrue']) ? null : (
          <ScrollView
            bounces={true}
            contentContainerStyle={StyleSheet.applyWidth(
              { maxHeight: 600 },
              dimensions.width
            )}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
          >
            <FlatList
              contentContainerStyle={StyleSheet.applyWidth(
                { borderColor: 'rgb(221, 221, 221)', borderTopWidth: 1 },
                dimensions.width
              )}
              data={[]}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              listKey={'qXYanxqB'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <VStack
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.VStackStyles(theme)['V Stack'],
                        {
                          borderColor: 'rgb(221, 221, 221)',
                          borderLeftWidth: 1,
                          borderRightWidth: 1,
                          height: 100,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    <HStack
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.HStackStyles(theme)['H Stack'],
                          {
                            borderBottomWidth: 1,
                            borderColor: 'rgb(221, 221, 221)',
                            height: '25%',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* left */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignContent: 'center',
                            alignItems: 'flex-end',
                            alignSelf: 'center',
                            borderColor: 'rgb(221, 221, 221)',
                            borderRightWidth: 1,
                            height: '100%',
                            justifyContent: 'center',
                            paddingRight: 8,
                            width: '19%',
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
                              { fontSize: 15 }
                            ),
                            dimensions.width
                          )}
                        >
                          {listData?.timeH}
                          {'時'}
                        </Text>
                      </View>
                      {/* right */}
                      <>
                        {!(
                          (listData?.isWorkTime === Constants['IsTrue'] &&
                            isTodayFlg) === Constants['IsTrue']
                        ) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors['F6F1D6'],
                                height: '100%',
                                width: '81%',
                              },
                              dimensions.width
                            )}
                          />
                        )}
                      </>
                      {/* right 2 */}
                      <>
                        {!(
                          listData?.isWorkTime === Constants['IsFalse']
                        ) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors['EDE9D6'],
                                height: '100%',
                                width: '81%',
                              },
                              dimensions.width
                            )}
                          />
                        )}
                      </>
                    </HStack>
                    {/* H Stack 2 */}
                    <HStack
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.HStackStyles(theme)['H Stack'],
                          {
                            borderBottomWidth: 1,
                            borderColor: 'rgb(221, 221, 221)',
                            height: '25%',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* left */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignContent: 'center',
                            alignItems: 'flex-end',
                            alignSelf: 'center',
                            borderColor: 'rgb(221, 221, 221)',
                            borderRightWidth: 1,
                            height: '100%',
                            justifyContent: 'center',
                            paddingRight: 10,
                            width: '19%',
                          },
                          dimensions.width
                        )}
                      />
                      {/* right */}
                      <>
                        {!(
                          listData?.isWorkTime === Constants['IsTrue']
                        ) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors['F6F1D6'],
                                height: '100%',
                                width: '81%',
                              },
                              dimensions.width
                            )}
                          />
                        )}
                      </>
                      {/* right 2 */}
                      <>
                        {!(
                          listData?.isWorkTime === Constants['IsFalse']
                        ) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors['EDE9D6'],
                                height: '100%',
                                width: '81%',
                              },
                              dimensions.width
                            )}
                          />
                        )}
                      </>
                    </HStack>
                    {/* H Stack 3 */}
                    <HStack
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.HStackStyles(theme)['H Stack'],
                          {
                            borderBottomWidth: 1,
                            borderColor: 'rgb(221, 221, 221)',
                            height: '25%',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* left */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignContent: 'center',
                            alignItems: 'flex-end',
                            alignSelf: 'center',
                            borderColor: 'rgb(221, 221, 221)',
                            borderRightWidth: 1,
                            height: '100%',
                            justifyContent: 'center',
                            paddingRight: 10,
                            width: '19%',
                          },
                          dimensions.width
                        )}
                      />
                      {/* right */}
                      <>
                        {!(
                          listData?.isWorkTime === Constants['IsTrue']
                        ) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors['F6F1D6'],
                                height: '100%',
                                width: '81%',
                              },
                              dimensions.width
                            )}
                          />
                        )}
                      </>
                      {/* right 2 */}
                      <>
                        {!(
                          listData?.isWorkTime === Constants['IsFalse']
                        ) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors['EDE9D6'],
                                height: '100%',
                                width: '81%',
                              },
                              dimensions.width
                            )}
                          />
                        )}
                      </>
                    </HStack>
                    {/* H Stack 4 */}
                    <HStack
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.HStackStyles(theme)['H Stack'],
                          {
                            borderBottomWidth: 1,
                            borderColor: 'rgb(221, 221, 221)',
                            height: '25%',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {/* left */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignContent: 'center',
                            alignItems: 'flex-end',
                            alignSelf: 'center',
                            borderColor: 'rgb(221, 221, 221)',
                            borderRightWidth: 1,
                            height: '100%',
                            justifyContent: 'center',
                            paddingRight: 10,
                            width: '19%',
                          },
                          dimensions.width
                        )}
                      />
                      {/* right */}
                      <>
                        {!(
                          listData?.isWorkTime === Constants['IsTrue']
                        ) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors['F6F1D6'],
                                height: '100%',
                                width: '81%',
                              },
                              dimensions.width
                            )}
                          />
                        )}
                      </>
                      {/* right 2 */}
                      <>
                        {!(
                          listData?.isWorkTime === Constants['IsFalse']
                        ) ? null : (
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                backgroundColor: theme.colors['EDE9D6'],
                                height: '100%',
                                width: '81%',
                              },
                              dimensions.width
                            )}
                          />
                        )}
                      </>
                    </HStack>
                  </VStack>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          </ScrollView>
        )}
      </>
    </View>
  );
};

export default withTheme(TestBlock);
