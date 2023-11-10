// This import is required if you are defining react components in this module.
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';

// Add any other imports you need here. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section.
import { View } from 'react-native';
// Define and export your components as named exports here.

// You can use components exported from this file within a Custom Code component as
// <CustomCode.MyExampleComponent />
const fill = 'rgb(120, 50, 120)';
const data = [5, 3, 4, 4, 4, 2, 1];

export const BarChartComp = () => (
  <View style={{ height: 200, padding: 20 }}>
    <BarChart
      style={{ height: 200 }}
      data={data}
      svg={{ fill }}
      contentInset={{ top: 30, bottom: 30 }}
    >
      <Grid />
    </BarChart>
    <XAxis
      style={{ marginHorizontal: -10 }}
      data={data}
      formatLabel={(value, index) => index + 1}
      contentInset={{ left: 10, right: 10 }}
      svg={{ fontSize: 14, fill: 'black' }}
    />
  </View>
);
