import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SPIG020500Api from '../apis/SPIG020500Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Picker, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const ProvinceBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const [cityID, setCityID] = React.useState('');
  const [prefecture, setPrefecture] = React.useState('');

  return (
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
                  await SPIG020500Api.selectPrefecturesGET(Constants)
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
        {({ loading, error, data, refetchSelectPrefectures }) => {
          const fetch2Data = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
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
                      await SPIG020500Api.selectCitisGET(Constants, {
                        prefectureId: newPickerValue,
                      })
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
                { marginLeft: 30, paddingBottom: 0, paddingTop: 0, width: 180 },
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
  );
};

export default withTheme(ProvinceBlock);
