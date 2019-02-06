import React, {Component} from 'react';
import EditableCustomer from './EditableCustomer'

class EditableCustomerList extends Component {
  render() {
    console.log(this.props.customers, 'customers')
    const customers = this.props.customers.map((customer) => (
      <EditableCustomer
          key = {customer.id}
          id = {customer.id}
          name = {customer.name}
          company = {customer.company}
          notes = {null}
          updateSince = {customer.updateSince}
          onFormSubmit = {this.props.onFormSubmit}
        />
    ))
    return (
      <div className = "customers">
        <h2> EditableCustomerList </h2>
          {customers}
      </div>
    )
  }
}

export default EditableCustomerList;