import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SPIG030000Api from '../apis/SPIG030000Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { HStack, VStack, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const Block111 = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const dateToMonth = () => {
    let year = '';
    let month = '';
    const newDay = thisDay;
    year = newDay.getFullYear();
    month = (newDay.getMonth() + 1).toString().padStart(2, '0');
    return year + '年' + month + '月';
  };

  const setTodayText = async dateFlg => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    let year = '';
    let month = '';
    let day = '';
    let weekday = '';
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    const newDay = new Date();
    if (dateFlg) {
      setThisDay(newDay);
      year = newDay.getFullYear();
      month = (newDay.getMonth() + 1).toString().padStart(2, '0');
      day = newDay.getDate().toString().padStart(2, '0');
      weekday = weekDays[newDay.getDay()];
    } else {
      year = thisDay.getFullYear();
      month = (thisDay.getMonth() + 1).toString().padStart(2, '0');
      day = thisDay.getDate().toString().padStart(2, '0');
      weekday = weekDays[thisDay.getDay()];
    }
    setToday(year + '/' + month + '/' + day + ' (' + weekday + ')');
  };

  const alertEndDialog = isStartFlg => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    Alert.alert(
      '',
      '業務を終了しますか？',
      [
        {
          text: 'OK',
          onPress: () => {
            setIsStartFlg(true);
            console.log('ok onPress');
          },
        },
        { text: 'キャンセル', onPress: () => console.log('cancel onPress') },
      ],
      { cancelable: false }
    );
  };

  const clacDate = clacType => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    let newDate = thisDay;
    console.log('1:' + newDate);
    if (clacType === 1) {
      newDate.setDate(newDate.getDate() + 1);
    } else if (clacType === 2) {
      newDate.setDate(newDate.getDate() - 1);
    } else if (clacType === 3) {
      console.log(newDate.getDate() - 7 + '上周');
      if (newDate.getDate() - 7 < 1) {
        newDate.setMonth(newDate.getMonth() - 1);
        newDate.setDate(newDate.getDate() - 7);
      } else {
        newDate.setDate(newDate.getDate() - 7);
      }
    } else if (clacType === 4) {
      const tempDate = thisDay;
      year = tempDate.getFullYear();
      month = tempDate.getMonth() + 1;
      let days = new Date(year, month, 0).getDate();
      console.log(newDate.getDate() + 7 + '下周' + month + ':' + days);
      if (newDate.getDate() + 7 > days) {
        console.log(newDate.getDate() + 7 + '下周' + month + ':' + days);
        newDate.setDate(newDate.getDate() + 7);
        newDate.setMonth(newDate.getMonth() + 1);
        console.log(newDate.getDate() + 7 + '下周' + month + ':' + days);
      } else {
        newDate.setDate(newDate.getDate() + 7);
      }
    }
    console.log('2:' + newDate);
    setThisDay(newDate);
  };

  const weekTopDate = (Variables, initFlg) => {
    let year = '';
    let month = '';
    let day = '';
    let weekday = '';
    const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
    const daysArr = new Array();
    if (initFlg != null) {
      console.log(thisDay + '1');
      const newDay = thisDay;
      year = newDay.getFullYear();
      month = (newDay.getMonth() + 1).toString().padStart(2, '0');
      day = newDay.getDate().toString();
      const arrDay = new Date(newDay.getDate());
      let index = 0;
      weekday = weekDays[newDay.getDay()];
      for (let i = 0; i < weekDays.length; i++) {
        if (weekday == weekDays[i]) {
          index = i;
        }
      }
      console.log(index);
      for (let j = 0; j < weekDays.length; j++) {
        console.log(newDay);
        console.log(j - index + '[' + newDay.getDate() + (j - index) + ']');
        arrDay.setDate(newDay.getDate() + (j - index));
        daysArr.push(arrDay.getDate().toString() + '(' + weekDays[j] + ')');
      }
      console.log(daysArr);
      setDay(daysArr);
    } else {
      const newDay = new Date();
      console.log(newDay + '2');
      year = newDay.getFullYear();
      month = (newDay.getMonth() + 1).toString().padStart(2, '0');
      day = newDay.getDate().toString();
      let index = 0;
      weekday = weekDays[newDay.getDay()];
      for (let i = 0; i < weekDays.length; i++) {
        if (weekday == weekDays[i]) {
          index = i;
        }
      }
      for (let j = 0; j < weekDays.length; j++) {
        newDay.setDate(newDay.getDate() + (j - index));
        daysArr.push(newDay.getDate().toString() + '(' + weekDays[j] + ')');
      }
    }
  };

  const addConten = (
    Variables,
    setGlobalVariableValue,
    workType,
    workContent
  ) => {
    const element = Variables.elements;
    const content = { workType: workType, workConten: workContent };
    if (element[0].workType == undefined) {
      setGlobalVariableValue({ key: 'elements', value: [content] });
    } else {
      setGlobalVariableValue({ key: 'elements', value: [...element, content] });
    }

    console.log(element);

    console.log('contentData1' + contentData);
    setContentData([content]);
    console.log('contentData2' + contentData);
  };

  const [isTodayFlg, setIsTodayFlg] = React.useState(false);

  return (
    <>
      {!(isTodayFlg === Constants['IsTrue']) ? null : (
        <ScrollView
          bounces={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          <SPIG030000Api.FetchSelectWorkTimeGET>
            {({ loading, error, data, refetchSelectWorkTime }) => {
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
                    { borderColor: 'rgb(221, 221, 221)', borderTopWidth: 1 },
                    dimensions.width
                  )}
                  data={fetchData}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  listKey={'6nZkcqmM'}
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
              );
            }}
          </SPIG030000Api.FetchSelectWorkTimeGET>
        </ScrollView>
      )}
    </>
  );
};

export default withTheme(Block111);
