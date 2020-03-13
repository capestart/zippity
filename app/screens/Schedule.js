import React, { useState } from 'react';
import {
  Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView,
} from 'react-native';
import Moment from 'moment';
import PropTypes from 'prop-types';
import CustomSlider from '../components/CustomSlider';
import styles from '../styles/Schedule.style';
import {
  DATES, TIMES, TIME_FRAME, DEFAULT_TIME_RANGE, TIME_RANGE_LIMIT,
  DEFAULT_ARRIVAL_TIME, DEFAULT_DEPARTURE_TIME,
} from '../constants/ScheduleData';

const Item = ({
  id, date, isAvailable, selected, onSelect,
}) => {
  let itemStyle = styles.item;
  let itemTitleStyle = styles.title;
  const serviceDate = isAvailable ? Moment(date).format('dddd, MMMM D') : `${Moment(date).format('dddd, MMMM D')} (full)`;
  if (!isAvailable) {
    itemStyle = styles.unAvailableItem;
    itemTitleStyle = styles.unAvailableTitle;
  } else if (selected) {
    itemStyle = styles.selectedItem;
    itemTitleStyle = styles.selectedTitle;
  }
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={
        itemStyle
      }
      disabled={!isAvailable}
    >
      <Text style={itemTitleStyle}>{ serviceDate }</Text>
    </TouchableOpacity>
  );
};

const HeaderInfo = () => (
  <View style={styles.infoContainer} accessibilityRole="header">
    <View style={styles.inforContainerView}>
      <Text style={styles.scheduleTitleText}>Schedule Your Service</Text>
      <View style={styles.optionView}>
        <Image source={require('../assets/tick.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>Vehicle</Text>
      </View>
      <View style={styles.optionView}>
        <Image source={require('../assets/tick.png')} style={styles.optionIcon} />
        <Text style={styles.optionText}>Services</Text>
      </View>
      <View style={styles.scheduleView}>
        <Text style={styles.scheduleText}>Schedule</Text>
      </View>
    </View>
    <Text style={styles.infoLabel}>Let&apos;s put it on the books!</Text>
  </View>
);

const ServiceDateView = ({ onSelect, selected }) => (
  <View>
    <Text style={styles.chooseText}>Choose a Service Date</Text>
    {
      DATES.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          date={item.date}
          isAvailable={item.isAvailable}
          selected={!!selected.get(item.id)}
          onSelect={onSelect}
        />
      ))
    }
  </View>
);

const SeriveTimeView = ({
  multiSliderValueCallback, arrival, departure, sliderValuesChangeStart,
}) => (
  <View>
    <Text style={styles.chooseTimeText}>When do you arrive and leave from work?</Text>
    <View style={styles.sliderContainer} accessibilityRole="progressbar">
      <CustomSlider
        data={TIMES}
        dataframe={TIME_FRAME}
        padding={40}
        callback={multiSliderValueCallback}
        onValuesChangeStartCallback={sliderValuesChangeStart}
        single={false}
      />
    </View>
    <View style={styles.timeInfoContainer}>
      <View style={styles.timeInfoBox}>
        <Text style={styles.timeInfoText}>{arrival}</Text>
      </View>
      <View style={styles.timeInfoTo}>
        <Text style={styles.timeInfoText}>to</Text>
      </View>
      <View style={styles.timeInfoBox} accessibilityRole="text">
        <Text style={styles.timeInfoText}>{departure}</Text>
      </View>
    </View>
  </View>
);

const CommentsView = () => (
  <View>
    <Text style={styles.commentsText}>
      Anything else we should know about your schedule? (Optional)
    </Text>
    <TextInput
      style={styles.textArea}
      multiline
    />
  </View>
);

const ContinueButton = ({ selected, timeRange }) => {
  const disabledCondition = selected.size === 0 || timeRange < TIME_RANGE_LIMIT;
  return (
    <View>
      <TouchableOpacity
        style={disabledCondition
          ? styles.button : styles.selectedButton}
        activeOpacity={0.6}
        disabled={disabledCondition}
      >
        <View style={styles.buttonCenter}>
          <Text style={disabledCondition
            ? styles.buttonText : styles.textActive}
          >
            Continue
          </Text>
          <Text style={disabledCondition
            ? styles.nextIcon : styles.iconActive}
          >
                     &nbsp; &#x25B6;
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ErrorComponent = ({ selected, timeRange }) => {
  if (selected.size === 0) {
    return (
      <Text style={styles.errorText}>
        Please select a date and time before you can continue
      </Text>
    );
  }
  if (selected.size !== 0 && timeRange < TIME_RANGE_LIMIT) {
    return (
      <Text style={styles.errorText}>
        Please select an availability time range that is at least 4 hours
      </Text>
    );
  }
  return (<Text />);
};

export default function Schedule() {
  const [selected, setSelected] = useState(new Map());
  const [arrival, setArrival] = useState(DEFAULT_ARRIVAL_TIME);
  const [departure, setDeparture] = useState(DEFAULT_DEPARTURE_TIME);
  const [timeRange, setTimeRange] = useState(DEFAULT_TIME_RANGE);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const onSelect = React.useCallback(
    (id) => {
      const newSelected = new Map();
      newSelected.delete(id, selected.get(id));
      if (selected.get(id) !== true) {
        newSelected.set(id, !selected.get(id));
      }
      setSelected(newSelected);
    },
    [selected],
  );
  const multiSliderValueCallback = (values) => {
    if (values.length !== 0) {
      setArrival(values[0].time);
      setDeparture(values[1].time);
      setTimeRange(values[1].value - values[0].value);
    }
    setScrollEnabled(true);
  };

  const sliderValuesChangeStart = () => {
    setScrollEnabled(false);
  };

  return (
    <KeyboardAvoidingView behavior="position">
      <ScrollView
        style={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
      >
        <View style={styles.container}>
          <HeaderInfo />
          <View style={styles.formContainer}>
            <ServiceDateView onSelect={onSelect} selected={selected} />
            <SeriveTimeView
              multiSliderValueCallback={multiSliderValueCallback}
              arrival={arrival}
              departure={departure}
              sliderValuesChangeStart={sliderValuesChangeStart}
            />
            <View style={styles.bottomContainer}>
              <CommentsView />
              <ContinueButton selected={selected} timeRange={timeRange} />
              <ErrorComponent selected={selected} timeRange={timeRange} />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

Schedule.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
Item.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  isAvailable: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
SeriveTimeView.propTypes = {
  multiSliderValueCallback: PropTypes.func.isRequired,
  arrival: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  sliderValuesChangeStart: PropTypes.func.isRequired,
};
ServiceDateView.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.instanceOf(Map).isRequired,
};
ContinueButton.propTypes = {
  selected: PropTypes.instanceOf(Map).isRequired,
  timeRange: PropTypes.number.isRequired,
};
ErrorComponent.propTypes = {
  selected: PropTypes.instanceOf(Map).isRequired,
  timeRange: PropTypes.number.isRequired,
};
