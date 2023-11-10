import * as React from 'react';
import StepIndicator from 'react-native-step-indicator';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Button,
  Platform,
  ScrollView,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
export function PositionedTimeline() {
  return (
    <StepIndicator
      stepCount={7}
      customStyles={customStyles}
      currentPosition={2}
      direction="vertical"
      labels={labels}
      renderStepIndicator={renderStepIndicator}
      renderLabel={renderLabel}
      styel={styles.stepIndicator}
    />
  );
}
const renderStepIndicator = params => (
  <MaterialIcons {...getStepIndicatorIconConfig(params)} />
);
//label
const renderLabel = params => (
  <View>{getrenderLabel(params)}</View>
  //<Text style={
  //styles.stepLabel
  //}>{params.label}</Text>
);
const labels = [
  '業務開始',
  '土地調査写真',
  '営業メモ',
  '営業メモ',
  '大山 花子 様（再訪5回目）',
  '岡村次郎 様（再訪3回目）',
  '岡村次郎',
];

function getrenderLabel(params) {
  switch (params.position) {
    case 0: {
      return (
        <View style={{ float: 'left', width: 280 }}>
          <Text style={styles.timeLine}>9:00</Text>
          <Text style={styles.stepLabelsmall}>業務開始</Text>
        </View>
      );
    }
    case 1: {
      return (
        <View style={{ width: 280 }}>
          <Text style={styles.timeLineTop1}>10:30</Text>

          <View>
            <View style={{ widht: 162 }}>
              <Text style={styles.stepLabel}>土地調査写真</Text>
              <Text style={styles.stepLabelsmall}>名古屋市西区更生通1丁目</Text>
            </View>
            <View
              style={{
                width: 60,
                position: 'absolute',
                paddingLeft: 160,
                marginTop: -2,
              }}
            >
              <Image
                style={styles.imageStyle1}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
              <Image
                style={styles.imageStyle2}
                source={{
                  uri: 'data:image/png;base64,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',
                }}
              />
            </View>
          </View>
        </View>
      );
    }
    case 2: {
      return (
        <View style={{ width: 280 }}>
          <Text style={styles.timeLineTop1}>11:00</Text>
          <Text style={styles.stepLabel}>営業メモ</Text>
          <Text style={styles.stepLabelsmall}>
            どんぐり公園前に空地。概算300坪
          </Text>
        </View>
      );
    }
    case 3: {
      return (
        <View style={{ width: 280 }}>
          <Text style={styles.timeLineTop2}>12:00</Text>
          <Text style={styles.stepLabel}>初訪7件、発堀1件</Text>
          <Text style={styles.stepLabelsmall}>名古屋市西区更生通 2 丁目</Text>
          <Text style={styles.stepLabelsmall}>名古屋市西区菊井1丁目</Text>
        </View>
      );
    }
    case 4: {
      return (
        <View style={{ width: 280 }}>
          <Text style={styles.timeLine}>12:30</Text>
          <Text style={styles.stepLabelsmall}>昼休憩</Text>
        </View>
      );
    }
    case 5: {
      return (
        <View style={{ width: 280 }}>
          <Text style={styles.timeLineTop3}>15:30</Text>
          <Text style={styles.stepLabel}>
            大山 花子 様<Text style={styles.stepLabelsmall}>（再訪5回目）</Text>
          </Text>
          <View
            style={{
              width: 81,
              height: 32,
              flex: 1,
              borderWidth: 1,
              borderColor: '#00fff7',
              borderRadius: 5,
              color: 'black',
            }}
          >
            <Button color="blue" title="配置獲得" />
          </View>
          <Text style={styles.stepLabelsmall}>
            配置図の作成についてご説明し、承諾を得た。
          </Text>
          <Text style={styles.stepLabelsmall}>
            大学病院、看護学校関係者の入居を見込んで、女
          </Text>
          <Text style={styles.stepLabelsmall}>性</Text>
          <Text style={styles.stepLabelsmall}>
            専用も検討したいとのこと。次回アボ調整中。
          </Text>
        </View>
      );
    }
    case 6: {
      return (
        <View style={{ width: 280 }}>
          <Text style={styles.timeLine}>16:30</Text>
          <Text style={styles.stepLabel}>
            岡村 次郎 樣<Text style={styles.stepLabelsmall}>（再訪3回目）</Text>
          </Text>
        </View>
      );
    }
    default: {
      break;
    }
  }
  return null;
}
function getStepIndicatorIconConfig(params) {
  var iconConfig = {
    name: 'feed',
    color: params.stepStatus === 'finished' ? '#ffffff' : '#fe7013',
    size: 18,
  };
  switch (params.position) {
    case 0: {
      iconConfig.name = 'data-usage';
      break;
    }
    case 1: {
      iconConfig.name = 'add-a-photo';
      break;
    }
    case 2: {
      iconConfig.name = 'create';
      break;
    }
    case 3: {
      iconConfig.name = 'payment';
      break;
    }
    case 4: {
      iconConfig.name = 'data-usage';
      break;
    }
    case 5: {
      iconConfig.name = 'account-circle';
      break;
    }
    case 6: {
      iconConfig.name = 'account-circle';
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
}
const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 18,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013',
  setpText: {
    textAlign: 'left',
    fontWeight: 'Blob',
    marginTop: 100,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 100,
    marginTop: 50,
  },
  page: {
    flex: 1,
    justifyContent: 'left',
  },
  stepLabel: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '900',
    color: 'black',
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'left',
    fontWeight: '900',
    color: '#4aae4f',
  },
  stepLabelsmall: {
    fontSize: 12,
    color: '#100f1177',
    fontWeight: '900',
    textAlign: 'left',
  },
  imageStyle1: {
    width: 55,
    height: 48,
    marginLeft: 45,
  },
  imageStyle2: {
    width: 55,
    height: 48,
    position: 'absolute',
    marginLeft: 145,
  },
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    color: 'white',
    width: 120,
    height: 30,
  },
  ladelwidth: {
    width: 300,
  },
  timeLine: {
    position: 'absolute',
    marginLeft: -95,
    fontSize: 17,
    fontWeight: 600,
  },
  timeLineTop1: {
    position: 'absolute',
    marginLeft: -95,
    fontSize: 17,
    marginTop: 10,
    fontWeight: 600,
  },
  timeLineTop2: {
    position: 'absolute',
    marginLeft: -95,
    fontSize: 17,
    marginTop: 17,
    fontWeight: 600,
  },
  timeLineTop3: {
    position: 'absolute',
    marginLeft: -95,
    fontSize: 17,
    marginTop: Platform.OS === 'ios' ? 30 : 55,
    fontWeight: 600,
  },
});
