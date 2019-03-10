import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import { employeesFetch } from '../actions';
import EmployeeItem from './EmployeeItem';
import { Card } from './common';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }
  keyExtractor(item) {
    return item.uid.toString();
  }
  onEmployeePress = employee => {
    Actions.employeeEdit({ employee });
  };
  renderEmployee = ({ item }) => {
    return <EmployeeItem employee={item} onPress={this.onEmployeePress} />;
  };
  render() {
    return (
      <Card>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderEmployee}
          keyExtractor={this.keyExtractor}
        />
      </Card>
    );
  }
}

export default connect(
  ({ employees }) => ({
    employees: _.map(employees, (value, uid) => ({ ...value, uid })),
  }),
  { employeesFetch }
)(EmployeeList);
