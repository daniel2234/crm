import React, {Component} from 'react';

class CustomerForm extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        id: 0,
        name: this.props.name || '',
        company: this.props.company || '',
      }

      this.handleCompanyChange = this.handleCompanyChange.bind(this)
      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  handleCompanyChange(e) {
    this.setState({company: e.target.value})
  }

  handleSubmit() {
    console.log('handleFormSubmit')
    this.props.onFormSubmit({
      id: this.props.id,
      name: this.state.name,
      company: this.state.company,
    });
  }


  render () {
    const submitText = this.props.id ? 'Update' : 'Create'
    return (
      <div className='centered-card'>
        <h6>Customer Form</h6>
        <div className='content'>
          <div className='form'>
            <div className='name-field'>
              <label>Name</label>
                <input type='text' value={this.state.name} onChange = {this.handleNameChange}/> </div>
                <div className='company-field'>
                <label>Company</label>
                <input type='text' value={this.state.company} onChange = {this.handleCompanyChange} />
                </div>
                <div className='attached-buttons'>
              <button className='blue-button' onClick = {this.handleSubmit}>{submitText}</button>
              <button className='red-button'onClick = {this.props.onFormClose}>Cancel</button>
            </div>
          </div>
        </div>
     </div>
    )
  }
}

export default CustomerForm;