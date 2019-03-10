import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import _ from 'lodash';

import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = {
    visible: false,
  };
  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
            onPress={() => {
              const { name, phone, shift } = this.props;
              this.props.employeeSave({
                name,
                phone,
                shift,
                uid: this.props.employee.uid,
              });
            }}
          >
            Save
          </Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => {
              const { phone, shift } = this.props;
              text(phone, `Your upcoming shift on ${shift}`);
            }}
          >
            Text shift
          </Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => {
              this.setState({ visible: true });
            }}
          >
            Fire
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.visible}
          onAccept={() => {
            this.props.employeeDelete({ uid: this.props.employee.uid });
          }}
          onDecline={() => {
            this.setState({ visible: false });
          }}
        >
          Are you sure you want to fire this person?
        </Confirm>
      </Card>
    );
  }
}

export default connect(
  ({ employee: { name, phone, shift } }) => ({
    name,
    phone,
    shift,
  }),
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
