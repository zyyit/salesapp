import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SPIG030000Api from '../apis/SPIG030000Api.js';
import * as SPIG030200Api from '../apis/SPIG030200Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as calendar from '../custom-files/calendar';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  HStack,
  Icon,
  Pressable,
  ScreenContainer,
  Spacer,
  VStack,
  withTheme,
} from '@draftbit/ui';
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

const SPIG030000Screen = props => {
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
      newDate.setDate(newDate.getDate() + 7);
    } else if (clacType === 4) {
      newDate.setDate(newDate.getDate() - 7);
    }
    // else if(clacType === 3){
    //     console.log(newDate.getDate()-7 + "上周");
    //     if(newDate.getDate()-7 < 1){
    //         newDate.setMonth(newDate.getMonth() - 1);
    //         newDate.setDate(newDate.getDate() - 7);
    //     }else{
    //         newDate.setDate(newDate.getDate() - 7);
    //     }
    // } else if(clacType === 4){
    //     const tempDate = thisDay;
    //     year = tempDate.getFullYear();
    //     month = tempDate.getMonth() + 1;
    //     let days = new Date(year,month,0).getDate();
    //     console.log(newDate.getDate()+7 + "下周" + month + ":" + days);
    //     if(newDate.getDate() + 7 > days){
    //         console.log(newDate.getDate()+7 + "下周" + month + ":" + days);
    //         newDate.setDate(newDate.getDate() + 7);
    //         newDate.setMonth(newDate.getMonth() + 1);
    //         console.log(newDate.getDate()+7 + "下周" + month + ":" + days);
    //     }else{
    //         newDate.setDate(newDate.getDate() + 7);
    //     }
    // }
    console.log('2:' + newDate);
    setThisDay(newDate);
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
  const [switchDayFlg, setSwitchDayFlg] = React.useState(Constants['IsTrue']);
  const [switchMonthFlg, setSwitchMonthFlg] = React.useState(
    Constants['IsFalse']
  );
  const [switchWeekFlg, setSwitchWeekFlg] = React.useState(
    Constants['IsFalse']
  );
  const [thisDay, setThisDay] = React.useState(new Date());
  const [thisMonth, setThisMonth] = React.useState(dateToMonth(thisDay));
  const [today, setToday] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* Scroll View Day */}
      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
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
                const handler = async () => {
                  try {
                    setIsTodayFlg(Constants['IsFalse']);
                    if (switchDayFlg) {
                      clacDate(parseInt(2, 10));
                      await setTodayText(Constants['IsFalse']);
                    } else {
                      if (switchWeekFlg) {
                        clacDate(parseInt(4, 10));
                      } else {
                      }
                    }
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { borderColor: theme.colors['Medium'], height: 25, width: 40 },
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
            {/* midButtonView */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', width: 100 },
                dimensions.width
              )}
            >
              {/* midButton */}
              <>
                {!(switchDayFlg === Constants['IsTrue']) ? null : (
                  <Pressable
                    onPress={() => {
                      const handler = async () => {
                        try {
                          setIsTodayFlg(Constants['IsTrue']);
                          await setTodayText(Constants['IsTrue']);
                        } catch (err) {
                          console.error(err);
                        }
                      };
                      handler();
                    }}
                    style={StyleSheet.applyWidth(
                      {
                        borderColor: theme.colors['Medium'],
                        height: 25,
                        width: 60,
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
                        {'今日'}
                      </Text>
                    </View>
                  </Pressable>
                )}
              </>
              {/* monthDate */}
              <>
                {!(switchDayFlg === Constants['IsFalse']) ? null : (
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
                    {thisMonth}
                  </Text>
                )}
              </>
            </View>
            {/* rightButton */}
            <Pressable
              onPress={() => {
                const handler = async () => {
                  try {
                    setIsTodayFlg(Constants['IsFalse']);
                    if (switchDayFlg) {
                      clacDate(parseInt(1, 10));
                      await setTodayText(Constants['IsFalse']);
                    } else {
                      if (switchWeekFlg) {
                        clacDate(parseInt(3, 10));
                      } else {
                      }
                    }
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              style={StyleSheet.applyWidth(
                { borderColor: theme.colors['Medium'], height: 25, width: 40 },
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
              onPress={() => {
                try {
                  setSwitchDayFlg(Constants['IsFalse']);
                  setSwitchWeekFlg(Constants['IsFalse']);
                  setSwitchMonthFlg(Constants['IsTrue']);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { borderColor: theme.colors['Medium'], height: 40, width: 40 },
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
              onPress={() => {
                try {
                  setSwitchDayFlg(Constants['IsFalse']);
                  setSwitchMonthFlg(Constants['IsFalse']);
                  setSwitchWeekFlg(Constants['IsTrue']);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { borderColor: theme.colors['Medium'], height: 40, width: 40 },
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
              onPress={() => {
                try {
                  setSwitchWeekFlg(Constants['IsFalse']);
                  setSwitchMonthFlg(Constants['IsFalse']);
                  setSwitchDayFlg(Constants['IsTrue']);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                { borderColor: theme.colors['Medium'], height: 40, width: 40 },
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
        {/* body day */}
        <>
          {!(switchDayFlg === Constants['IsTrue']) ? null : (
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
                  { paddingLeft: 5, width: '64%' },
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
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 17,
                                fontWeight: '700',
                                letterSpacing: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {today}
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
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                fontFamily: 'System',
                                fontSize: 16,
                                fontWeight: '400',
                              }
                            ),
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
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                    >
                      <Utils.CustomCodeErrorBoundary>
                        <calendar.calendarHour />
                      </Utils.CustomCodeErrorBoundary>
                    </ScrollView>
                  )}
                </>
              </View>
              {/* rightArea */}
              <View
                style={StyleSheet.applyWidth(
                  { width: '36%' },
                  dimensions.width
                )}
              >
                <VStack
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.VStackStyles(theme)['V Stack'],
                      {
                        alignItems: 'center',
                        paddingBottom: 5,
                        paddingLeft: 5,
                        paddingRight: 5,
                        paddingTop: 5,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  <>
                    {!(isStartFlg === Constants['IsTrue']) ? null : (
                      <Button
                        disabled={isTodayFlg === Constants['IsFalse']}
                        onPress={() => {
                          try {
                            setIsStartFlg(Constants['IsFalse']);
                            addConten(
                              Variables,
                              setGlobalVariableValue,
                              0,
                              '業務開始'
                            );
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: 'rgb(170, 222, 242)',
                            borderColor: theme.colors['TextComment'],
                            borderRadius: 5,
                            borderWidth: 1,
                            color: theme.colors['Strong'],
                            fontFamily: 'System',
                            fontWeight: '400',
                            height: 25,
                            marginBottom: 5,
                            textAlign: 'center',
                            width: 116,
                          },
                          dimensions.width
                        )}
                        title={'業務開始'}
                      />
                    )}
                  </>
                  {/* Button 2 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    onPress={() => {
                      try {
                        addConten(
                          Variables,
                          setGlobalVariableValue,
                          1,
                          '訪問活動'
                        );
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'訪問活動'}
                  />
                  {/* Button 3 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    onPress={() => {
                      try {
                        addConten(
                          Variables,
                          setGlobalVariableValue,
                          1,
                          '市場調査'
                        );
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'市場調査'}
                  />
                  {/* Button 4 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'資料作成'}
                  />
                  {/* Button 5 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'スキルアップ'}
                  />
                  {/* Button 6 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'案件進捗会議'}
                  />
                  {/* Button 7 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'打合せ'}
                  />
                  {/* Button 8 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'同行支援'}
                  />
                  {/* Button 9 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'着工業務'}
                  />
                  {/* Button 10 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'移動'}
                  />
                  {/* Button 11 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'休憩'}
                  />
                  {/* Button 12 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'介護'}
                  />
                  {/* Button 13 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'育児'}
                  />
                  {/* Button 14 */}
                  <Button
                    disabled={isTodayFlg === Constants['IsFalse']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: 'rgb(239, 239, 239)',
                        borderColor: theme.colors['TextComment'],
                        borderRadius: 5,
                        borderWidth: 1,
                        color: theme.colors['Strong'],
                        fontFamily: 'System',
                        fontWeight: '400',
                        height: 25,
                        marginBottom: 5,
                        textAlign: 'center',
                        width: 116,
                      },
                      dimensions.width
                    )}
                    title={'その他'}
                  />
                  {/* Button 15 */}
                  <>
                    {!(isStartFlg === Constants['IsFalse']) ? null : (
                      <Button
                        disabled={isTodayFlg === Constants['IsFalse']}
                        onPress={() => {
                          try {
                            alertEndDialog(undefined);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor: 'rgb(255, 178, 178)',
                            borderColor: theme.colors['TextComment'],
                            borderRadius: 5,
                            borderWidth: 1,
                            color: theme.colors['Strong'],
                            fontFamily: 'System',
                            fontWeight: '400',
                            height: 25,
                            marginBottom: 5,
                            textAlign: 'center',
                            width: 116,
                          },
                          dimensions.width
                        )}
                        title={'業務終了'}
                      />
                    )}
                  </>
                </VStack>
              </View>
            </View>
          )}
        </>
        {/* body week */}
        <>
          {!(switchWeekFlg === Constants['IsTrue']) ? null : (
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
              {/* mainArea */}
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
                        height: 60,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                                fontSize: 14,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
                            borderStyle: 'solid',
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
                                fontSize: 14,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                                fontSize: 14,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                                fontSize: 14,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                                fontSize: 14,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                                fontSize: 14,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                                fontSize: 14,
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
                    {/* View EndDate */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: 'rgb(228, 228, 228)',
                          flexDirection: 'row',
                          height: '65%',
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
                        {/* TextEndDate */}
                        <Text
                          accessible={true}
                          allowFontScaling={true}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                alignSelf: 'center',
                                color: 'rgb(0, 102, 204)',
                                fontFamily: 'System',
                                fontSize: 15,
                                fontWeight: '700',
                                letterSpacing: 1,
                                marginTop: 10,
                                textAlign: 'auto',
                              }
                            ),
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                            backgroundColor: theme.colors['Custom Color_24'],
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
                            borderStyle: 'solid',
                            justifyContent: 'center',
                            opacity: 1,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                            borderColor: theme.colors['Custom Color_23'],
                            borderRightWidth: 1,
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
                <ScrollView
                  bounces={true}
                  contentContainerStyle={StyleSheet.applyWidth(
                    {
                      alignSelf: 'auto',
                      borderColor: theme.colors['Custom Color_23'],
                      borderTopWidth: 1,
                      position: 'relative',
                    },
                    dimensions.width
                  )}
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
                          data={fetchData}
                          keyExtractor={listData =>
                            listData?.id ||
                            listData?.uuid ||
                            JSON.stringify(listData)
                          }
                          listKey={'SC2oCINJ'}
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
                                      borderColor:
                                        theme.colors['Custom Color_23'],
                                      borderLeftWidth: 1,
                                      borderRightWidth: 1,
                                      height: 60,
                                      opacity: 1,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                <HStack
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.HStackStyles(theme)[
                                        'H Stack'
                                      ],
                                      {
                                        borderBottomWidth: 1,
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '50%',
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
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
                                          GlobalStyles.TextStyles(theme)[
                                            'Text'
                                          ],
                                          { alignSelf: 'center', marginTop: 6 }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.timeH}
                                      {'時\n'}
                                    </Text>
                                  </View>
                                  {/* View 1 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 2 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        opacity: 0.3,
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 3 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 4 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 5 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 6 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 7 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                </HStack>
                                {/* H Stack 2 */}
                                <HStack
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.HStackStyles(theme)[
                                        'H Stack'
                                      ],
                                      {
                                        borderBottomWidth: 1,
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '50%',
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
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
                                          GlobalStyles.TextStyles(theme)[
                                            'Text'
                                          ],
                                          { alignSelf: 'center', marginTop: 6 }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {listData?.timeH}
                                      {'時\n'}
                                    </Text>
                                  </View>
                                  {/* View 1 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 2 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        opacity: 0.3,
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 3 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 4 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 5 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 6 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
                                  {/* View 7 */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        borderColor:
                                          theme.colors['Custom Color_23'],
                                        borderRightWidth: 1,
                                        height: '100%',
                                        width: '12.5%',
                                      },
                                      dimensions.width
                                    )}
                                  />
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
                  {/* View Content  1 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors['Custom Color_10'],
                        borderBottomWidth: 1,
                        borderColor: theme.colors['Custom Color_10'],
                        borderLeftWidth: 1,
                        borderRadius: 5,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        height: 60,
                        left: '25%',
                        position: 'absolute',
                        top: '0%',
                        width: '12.5%',
                        zIndex: 1,
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
                            marginTop: 8,
                            textAlign: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'訪問\n活動'}
                    </Text>
                  </View>
                  {/* View Content 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors['Custom Color_11'],
                        borderBottomWidth: 1,
                        borderColor: theme.colors['Custom Color_10'],
                        borderLeftWidth: 1,
                        borderRadius: 5,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        height: 60,
                        left: '25%',
                        marginTop: 10,
                        position: 'absolute',
                        top: '0%',
                        width: '12.5%',
                        zIndex: 2,
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
                            marginTop: 8,
                            textAlign: 'center',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'訪問\n活動'}
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          )}
        </>
        {/* body month */}
        <>
          {!(switchMonthFlg === Constants['IsTrue']) ? null : (
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
              {/* mainArea */}
              <View>
                {/* week */}
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row', marginLeft: 9, marginTop: 5 },
                    dimensions.width
                  )}
                >
                  {/* seven */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        alignSelf: 'auto',
                        borderColor: theme.colors['Custom Color_23'],
                        borderWidth: 1,
                        width: '14%',
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
                          { color: theme.colors['Boder_1'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'日'}
                    </Text>
                  </View>
                  {/* one */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Custom Color_23'],
                        borderWidth: 1,
                        width: '14%',
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
                          { color: theme.colors['Boder_1'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'月'}
                    </Text>
                  </View>
                  {/* two */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Custom Color_23'],
                        borderWidth: 1,
                        width: '14%',
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
                          { color: theme.colors['Boder_1'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'火'}
                    </Text>
                  </View>
                  {/* three */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Custom Color_23'],
                        borderWidth: 1,
                        width: '14%',
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
                          { color: theme.colors['Boder_1'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'水'}
                    </Text>
                  </View>
                  {/* four */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Custom Color_23'],
                        borderWidth: 1,
                        width: '14%',
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
                          { color: theme.colors['Boder_1'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'木'}
                    </Text>
                  </View>
                  {/* five */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Custom Color_23'],
                        borderWidth: 1,
                        width: '14%',
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
                          { color: theme.colors['Boder_1'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'金'}
                    </Text>
                  </View>
                  {/* six */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderColor: theme.colors['Custom Color_23'],
                        borderWidth: 1,
                        width: '14%',
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
                          { color: theme.colors['Boder_1'] }
                        ),
                        dimensions.width
                      )}
                    >
                      {'土'}
                    </Text>
                  </View>
                </View>
                {/* date */}
                <View
                  style={StyleSheet.applyWidth(
                    { marginLeft: 9 },
                    dimensions.width
                  )}
                >
                  <SPIG030200Api.FetchCalendarGET>
                    {({ loading, error, data, refetchCalendar }) => {
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
                            listData?.id ||
                            listData?.uuid ||
                            JSON.stringify(listData)
                          }
                          listKey={'ZpLAILXl'}
                          numColumns={7}
                          onEndReachedThreshold={0.5}
                          renderItem={({ item }) => {
                            const listData = item;
                            return (
                              <View
                                style={StyleSheet.applyWidth(
                                  { height: 50, width: '14%' },
                                  dimensions.width
                                )}
                              >
                                {/* day */}
                                <View>
                                  <Text
                                    accessible={true}
                                    allowFontScaling={true}
                                    style={StyleSheet.applyWidth(
                                      GlobalStyles.TextStyles(theme)['Text'],
                                      dimensions.width
                                    )}
                                  >
                                    {listData?.day}
                                  </Text>
                                </View>
                                {/* View 2 */}
                                <View />
                                {/* View 3 */}
                                <View />
                              </View>
                            );
                          }}
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                        />
                      );
                    }}
                  </SPIG030200Api.FetchCalendarGET>
                </View>
              </View>
            </View>
          )}
        </>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SPIG030000Screen);
