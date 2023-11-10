import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Icon,
  Pressable,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  Alert,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const SPIG30200Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

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

  const dateToMonth = () => {
    let year = '';
    let month = '';
    const newDay = thisDay;
    year = newDay.getFullYear();
    month = (newDay.getMonth() + 1).toString().padStart(2, '0');
    return year + '年' + month + '月';
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

  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        await setTodayText(undefined);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);
  const [contentData, setContentData] = React.useState([]);
  const [day, setDay] = React.useState([]);
  const [isDayFlg, setIsDayFlg] = React.useState(Constants['IsTrue']);
  const [isMonthFlg, setIsMonthFlg] = React.useState(Constants['IsFalse']);
  const [isStartFlg, setIsStartFlg] = React.useState(Constants['IsTrue']);
  const [isTodayFlg, setIsTodayFlg] = React.useState(Constants['IsTrue']);
  const [isWeekFlg, setIsWeekFlg] = React.useState(Constants['IsFalse']);
  const [thisDay, setThisDay] = React.useState(new Date());
  const [today, setToday] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* tittle */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', height: 32, justifyContent: 'flex-end' },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          allowFontScaling={true}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['tittleText'], {
              fontFamily: 'System',
              fontSize: 16,
              fontWeight: '700',
            }),
            dimensions.width
          )}
        >
          {'スケジュール'}
        </Text>
      </View>
      {/* Scroll View Month */}
      <>
        {!Constants['IsTrue'] ? null : (
          <ScrollView
            bounces={true}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
          >
            {/* top */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  height: 45,
                  justifyContent: 'space-between',
                },
                dimensions.width
              )}
            >
              {/* leftButtonArea */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignContent: 'space-around',
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingLeft: 40,
                    width: '66%',
                  },
                  dimensions.width
                )}
              >
                {/* leftButton */}
                <Pressable
                  onPress={() => {
                    try {
                      setIsTodayFlg(Constants['IsFalse']);
                      clacDate(3);
                      weekTopDate(Variables, Constants['IsFalse']);
                      if (undefined) {
                      } else {
                      }
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderColor: theme.colors['Medium'],
                      height: 25,
                      width: 40,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextPlaceholder'],
                        borderRadius: 5,
                        borderWidth: 1,
                        height: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors['TextPlaceholder']}
                      name={'Entypo/chevron-left'}
                      size={24}
                    />
                  </View>
                </Pressable>
                {/* midButton */}
                <Pressable
                  style={StyleSheet.applyWidth(
                    {
                      borderColor: theme.colors['Medium'],
                      height: 25,
                      width: 80,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          fontFamily: 'System',
                          fontWeight: '700',
                          marginTop: 5,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {dateToMonth(thisDay)}
                  </Text>
                </Pressable>
                {/* rightButton */}
                <Pressable
                  onPress={() => {
                    try {
                      setIsTodayFlg(Constants['IsFalse']);
                      clacDate(4);
                      weekTopDate(Variables, Constants['IsFalse']);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      borderColor: theme.colors['Medium'],
                      height: 25,
                      width: 40,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextPlaceholder'],
                        borderRadius: 5,
                        borderWidth: 1,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors['TextPlaceholder']}
                      name={'Entypo/chevron-right'}
                      size={24}
                    />
                  </View>
                </Pressable>
              </View>
              {/* rightButtonArea */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-end',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: '34%',
                  },
                  dimensions.width
                )}
              >
                {/* leftButton */}
                <Pressable
                  style={StyleSheet.applyWidth(
                    {
                      borderColor: theme.colors['Medium'],
                      height: 40,
                      width: 40,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderBottomLeftRadius: 5,
                        borderBottomWidth: 1,
                        borderColor: theme.colors['TextPlaceholder'],
                        borderLeftWidth: 1,
                        borderTopLeftRadius: 5,
                        borderTopWidth: 1,
                        height: '100%',
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TextStyles(theme)['Text'],
                        dimensions.width
                      )}
                    >
                      {'月'}
                    </Text>
                  </View>
                </Pressable>
                {/* midButton */}
                <Pressable
                  style={StyleSheet.applyWidth(
                    {
                      borderColor: theme.colors['Medium'],
                      height: 40,
                      width: 40,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextPlaceholder'],
                        borderWidth: 1,
                        height: '100%',
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TextStyles(theme)['Text'],
                        dimensions.width
                      )}
                    >
                      {'週'}
                    </Text>
                  </View>
                </Pressable>
                {/* rightButton */}
                <Pressable
                  style={StyleSheet.applyWidth(
                    {
                      borderColor: theme.colors['Medium'],
                      height: 40,
                      width: 40,
                    },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderBottomRightRadius: 5,
                        borderBottomWidth: 1,
                        borderColor: theme.colors['TextPlaceholder'],
                        borderRightWidth: 1,
                        borderTopRightRadius: 5,
                        borderTopWidth: 1,
                        height: '100%',
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      allowFontScaling={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        GlobalStyles.TextStyles(theme)['Text'],
                        dimensions.width
                      )}
                    >
                      {'日'}
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
            {/* body */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  maxHeight: 650,
                  paddingTop: 5,
                },
                dimensions.width
              )}
            >
              {/* leftArea */}
              <View
                style={StyleSheet.applyWidth(
                  { paddingLeft: 5, width: '100%' },
                  dimensions.width
                )}
              >
                {/* top */}
                <View>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        borderColor: 'rgb(228, 228, 228)',
                        borderWidth: 1,
                        height: 80,
                      },
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
                            width: '12.5%',
                          },
                          dimensions.width
                        )}
                      />
                      {/* View Sun */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {day.slice(0, 1)}
                        </Text>
                      </View>
                      {/* View Mon */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Tue */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Web */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Thur */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Fri */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Sat */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {day.slice(6, 7)}
                        </Text>
                      </View>
                    </View>
                    {/* View EndDate */}
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
                            width: '12.5%',
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
                          {'終日'}
                        </Text>
                      </View>
                      {/* View Sun */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Mon */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Tue */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Web */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Thur */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Fri */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                      {/* View Sat */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '12.5%',
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
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {null}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Spacer bottom={2} left={8} right={8} top={2} />
              </View>
            </View>
          </ScrollView>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(SPIG30200Screen);
