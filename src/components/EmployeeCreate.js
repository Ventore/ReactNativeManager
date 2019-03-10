import React, { Component } from 'react';
import { connect } from 'react-redux';

import { employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
            onPress={() => {
              const { name, phone, shift, employeeCreate } = this.props;
              console.log(shift);
              employeeCreate({ name, phone, shift: shift || 'Monday' });
            }}
          >
            Create
          </Button>
        </CardSection>
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
  { employeeCreate }
)(EmployeeCreate);
