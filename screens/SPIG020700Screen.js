import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SPIG020700Api from '../apis/SPIG020700Api.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const SPIG020700Screen = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ScrollView
        bounces={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={false}
        style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
      >
        <SPIG020700Api.FetchQueryGET>
          {({ loading, error, data, refetchQuery }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <>
                {/* tittle */}
                <View
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['tittleView'],
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['tittleText'],
                        { fontFamily: 'System', fontWeight: '700' }
                      ),
                      dimensions.width
                    )}
                  >
                    {'組織管理\n'}
                    {null}
                  </Text>
                </View>
                {/* top */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      alignSelf: 'auto',
                      height: 160,
                      justifyContent: 'flex-start',
                      paddingTop: 10,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={Images.V247783f84de6ca81a2aa5ec586941611fR}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ImageStyles(theme)['Image'],
                        { borderRadius: 90, height: 70, width: 70 }
                      ),
                      dimensions.width
                    )}
                  />
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          fontFamily: 'System',
                          fontSize: 16,
                          fontWeight: '700',
                          marginBottom: 3,
                          marginTop: 13,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {fetchData?.postName}
                  </Text>
                  {/* Text 2 */}
                  <Text
                    accessible={true}
                    allowFontScaling={true}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'],
                        {
                          color: theme.colors['TextComment'],
                          fontFamily: 'System',
                          fontWeight: '700',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {fetchData?.name}
                    {'  '}
                    {fetchData?.postCode}
                  </Text>
                </View>
                {/* body */}
                <View>
                  {/* block1 */}
                  <View>
                    {/* tittle_b1 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors['TittleBG'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'flex-start',
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Medium']}
                        name={'Feather/pie-chart'}
                        size={16}
                        style={StyleSheet.applyWidth(
                          { marginLeft: 23, marginRight: 6 },
                          dimensions.width
                        )}
                      />
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontFamily: 'System',
                              fontSize: 16,
                              fontWeight: '700',
                              letterSpacing: 4,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'受注経験者 比率'}
                      </Text>
                    </View>

                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'flex-start',
                          alignItems: 'center',
                          alignSelf: 'flex-start',
                          borderColor: 'rgba(0, 0, 0, 0)',
                          flexDirection: 'row',
                          height: 232,
                          justifyContent: 'space-evenly',
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* left */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'stretch',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            height: 200,
                            justifyContent: 'center',
                            width: '45%',
                          },
                          dimensions.width
                        )}
                      >
                        <WebView
                          cacheEnabled={true}
                          javaScriptEnabled={true}
                          showsHorizontalScrollIndicator={false}
                          showsVerticalScrollIndicator={false}
                          source={{
                            html: `<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/highcharts@5.0.6/highcharts.min.js"></script>
<style>
body{
    width:180px;
    margin:0 auto;
    overflow: hidden;
}
 div.graph_area {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
}
div.graph_area span.title_text {
    display: inline-block;
    text-align: center;
    width: 100%;
    font-size: 27px;
    font-weight: 600;
}
div.graph_area span.title_text span.cap {
    display: block;
    font-size: 14px;
}
.mei {
    color: #000000;
    font-size: 16px;
}
</style>
    </head>
    <body>
        <div id="keikensha_graph" class="graph_area"></div>
<script>
var charts = Highcharts.chart("keikensha_graph", {
        chart: {
            plotBackgroundColor: "transparent",
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: "transparent",
            borderColor: "transparent",
            height: 190,
        },
        credits: {
            enabled: false,
        },
        title: {
            text: '<span class="title_text"><span class="cap">全営業部員</span>${
              fetchData?.charts1Data && fetchData?.charts1Data[0]
            }<span class="mei">名</span></span>',
            floating: true,
            useHTML: true,
            y: 76,
            x: 10,
        },
        subtitle: {
            text: undefined,
        },
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                },
            }
        },
        series: [{
            type: "pie",
            innerSize: "75%",
            size: "100%",
            center: [65, 65],
            data: [${fetchData?.charts1}],
            colors: ["#49A3B7", "#cccccc"],
        }]

    });
</script>

</body>
</html>`,
                          }}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.WebViewStyles(theme)['HTML View 2'],
                              {
                                alignSelf: 'auto',
                                borderWidth: 0,
                                height: '100%',
                                width: '100%',
                              }
                            ),
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* right */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            height: '100%',
                            justifyContent: 'center',
                            paddingLeft: 21,
                            paddingRight: 21,
                            width: '55%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { width: 110 },
                            dimensions.width
                          )}
                        >
                          <View>
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: 'rgb(61, 60, 60)',
                                    fontFamily: 'System',
                                    fontSize: 16,
                                    fontWeight: '700',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'受注経験者'}
                            </Text>
                          </View>
                          {/* View 2 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'flex-end',
                                alignSelf: 'flex-end',
                                flexDirection: 'row',
                              },
                              dimensions.width
                            )}
                          >
                            {/* Text 2 */}
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text 2'],
                                  {
                                    alignSelf: 'auto',
                                    color: theme.colors['Secondary'],
                                    fontFamily: 'System',
                                    fontSize: 26,
                                    fontWeight: '700',
                                    letterSpacing: 5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {(fetchData?.charts1Data).slice(1, 2)}
                            </Text>
                            {/* Text 3 */}
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: 'rgb(61, 60, 60)',
                                    fontFamily: 'System',
                                    fontWeight: '700',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'名'}
                            </Text>
                          </View>
                        </View>
                        <Divider
                          color={theme.colors['Divider']}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.DividerStyles(theme)['Divider'],
                              { height: 1.5, marginBottom: 8, marginTop: 5 }
                            ),
                            dimensions.width
                          )}
                        />
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            { width: 110 },
                            dimensions.width
                          )}
                        >
                          <View>
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: 'rgb(61, 60, 60)',
                                    fontFamily: 'System',
                                    fontSize: 16,
                                    fontWeight: '700',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'受注未経験者'}
                            </Text>
                          </View>
                          {/* View 2 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'baseline',
                                alignSelf: 'flex-end',
                                flexDirection: 'row',
                              },
                              dimensions.width
                            )}
                          >
                            {/* Text 2 */}
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text 2'],
                                  {
                                    color: theme.colors['Strong'],
                                    fontFamily: 'System',
                                    fontSize: 26,
                                    fontWeight: '700',
                                    letterSpacing: 5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {(fetchData?.charts1Data).slice(2, 3)}
                            </Text>
                            {/* Text 3 */}
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: 'rgb(61, 60, 60)',
                                    fontFamily: 'System',
                                    fontWeight: '700',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'名'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* block2 */}
                  <View>
                    {/* tittle_b2 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors['TittleBG'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'flex-start',
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Medium']}
                        name={'Feather/pie-chart'}
                        size={16}
                        style={StyleSheet.applyWidth(
                          { marginLeft: 23, marginRight: 6 },
                          dimensions.width
                        )}
                      />
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontFamily: 'System',
                              fontSize: 16,
                              fontWeight: '700',
                              letterSpacing: 4,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'未受注者 期間別 比率'}
                      </Text>
                    </View>

                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'flex-start',
                          alignItems: 'center',
                          alignSelf: 'flex-start',
                          flexDirection: 'row',
                          height: 232,
                          justifyContent: 'space-evenly',
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      {/* left */}
                      <View
                        style={StyleSheet.applyWidth(
                          { alignItems: 'stretch', height: 200, width: '45%' },
                          dimensions.width
                        )}
                      >
                        <WebView
                          cacheEnabled={true}
                          javaScriptEnabled={true}
                          showsHorizontalScrollIndicator={false}
                          showsVerticalScrollIndicator={false}
                          source={{
                            html: `<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/highcharts@5.0.6/highcharts.min.js"></script>
<style>
body{
    width: 180px;
    overflow: hidden;
    margin: 0 auto;
}
 div.graph_area {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
}
div.graph_area span.title_text {
    display: inline-block;
    text-align: center;
    width: 100%;
    font-size: 27px;
    font-weight: 600;
    color: #B1E7D6;
}
div.graph_area span.title_text span.cap {
    display: block;
    font-size: 14px;
}
.mei {
    color: #000000;
    font-size: 16px;
}
</style>
    </head>
    <body>
        <div id="mikeikensha_graph" class="graph_area"></div>
<script>
var charts = Highcharts.chart("mikeikensha_graph", {
        chart: {
            plotBackgroundColor: "transparent",
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: "transparent",
            borderColor: "transparent",
            height: 190
        },
        credits: {
            enabled: false,
        },
        title: {
            text: '<span class="title_text green"><span class="cap">18ヵ月未満</span>${
              fetchData?.charts2Data && fetchData?.charts2Data[0]
            }<span class="mei">名</span></span>',
            floating: true,
            useHTML: true,
            y: 76,
            x: 10,
        },
        subtitle: {
            text: undefined,
        },
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: false,
                },
            }
        },
        series: [{
            type: "pie",
            innerSize: "75%",
            size: "100%",
            center: [65, 65],
            data: [${fetchData?.charts2}],
            colors: ["#B1E7D6", "#F7B116", "#F60F31", "#000000"],
        }]

    });
</script>

</body>
</html>`,
                          }}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.WebViewStyles(theme)['HTML View'],
                              { borderWidth: 0, height: '100%', width: '100%' }
                            ),
                            dimensions.width
                          )}
                        />
                      </View>
                      {/* right */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'flex-start',
                            height: '100%',
                            justifyContent: 'center',
                            paddingLeft: 21,
                            paddingRight: 21,
                            width: '55%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              flexDirection: 'row',
                              justifyContent: 'space-around',
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Mi01 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignContent: 'flex-end',
                                alignItems: 'flex-end',
                                height: 100,
                                width: 45,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  alignSelf: 'center',
                                  flexDirection: 'column',
                                  height: '70%',
                                  justifyContent: 'flex-end',
                                  width: '100%',
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
                                      alignSelf: 'stretch',
                                      color: theme.colors['F7B116'],
                                      fontFamily: 'System',
                                      fontSize: 16,
                                      fontWeight: '700',
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'未受\n注\nSS\n'}
                              </Text>
                            </View>
                            {/* View 2 */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'flex-end',
                                  alignSelf: 'flex-start',
                                  flexDirection: 'row',
                                  height: '30%',
                                  justifyContent: 'center',
                                  width: '100%',
                                },
                                dimensions.width
                              )}
                            >
                              {/* Text 2 */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 2'],
                                    {
                                      color: theme.colors['F7B116'],
                                      fontFamily: 'System',
                                      fontSize: 26,
                                      fontWeight: '700',
                                      letterSpacing: 5,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {(fetchData?.charts2Data).slice(1, 2)}
                              </Text>
                              {/* Text 3 */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      color: 'rgb(61, 60, 60)',
                                      fontFamily: 'System',
                                      fontWeight: '700',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'名'}
                              </Text>
                            </View>
                          </View>
                          {/* Mi01 3 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignContent: 'flex-end',
                                alignItems: 'flex-end',
                                height: 100,
                                width: 45,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  alignSelf: 'center',
                                  flexDirection: 'column',
                                  height: '70%',
                                  justifyContent: 'flex-end',
                                  width: '100%',
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
                                      alignSelf: 'stretch',
                                      color: theme.colors['Custom Color_3'],
                                      fontFamily: 'System',
                                      fontSize: 16,
                                      fontWeight: '700',
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'未受\n注\nSSS\n'}
                              </Text>
                            </View>
                            {/* View 2 */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'flex-end',
                                  alignSelf: 'flex-start',
                                  flexDirection: 'row',
                                  height: '30%',
                                  justifyContent: 'center',
                                  width: '100%',
                                },
                                dimensions.width
                              )}
                            >
                              {/* Text 2 */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 2'],
                                    {
                                      color: theme.colors['Custom Color_3'],
                                      fontFamily: 'System',
                                      fontSize: 26,
                                      fontWeight: '700',
                                      letterSpacing: 5,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {(fetchData?.charts2Data).slice(2, 3)}
                              </Text>
                              {/* Text 3 */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      color: 'rgb(61, 60, 60)',
                                      fontFamily: 'System',
                                      fontWeight: '700',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'名'}
                              </Text>
                            </View>
                          </View>
                          {/* Mi01 2 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignContent: 'flex-end',
                                alignItems: 'flex-end',
                                height: 100,
                                width: 45,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  alignSelf: 'center',
                                  flexDirection: 'column',
                                  height: '70%',
                                  justifyContent: 'flex-end',
                                  width: '100%',
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
                                      alignSelf: 'stretch',
                                      color: theme.colors['Strong'],
                                      fontFamily: 'System',
                                      fontSize: 16,
                                      fontWeight: '700',
                                      textAlign: 'center',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'未受\n注\nSSSS\n'}
                              </Text>
                            </View>
                            {/* View 2 */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'flex-end',
                                  alignSelf: 'flex-start',
                                  flexDirection: 'row',
                                  height: '30%',
                                  justifyContent: 'center',
                                  width: '100%',
                                },
                                dimensions.width
                              )}
                            >
                              {/* Text 2 */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text 2'],
                                    {
                                      color: theme.colors['Strong'],
                                      fontFamily: 'System',
                                      fontSize: 26,
                                      fontWeight: '700',
                                      letterSpacing: 5,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {(fetchData?.charts2Data).slice(3, 4)}
                              </Text>
                              {/* Text 3 */}
                              <Text
                                accessible={true}
                                allowFontScaling={true}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text'],
                                    {
                                      color: 'rgb(61, 60, 60)',
                                      fontFamily: 'System',
                                      fontWeight: '700',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'名'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <Divider
                          color={theme.colors['Divider']}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.DividerStyles(theme)['Divider'],
                              {
                                height: 1.5,
                                marginBottom: 8,
                                marginTop: 5,
                                width: '100%',
                              }
                            ),
                            dimensions.width
                          )}
                        />
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            { width: '100%' },
                            dimensions.width
                          )}
                        >
                          <View>
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: 'rgb(61, 60, 60)',
                                    fontFamily: 'System',
                                    fontSize: 16,
                                    fontWeight: '700',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'未受注期間平均'}
                            </Text>
                          </View>
                          {/* View 2 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                                height: 35,
                                justifyContent: 'flex-start',
                                marginLeft: 15,
                                width: 85,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Text 2 */}
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text 2'],
                                  {
                                    color: theme.colors['Medium'],
                                    fontFamily: 'System',
                                    fontSize: 26,
                                    fontWeight: '700',
                                    letterSpacing: 5,
                                    textAlign: 'right',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {(fetchData?.charts2Data).slice(4, 5)}
                              {'\n'}
                            </Text>
                            {/* Text 3 */}
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    alignSelf: 'flex-end',
                                    color: 'rgb(61, 60, 60)',
                                    fontFamily: 'System',
                                    fontSize: 15,
                                    fontWeight: '700',
                                    textAlign: 'left',
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'ヵ月'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* block3 */}
                  <View>
                    {/* tittle_b3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors['TittleBG'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'flex-start',
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Medium']}
                        name={'MaterialCommunityIcons/chart-line'}
                        size={16}
                        style={StyleSheet.applyWidth(
                          { marginLeft: 23, marginRight: 6 },
                          dimensions.width
                        )}
                      />
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontFamily: 'System',
                              fontSize: 16,
                              fontWeight: '700',
                              letterSpacing: 4,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'45期営業部員数 推移'}
                      </Text>
                    </View>

                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'flex-start',
                          alignItems: 'center',
                          alignSelf: 'flex-start',
                          flexDirection: 'row',
                          height: 290,
                          justifyContent: 'space-evenly',
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      <WebView
                        cacheEnabled={true}
                        javaScriptEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        source={{
                          html: `<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.jsdelivr.net/npm/highcharts@5.0.6/highcharts.min.js"></script>
<style>
    .buinsu {
    font-size: 13px;
    font-weight: normal;
    color: #B3B3B3;
}
span.buinsu.two {
    position: absolute;
    top: 35px;
    left: 5px;
    margin: auto;
    color: #4B4B4B;
}
.preson-count {
    font-size: 17px;
    font-weight: normal;
    color: #4B4B4B;
    font-weight: bold;
}
span.nyusya.one {
    left: -8px;
}
span.one {
    font-size: 12px;
    position: absolute;
}
span.nyusya {
    color: #3AA6BE;
}
.taisya, .nyusya {
    display: block;
    font-size: 15px;
}
span.two {
    margin-top: 18px;
}
span.taisya.one {
    left: -2px;
}
span.taisya {
    color: #C0C0C0;
}
</style>
    </head>
    <body>
<div id="eigyouubuin_graph" ></div>
<script>
var charts = Highcharts.chart('eigyouubuin_graph', {
        chart: {
            height: 250,
            showAxes: true,
            spacing: [37, 0, 0, 0],
            plotBackgroundColor: 'transparent',
            backgroundColor: "transparent",
            borderColor: "transparent"
        },
        credits: {
            enabled: false
        },
        title: {
            text: undefined
        },
        subtitle: {
            text: undefined
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: ['5月', '6月', '7月', '8月', '9月', '10月'],
            crosshair: true,
            tickWidth: 0,
            labels: {
                y: 18,
                style: {
                    color: '#CACACA',
                    fontSize: '14px',
                }
            },
            lineColor: '#DFDFDF',
            visible: true
        },
        yAxis: [{
                min: 0,
                tickInterval: 10,
                opposite: true,
                gridLineWidth: 0,
                lineWidth: 1,
                visible: false
            },
            {
                min: 0,
                tickInterval: 5,
                gridLineWidth: 0,
                lineWidth: 1,
                visible: true,
                lineColor: '#DFDFDF',
                labels: {
                    enabled: false,
                    reserveSpace: false
                },
                title: {
                    text: ' '
                }
            }
        ],
        tooltip: {
            backgroundColor: 'rgba(247,247,247,1)',
            shared: true,
            useHTML: true,
            formatter: function() {
                var table = '<table>';
                var pointsArr = this.points;
                for (var i = 0; i < pointsArr.length; i++) {
                    var data = this.points[i].y;
                    var text = data + '名';
                    table += '<tr><td style="font-weight: normal;color:' + this.points[i].series.color + ';text-align:right">' +
                        this.points[i].series.name + ':&nbsp;</td>';
                    table += '<td style="font-weight: normal;text-align:right;color:' + this.points[i].series.color + ';">' +
                        text + '</td></tr>';
                }
                table += '</table>';
                return table;
            }
        },
        plotOptions: {
            column: {
                groupPadding : 0.85,
                borderWidth: 0,
                pointWidth: 20,
                dataLabels: {
                    enabled: true,
                    useHTML:true,
                    formatter: function() {
                        if (this.series.name == "入社") {
                            if (this.point === this.series.data[0]) {
                                return '<span class="nyusya one"> '+this.series.name+'</span>' +
                                       '<span class="nyusya two">' + this.point.y + '</span>';
                            } else {
                                return '<span class="nyusya">' + this.point.y + '</span>';
                            }
                        }
                         else if (this.series.name == "退社") {
                            if (this.point === this.series.data[0]) {
                                return '<span class="taisya one"> '+this.series.name+'</span>' +
                                       '<span class="taisya two">' + this.point.y + '</span>';
                            } else {
                                return '<span class="taisya">' + this.point.y + '</span>';
                            }
                        }
                    }
                }
            },
            line: {
                color: '#4B4B4B',
                dataLabels: {
                    enabled: true,
                    useHTML:true,
                    formatter: function() {
                        // if last point
                        if (this.point === this.series.data[this.series.data.length - 1]) {
                            return '<span class="preson-count" >' + this.point.y + '</span>' + 
                                   '<span style="font-size:13px;"> 名</span>';
                        } else if (this.point === this.series.data[0]) {
                            return '<span class="buinsu"> '+this.point.y+'</span>' +
                                   '<span class="buinsu two">' + this.series.name + '</span>';
                        } else {
                            return '<span class="buinsu">' + this.point.y +'</span>';
                        }
                    }
                }
            }
        },
        series: [{
                type: 'column',
                name: '退社',
                color: '#C0C0C0',
                data: [${fetchData?.chartsBar1}],
                showInLegend: true,
                shadow: false,
                minPointLength: 0
            },
            {
                type: 'column',
                name: '入社',
                color: '#3AA6BE',
                data: [${fetchData?.chartsBar2}],
                showInLegend: true,
                shadow: false,
                minPointLength: 0
            },
            {
                type: 'line',
                name: '営業部員数',
                data: [${(fetchData?.chartsLine).slice(0, 5)}, {
                    y: ${(fetchData?.chartsLine).slice(5, 6)},
                    marker: {
                        fillColor: '#4B4B4B',
                    }
                }],
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: '#4B4B4B'
                },
                minPointLength: 0
            }
        ],
    });
</script>
</body>
</html>`,
                        }}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.WebViewStyles(theme)['HTML View'],
                            { borderWidth: 0, height: '100%', width: '100%' }
                          ),
                          dimensions.width
                        )}
                      />
                    </View>
                  </View>
                  {/* block4 */}
                  <View>
                    {/* tittle_b3 */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: theme.colors['TittleBG'],
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'flex-start',
                          width: '100%',
                        },
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Medium']}
                        name={'Ionicons/ios-hammer-outline'}
                        size={16}
                        style={StyleSheet.applyWidth(
                          { marginLeft: 23, marginRight: 6 },
                          dimensions.width
                        )}
                      />
                      <Text
                        accessible={true}
                        allowFontScaling={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            {
                              fontFamily: 'System',
                              fontSize: 16,
                              fontWeight: '700',
                              letterSpacing: 4,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'決 裁'}
                      </Text>
                    </View>

                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignContent: 'flex-start',
                          alignItems: 'flex-start',
                          alignSelf: 'flex-start',
                          flexDirection: 'column',
                          height: 232,
                          justifyContent: 'flex-start',
                          width: '100%',
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
                          {
                            borderColor: theme.colors['Secondary'],
                            height: '33%',
                            width: '100%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignContent: 'space-around',
                              alignItems: 'center',
                              alignSelf: 'auto',
                              borderColor: 'rgb(219, 219, 219)',
                              borderWidth: 1,
                              flexDirection: 'row',
                              height: '100%',
                              justifyContent: 'flex-start',
                              paddingLeft: 25,
                              paddingRight: 5,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={theme.colors['Secondary']}
                            name={'AntDesign/user'}
                            size={36}
                          />
                          {/* mid */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'flex-start',
                                height: '100%',
                                justifyContent: 'center',
                                marginLeft: 23,
                                width: '67.3%',
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
                                    fontWeight: '700',
                                    marginBottom: 2.5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'営業権利決裁'}
                            </Text>
                            {/* Text 2 */}
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: theme.colors['TextPlaceholder'],
                                    fontSize: 10,
                                    marginTop: 2.5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'部下が申請した営業権利を決裁します。'}
                            </Text>
                          </View>
                          {/* right */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignContent: 'flex-end',
                                alignItems: 'center',
                                alignSelf: 'center',
                                flexDirection: 'row',
                                height: '100%',
                                justifyContent: 'center',
                                width: '16.7%',
                              },
                              dimensions.width
                            )}
                          >
                            <>
                              {!(
                                parseInt(
                                  (fetchData?.kessai).slice(0, 1),
                                  10
                                ) !== 0
                              ) ? null : (
                                <Circle
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.CircleStyles(theme)[
                                        'Circle'
                                      ],
                                      {
                                        alignContent: 'center',
                                        backgroundColor:
                                          theme.colors['Custom Color_3'],
                                        justifyContent: 'flex-start',
                                        marginRight: 13,
                                        width: 20,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  <Text
                                    accessible={true}
                                    allowFontScaling={true}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text'],
                                        { color: theme.colors['Background'] }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {(fetchData?.kessai).slice(0, 1)}
                                  </Text>
                                </Circle>
                              )}
                            </>
                            <Icon
                              color={theme.colors['Medium']}
                              name={'Entypo/chevron-right'}
                              size={24}
                            />
                          </View>
                        </View>
                      </Touchable>
                      {/* Touchable 2 */}
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
                          {
                            borderColor: theme.colors['Secondary'],
                            height: '33%',
                            width: '100%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignContent: 'space-around',
                              alignItems: 'center',
                              alignSelf: 'auto',
                              borderColor: 'rgb(219, 219, 219)',
                              borderWidth: 1,
                              flexDirection: 'row',
                              height: '100%',
                              justifyContent: 'flex-start',
                              paddingLeft: 25,
                              paddingRight: 5,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={theme.colors['Secondary']}
                            name={'AntDesign/addusergroup'}
                            size={36}
                          />
                          {/* mid */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'flex-start',
                                height: '100%',
                                justifyContent: 'center',
                                marginLeft: 23,
                                width: '67.3%',
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
                                    fontWeight: '700',
                                    marginBottom: 2.5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'バッティング調停'}
                            </Text>
                            {/* Text 2 */}
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: theme.colors['TextPlaceholder'],
                                    fontSize: 10,
                                    marginTop: 2.5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'追客権限を与える営業部員を調停します。'}
                            </Text>
                          </View>
                          {/* right */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignContent: 'flex-end',
                                alignItems: 'center',
                                alignSelf: 'center',
                                flexDirection: 'row',
                                height: '100%',
                                justifyContent: 'flex-end',
                                width: '16.7%',
                              },
                              dimensions.width
                            )}
                          >
                            <>
                              {!(
                                parseInt(
                                  (fetchData?.kessai).slice(1, 2),
                                  10
                                ) !== 0
                              ) ? null : (
                                <Circle
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.CircleStyles(theme)[
                                        'Circle'
                                      ],
                                      {
                                        alignContent: 'center',
                                        backgroundColor:
                                          theme.colors['Custom Color_3'],
                                        justifyContent: 'flex-start',
                                        marginRight: 13,
                                        width: 20,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  <Text
                                    accessible={true}
                                    allowFontScaling={true}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text'],
                                        { color: theme.colors['Background'] }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {(fetchData?.kessai).slice(1, 2)}
                                  </Text>
                                </Circle>
                              )}
                            </>
                            <Icon
                              color={theme.colors['Medium']}
                              name={'Entypo/chevron-right'}
                              size={24}
                            />
                          </View>
                        </View>
                      </Touchable>
                      {/* Touchable 3 */}
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
                          {
                            borderColor: theme.colors['Secondary'],
                            height: '33%',
                            width: '100%',
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignContent: 'space-around',
                              alignItems: 'center',
                              alignSelf: 'auto',
                              borderColor: 'rgb(219, 219, 219)',
                              borderWidth: 1,
                              flexDirection: 'row',
                              height: '100%',
                              justifyContent: 'flex-start',
                              paddingLeft: 25,
                              paddingRight: 5,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          <Icon
                            color={theme.colors['Secondary']}
                            name={'MaterialCommunityIcons/note-text-outline'}
                            size={36}
                          />
                          {/* mid */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'flex-start',
                                height: '100%',
                                justifyContent: 'center',
                                marginLeft: 23,
                                width: '67.3%',
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
                                    fontWeight: '700',
                                    marginBottom: 2.5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'配置図決裁'}
                            </Text>
                            {/* Text 2 */}
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'],
                                  {
                                    color: theme.colors['TextPlaceholder'],
                                    fontSize: 10,
                                    marginTop: 2.5,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'配置図の作成申請・承認申請を決裁します。'}
                            </Text>
                          </View>
                          {/* right */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignContent: 'flex-end',
                                alignItems: 'center',
                                alignSelf: 'center',
                                flexDirection: 'row',
                                height: '100%',
                                justifyContent: 'flex-end',
                                width: '16.7%',
                              },
                              dimensions.width
                            )}
                          >
                            <>
                              {!(
                                parseInt(
                                  (fetchData?.kessai).slice(2, 3),
                                  10
                                ) !== 0
                              ) ? null : (
                                <Circle
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.CircleStyles(theme)[
                                        'Circle'
                                      ],
                                      {
                                        alignContent: 'center',
                                        backgroundColor:
                                          theme.colors['Custom Color_3'],
                                        justifyContent: 'flex-start',
                                        marginRight: 13,
                                        width: 20,
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  <Text
                                    accessible={true}
                                    allowFontScaling={true}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text'],
                                        { color: theme.colors['Background'] }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {(fetchData?.kessai).slice(2, 3)}
                                  </Text>
                                </Circle>
                              )}
                            </>
                            <Icon
                              color={theme.colors['Medium']}
                              name={'Entypo/chevron-right'}
                              size={24}
                            />
                          </View>
                        </View>
                      </Touchable>
                    </View>
                  </View>
                </View>
              </>
            );
          }}
        </SPIG020700Api.FetchQueryGET>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(SPIG020700Screen);
