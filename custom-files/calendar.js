// This import is required if you are defining react components in this module.
import React, { useState, useEffect } from 'react';

// Add any other imports you need here. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section.
import { Text, View, StyleSheet } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

// Define and export your components as named exports here.

// You can use components exported from this file within a Custom Code component as
// <calendar.MyExampleComponent />
const startHour = 7;
const endHour = 22;
const workStartHour = 9;
const workEndHour = 18;
export const calendarHour = () => {
  const [time, setTime] = useState(getTop);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTop);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const renderWork = () => {
    const works = [];
    works.push(
      <View style={styles.currentRow}>
        <View style={[styles.currentMark, { top: time }]}>
          <Svg width={6} height={10}>
            <Polygon points="0,0 5,6 0,10" fill="red" />
          </Svg>
        </View>
        <View>
          <View style={styles.line} />
        </View>
      </View>
    );
    return works;
  };
  return (
    <View>
      {renderHour()}
      {renderWork()}
    </View>
  );
};

const renderHour = () => {
  const hours = [];
  let columns = 4;

  for (let i = startHour; i <= endHour; i++) {
    if (i == endHour) {
      columns = 1;
    }
    for (let j = 0; j < columns; j++) {
      hours.push(
        <View key={i} style={styles.row}>
          <View
            style={[
              styles.leftEle,
              columns == 1 ? styles.bottomBorder : styles.otherBorder,
            ]}
          >
            {j == 0 && <Text style={styles.hourText}>{i}時</Text>}
          </View>
          <View
            style={[
              styles.rightEle,
              columns == 1 ? styles.bottomBorder : styles.otherBorder,
              i < workStartHour || i > workEndHour
                ? styles.rightColorNo
                : styles.rightColor,
            ]}
          ></View>
        </View>
      );
    }
  }
  return hours;
};

const getTop = () => {
  const localTime = new Date();
  const hours = parseInt(localTime.getHours);
  const minutes = parseInt(localTime.getMinutes);
  const top = ((hours - startHour) * 60 + minutes) * 1.6;
  console.log(hours);
  return top;
};

const styles = StyleSheet.create({
  row: {
    height: 24,
    flexDirection: 'row',
  },
  currentRow: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
  leftEle: {
    width: '19%',
    flexBasis: '19%',
    backgroundColor: '#F5F5F5',
    height: 24,
    borderRightWidth: 0,
    alignItems: 'center',
  },
  hourText: {
    padding: '0 4px',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    fontSize: 16,
  },
  rightEle: {
    width: '81%',
    flexBasis: '81%',
    height: 24,
  },
  rightColor: {
    backgroundColor: '#F6F1D6',
  },
  rightColorNo: {
    backgroundColor: '#EDE9D6',
  },
  bottomBorder: {
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderStyle: 'solid',
  },
  otherBorder: {
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderBottomWidth: 0,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'red',
    position: 'absolute',
    left: '19%',
  },
  currentMark: {
    width: '19%',
    flexBasis: '19%',
    alignItems: 'left',
    position: 'absolute',
    left: 0,
    marginTop: -5,
  },
});
