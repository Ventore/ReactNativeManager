import React, { PureComponent } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
});

export default class EmployeeItem extends PureComponent {
  render() {
    const { employee, onPress } = this.props;
    return (
      <TouchableHighlight
        onPress={() => {
          onPress(employee);
        }}
      >
        <CardSection>
          <Text style={styles.title}>{employee.name}</Text>
        </CardSection>
      </TouchableHighlight>
    );
  }
}
