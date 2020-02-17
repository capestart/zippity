import React, { useState } from 'react';
import {
  Text, View, Image, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView,
} from 'react-native';
import Moment from 'moment';
import PropTypes from 'prop-types';
import CustomSlider from './slider/CustomSlider';
import styles from '../styles/Schedule.style';
import { DATES, TIMES } from '../const/ScheduleData';

const Item = ({
  id, date, selected, onSelect,
}) => (
  <TouchableOpacity
    onPress={() => onSelect(id)}
    style={
      selected ? styles.selectedItem : styles.item
    }
  >
    <Text style={selected ? styles.selectedTitle : styles.title}>{ Moment(date).format('dddd, MMMM D') }</Text>
  </TouchableOpacity>
);

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

export default function Schedule() {
  const [selected, setSelected] = useState(new Map());
  const [arrival, setArrival] = useState('5AM');
  const [departure, setDeparture] = useState('9PM');
  const onSelect = React.useCallback(
    (id) => {
      const newSelected = new Map();
      newSelected.delete(id, selected.get(id));
      newSelected.set(id, !selected.get(id));
      setSelected(newSelected);
    },
    [selected],
  );
  const multiSliderValueCallback = (values) => {
    console.log('multiSliderValueCallback');
    if (values !== undefined) {
      setArrival(values[0].time);
      setDeparture(values[1].time);
    }
  };

  return (
    <KeyboardAvoidingView behavior="position">
      <ScrollView>
        <View style={styles.container}>
          <HeaderInfo />
          <View style={styles.formContainer}>
            <Text style={styles.chooseText}>Choose a Service Date</Text>
            <FlatList
              accessibilityRole="summary"
              data={DATES}
              style={styles.flatList}
              renderItem={({ item }) => (
                <Item
                  id={item.id}
                  date={item.date}
                  selected={!!selected.get(item.id)}
                  onSelect={onSelect}
                />
              )}
            />
            <Text style={styles.chooseTimeText}>When do you arrive and leave from work?</Text>
            <View style={styles.sliderContainer} accessibilityRole="progressbar">
              <CustomSlider
                data={TIMES}
                padding={40}
                callback={multiSliderValueCallback}
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
            <View style={styles.commentsView}>
              <Text style={styles.commentsText}>
                Anything else we should know about your schedule? (Optional)
              </Text>
              <TextInput
                style={styles.textArea}
                multiline
              />
              <TouchableOpacity
                style={selected.size === 0 ? styles.button : styles.selectedButton}
                activeOpacity={0.6}
              >
                <View style={styles.buttonCenter}>
                  <Text style={selected.size === 0 ? styles.buttonText : styles.textActive}>
                    Continue
                  </Text>
                  <Text style={selected.size === 0 ? styles.nextIcon : styles.iconActive}> &nbsp; &#x25B6;</Text>
                </View>

              </TouchableOpacity>
              { selected.size === 0
                ? (
                  <Text style={styles.errorText}>
                    Please select a date and time before you can continue
                  </Text>
                )
                : <Text />}
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
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
