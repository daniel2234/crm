import React, {Component} from 'react';
import CustomerForm from './CustomerForm'
import Customer from './Customer'

class EditableCustomer extends Component {
  constructor(props){
    super(props)

    this.state = { editFormOpen: false}

    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleFormClose = this.handleFormClose.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.openForm = this.openForm.bind(this)
  }

  handleEditClick() {
    this.openForm();
  }

  handleFormClose() {
    this.closeForm();
  }

  handleSubmit(customer) {
    this.props.onFormSubmit(customer)
    this.closeForm()
  }

  closeForm() {
    this.setState({editFormOpen: false})
  }

  openForm(){
    this.setState({editFormOpen: true})
  }

  render() {
    if(this.state.editFormOpen){
      return (
        <CustomerForm 
        key = {this.props.id}
        id = {this.props.id}
        name = {this.props.name}
        company = {this.props.company}
        onFormSubmit = {this.handleSubmit}
        onFormClose = {this.handleFormClose}
        />
      )
    } else {
      return (
        <Customer
          id = {this.props.id}
          name = {this.props.name}
          company = {this.props.company}
          updatedSince = {this.props.updateSince}
          onEditClick = {this.handleEditClick}
        />
      )
    }
  }
}

export default EditableCustomer;