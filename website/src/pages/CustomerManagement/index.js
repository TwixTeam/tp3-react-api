import React, { Component } from 'react';

import Snackbar from 'material-ui/Snackbar';

import CustomerForm from "../../components/Form/CustomerForm";

import CustomerService from "../../services/customerService";

class CustomerManagement extends Component {

  constructor() {
    super();

    this.state= {
      errorMessage: "",
      open: false,
      result: "",
      currentCustomer : {
        countryId: null,
        customerId: null,
        email:"",
        firstName:"",
        lastName:"",
        address: {
          address: "",
          address2: "",
          district: "",
          postalCode: "",
          cityId: 1,
          phone: "",
        }
      }
    };
  }

  componentDidMount(){
    if(this.props.location.state) {
      this.setState({currentCustomer: {...this.props.location.state.user}})
    }
  }

  render() {
    return (
      <div>
        <CustomerForm 
          editAddress={this.editAddress}
          editAddress2={this.editAddress2}
          editDistrict={this.editDistrict}
          editFirstName={this.editFirstName}
          editLastName={this.editLastName}
          editMail={this.editMail}
          editPhone={this.editPhone}
          editPostalCode={this.editPostalCode}
          resetForm={this.resetForm}
          handleSubmit={this.handleSubmit} 
          {...this.state}
        />
        <br />

        <Snackbar
          open={this.state.open}
          message={this.state.result}
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }

  editFirstName = (value) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        firstName: value
      }
    })
  }

  editLastName = (value) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        lastName: value
      }
    })
  }

  editMail = (value) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        email: value
      }
    })
  }

  editPhone = (value) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        address: {
          ...this.state.currentCustomer.address,
          phone: value
        }
      }
    })
  }


  editAddress = (value) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        address: {
          ...this.state.currentCustomer.address,
          address: value
        }
      }
    })
  }

  editAddress2 = (value) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        address: {
          ...this.state.currentCustomer.address,
          address2: value
        }
      }
    })
  }

  editDistrict = (value) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        address: {
          ...this.state.currentCustomer.address,
          district: value
        }
      }
    })
  }

  editPostalCode = (value) => {
    this.setState({
      currentCustomer: {
        ...this.state.currentCustomer,
        address: {
          ...this.state.currentCustomer.address,
          postalCode: value
        }
      }
    })
  }

  resetForm = () => {
    this.setState({
      currentCustomer : {
        countryId: null,
        customerId: null,
        email:"",
        firstName:"",
        lastName:"",
        address: {
          address: "",
          address2: "",
          district: "",
          postalCode: "",
          cityId: 1,
          phone: "",
        }
      }
    })
  }

  handleSubmit = () => {
    this.state.currentCustomer.firstName && this.state.currentCustomer.lastName && this.state.currentCustomer.address.phone 
    && this.state.currentCustomer.address.address && this.state.currentCustomer.address.district
      ? this.addCustomer(this.state.currentCustomer)
      : this.setState({errorMessage: "Please fill in all the required fileds"})
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  addCustomer = (customer) => {
    customer.customerId 
      ? CustomerService.updateCustomer(customer).then(res => {
        this.setState({open: true, result: "Update customer : Success"})
      }).catch(err => {
        this.setState({open: true, result: "Update customer: Fail"})
      })

      : CustomerService.createCustomer(customer).then(res => {
        this.setState({open: true, result: "Create new customer: Success"})
        this.resetForm();
        
      }).catch(err => {
        this.setState({open: true, result: "Create new customer: Fail"})
      })

    setTimeout(() => {this.props.history.push(
      {
        pathname: '/customers',
      }
    )}, 2000);
  }
}

export default CustomerManagement;