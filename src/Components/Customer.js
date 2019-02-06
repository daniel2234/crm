import React, {Component} from 'react';

class Customer extends Component {
  render(){
    console.log(this.props.customers, 'these are here')
    return(
      <div className = "customerForm">
        <h6>Customer</h6>
        <div className='content'>
          <div className='header'> {this.props.name}</div>
            <div className='meta'> {this.props.company}</div>
          <div className='center aligned description'>
            <p>notes go here.</p>
          </div>
          <div className='extra content'>
            <span className='right floated edit icon'>
              <i className='edit icon' />
            </span>
            <span className='right floated trash icon'>
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <button onClick = {this.props.onEditClick}>
            Edit
        </button>
      </div>
    )
  }
}

export default Customer;