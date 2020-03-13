import React, { useState } from 'react';
import {
  Text, View, Dimensions, Image,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import PropTypes from 'prop-types';
import styles from '../styles/CustomSlider.style';


const SliderMarker = () => (
  <Image
    style={styles.image}
    source={require('../assets/slider-button.png')}
    resizeMode="contain"
  />
);

const SliderItem = ({
  data,
}) => (
  <View>
    <Text style={styles.sliderActive}>
      {data}
    </Text>
  </View>
);

const RenderScale = ({ data }) => data.map((item) => (
  <SliderItem
    key={item.value}
    value={item.value}
    data={item.time}
  />
));
const CustomSlider = ({
  data, dataframe, padding, callback, onValuesChangeStartCallback,
}) => {
  const initialValue = [1, data.length];
  const [multiSliderValue, setMultiSliderValue] = useState(initialValue);
  const multiSliderValuesChange = (values) => {
    setMultiSliderValue(values);
  };
  const onValuesChangeStart = () => {
    onValuesChangeStartCallback();
  };
  const onValuesChangeFinish = (values) => {
    setMultiSliderValue(values);
    const selectedValues = values.map((value) => data.find((item) => item.value === value));
    callback(selectedValues);
  };
  return (
    <View>
      <View style={styles.container}>
        <MultiSlider
          trackStyle={styles.trackStyle}
          selectedStyle={styles.selectedStyle}
          values={[multiSliderValue[0], multiSliderValue[1]]}
          sliderLength={Dimensions.get('window').width - padding * 2}
          onValuesChange={multiSliderValuesChange}
          onValuesChangeStart={onValuesChangeStart}
          onValuesChangeFinish={onValuesChangeFinish}
          min={1}
          max={data.length}
          step={1}
          allowOverlap={false}
          customMarker={SliderMarker}
        />
      </View>
      <View style={styles.column}>
        <RenderScale data={dataframe} />
      </View>
    </View>
  );
};

export default CustomSlider;

CustomSlider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      time: PropTypes.string,
    }),
  ).isRequired,
  dataframe: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      time: PropTypes.string,
    }),
  ).isRequired,
  padding: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  onValuesChangeStartCallback: PropTypes.func.isRequired,
};

SliderItem.propTypes = {
  data: PropTypes.string.isRequired,
};
