
import React from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'

export default class Chart extends React.PureComponent {
  

  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: 'Twitter',
        value: '55'
      },
      labelWidth: 0
    }
  }
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter'];
    const values = [15, 25, 35, 45, 55];
    const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff']
    const data = keys.map((key, index) => {
        return {
          key,
          value: values[index],
          svg: { fill: colors[index] },
          arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
          onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
        }
      })
    const deviceWidth = Dimensions.get('window').width

    return (
      <View style={{ justifyContent: 'center',  flex: 1, height:40 }}>
        <PieChart
          style={{ height: 180, marginLeft:160, marginBottom:260}}
          outerRadius={'60%'}
          innerRadius={'30%'}
          data={data}
          animate
        />
        <Text
          onLayout={({ nativeEvent: { layout: { width } } }) => {
            this.setState({ labelWidth: width });
          }}
          style={{
            position: 'absolute',
            left: deviceWidth / 1.4 - labelWidth / 2.8,
            textAlign:'center',
            fontSize:10,
            top:-120,
            overflow:'hidden'
          }}>
          {`${label}\n${value}`}
        </Text>
        
      </View>
    )
  }
}