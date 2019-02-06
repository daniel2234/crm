import React, {Component} from 'react';
import EditableCustomerList from './EditableCustomerList';
import ToggleableCustomerForm from './ToggleableCustomerForm'

class CustomerDashboard extends Component {
  constructor(props) {
    super(props)

    this.state = { customers: [
      {
        id: 1,
        name: 'Daniel',
        company: 'Apple Inc',
        updateSince: Date.now(),
      }, {
        id: 2,
        name: 'Michael',
        company: 'Microsoft',
        updateSince: Date.now(),
      },
    ]}

    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this)
    this.updateCustomer = this.updateCustomer.bind(this)
    this.createCustomer = this.createCustomer.bind(this)
    this.createCustomerForm = this.createCustomerForm.bind(this)
    this.handleCreateCustomerSubmit = this.handleCreateCustomerSubmit.bind(this)
  }

  handleEditFormSubmit(updatecustomer) {
    this.updateCustomer(updatecustomer)
  }

  handleCreateCustomerSubmit(customer) {
    this.createCustomer(customer)
  }

  updateCustomer(updatecustomer) {
    this.setState({
      customers: this.state.customers.map((customer) => {
        if (customer.id === updatecustomer.id) {
          return Object.assign({}, customer, {
            name: updatecustomer.name,
            company: updatecustomer.company,
        });
        } else {
          return customer;
        }
        }), 
      });
  }

  createCustomerForm(customer) {
    console.log('createCustomerForm')
    this.createCustomer(customer)
  }

  createCustomer(customer) {
    console.log(customer)
    this.setState({customers: this.state.customers.concat(customer)})
  }

  render() {
    console.log(this.state.customers, 'here they are')
    return (
      <div className = "CustomerDashboard">
        <h1>Customer DashBoard</h1>
        <EditableCustomerList 
        customers = {this.state.customers}
        onFormSubmit = {this.handleEditFormSubmit}
        />
        <ToggleableCustomerForm onFormSubmit = {this.handleCreateCustomerSubmit}/>
      </div>
    )
  }
}

export default CustomerDashboard;