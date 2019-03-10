import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, StyleSheet } from 'react-native';

import { CardSection, Input, View } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    const { name, phone, shift, employeeUpdate } = this.props;
    return [
      <CardSection key="name">
        <Input
          label="Name"
          placeholder="John"
          value={name}
          onChangeText={value => {
            employeeUpdate({ prop: 'name', value });
          }}
        />
      </CardSection>,
      <CardSection key="phone">
        <Input
          label="Phone"
          placeholder="555-5555"
          value={phone}
          onChangeText={value => {
            employeeUpdate({ prop: 'phone', value });
          }}
        />
      </CardSection>,
      <CardSection key="shift" style={{ flexDirection: 'column' }}>
        <Text style={styles.labelStyle}>Select a shift</Text>
        <Picker
          selectedValue={shift}
          onValueChange={value => {
            employeeUpdate({ prop: 'shift', value });
          }}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
      </CardSection>,
    ];
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 18,
  },
});

export default connect(
  null,
  { employeeUpdate }
)(EmployeeForm);
