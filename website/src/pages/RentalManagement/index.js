import React, { Component } from 'react';


import Snackbar from 'material-ui/Snackbar';

import SelectCustomerForm from "../../components/Form/SelectCustomerForm";
import FilmList from "../../components/List/FilmList";

import CustomerService from "../../services/customerService";
import RentalService from "../../services/rentalService";


class RentalManagement extends Component {

  constructor() {
    super();

    this.state = {
      open: false,
      result: "",
      errorForm: false,
      loadingForm: true,
      errorRentals: false,
      loadingRentals: false,
      errorFilms: false,
      loadingFilms: false,

      selectedCustomerId: "",
      customers:[],
      rentals:[],
      films:[]
    }
  }

  render() {
    return (
      <div>
        <SelectCustomerForm
          onSelectCustomer={this.onSelectCustomer}
          error={this.state.errorForm}
          loading={this.state.loadingForm}
          {...this.state}
        />

        <br/>

        <FilmList 
          onUpdateRental={this.onUpdateRental}
          error={this.state.errorRentals}
          loading={this.state.loadingRentals}
          isRental={true}
          rentals={this.state.rentals}
        />

        <br/>
        <br/>

        <FilmList 
          onCreateRental={this.onCreateRental}
          error={this.state.errorFilms}
          loading={this.state.loadingFilms}
          isRental={false}
          films={this.state.films}
        />

        <Snackbar
          open={this.state.open}
          message={this.state.result}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  componentDidMount() {
    CustomerService.getAllCustomers().then(res => {
      this.setState({customers: res, loadingForm:false})
    }).catch(err => {
      this.setState({errorForm:true, loadingForm:false})
    });

    if(this.props.location.state) {
      this.setState({selectedCustomerId: this.props.location.state.customerId})
      this.getRentalsAndFilmsFromCustomer(this.props.location.state.customerId)
    }
  }

  onSelectCustomer = (customerId) => {
    this.setState({selectedCustomerId: customerId, loadingRentals: true, loadingFilms:true});

    this.getRentalsAndFilmsFromCustomer(customerId)
  }

  onCreateRental = (filmId) => {
    RentalService.createRental(this.state.selectedCustomerId, filmId).then(res => {
      this.setState({open: true, result: "Renting film: Success"})
      this.getRentalsAndFilmsFromCustomer(this.state.selectedCustomerId);
    }).catch(err => {
      this.setState({open: true, result: "Renting film: Fail"})
    });
  }

  onUpdateRental = (filmId) => {
    RentalService.updateRental(this.state.selectedCustomerId, filmId).then(res => {
      this.setState({open: true, result: "Return rental: Success"})
      this.getRentalsAndFilmsFromCustomer(this.state.selectedCustomerId);
    }).catch(err => {
      this.setState({open: true, result: "Return rental: Fail"})
    });

  }

  getRentalsAndFilmsFromCustomer = (customerId) => {
    this.setState({loadingRentals: true, loadingFilms:true})

    RentalService.getCustomerRentals(customerId).then(res => {
      this.setState({rentals: res, loadingRentals:false});
    }).catch(err => {
      this.setState({rentals: [], errorRentals: true, loadingRentals:false});
    });

    RentalService.getNoRentedFilms(customerId).then(res => {
      this.setState({films: res, loadingFilms:false});
    }).catch(err => {
      this.setState({films: [], errorFilms: true, loadingFilms:false});
    });
  }
}

export default RentalManagement;