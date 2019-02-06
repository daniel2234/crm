import React, {Component} from 'react';
import CustomerForm from './CustomerForm';

class ToggleableCustomerForm extends Component {
  constructor(props){
    super(props)
    this.state = {isOpen : false}

    this.handleFormOpen = this.handleFormOpen.bind(this)
    this.handleFormClose = this.handleFormClose.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormOpen() {
    this.setState({isOpen: true})
  }

  handleFormClose() {
    this.setState({isOpen: false})
  }

  handleFormSubmit(customer){
    this.props.onFormSubmit(customer)
    this.setState({isOpen : false})
  }
  render() {
    if (this.state.isOpen) {
      return(
        <CustomerForm 
          onFormSubmit = {this.handleFormSubmit}
          onFormClose = {this.handleFormClose}
        />
      )
    } else {
      return (
        <div className = 'middle-segment'>
          <h6>Toggleable Customer Form</h6>
          <button 
          className = "basic-button"
          onClick = {this.handleFormOpen}>
            Add
          </button>
        </div>
      )
    }
  }
}

export default ToggleableCustomerForm;