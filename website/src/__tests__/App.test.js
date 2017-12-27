import React from 'react';

import { shallow } from 'enzyme';

import CustomerForm from "../components/Form/CustomerForm";
import SelectCustomerForm from "../components/Form/SelectCustomerForm";
import CustomerList from "../components/List/CustomerList";
import FilmList from "../components/List/FilmList";

import Loader from "../components/Loader";


import TextField from "material-ui/TextField";
import MenuItem from 'material-ui/MenuItem';
import { TableRow } from 'material-ui/Table';


describe('<CustomerForm />', () => {
  it('should render 8 text fields', () => {
    const customer = {
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
    const wrapper = shallow(<CustomerForm currentCustomer={customer} />);
    expect(wrapper.find(TextField)).toHaveLength(8);
  });
});


describe('<SelectCustomerForm/>', () => {

  it('should render a list with the same number of rows as the number of customers', () => {
    const customerList = [
      {
        countryId: null,
        customerId: 1,
        email:"",
        firstName:"aaa",
        lastName:"aaa",
        address: {
          address: "",
          address2: "",
          district: "",
          postalCode: "",
          cityId: 1,
          phone: "",
        }
      },{
        countryId: null,
        customerId: 2,
        email:"",
        firstName:"bbb",
        lastName:"bbb",
        address: {
          address: "",
          address2: "",
          district: "",
          postalCode: "",
          cityId: 1,
          phone: "",
        }
      }
    ];

    const wrapper = shallow(<SelectCustomerForm customers={customerList} />);
    expect(wrapper.find(MenuItem)).toHaveLength(2);
  });
});

describe('<CustomerList/>', () => {
  it('should render the same number of customers + 2 for the table header', () => {
    const customerList = [
      {
        countryId: null,
        customerId: 1,
        email:"",
        firstName:"aaa",
        lastName:"aaa",
        address: {
          address: "",
          address2: "",
          district: "",
          postalCode: "",
          cityId: 1,
          phone: "",
        }
      }
    ];
    const wrapper = shallow((
      <CustomerList customers={customerList} />
    ));
    expect(wrapper.find(TableRow)).toHaveLength(3);
  });
});

describe('<FilmList/>', () => {
  it('(rentalList) should render the same number of customers + 2 for the table header', () => {
    const films = [
      {
        filmId: 1,
        title: "aa",
        description:"aa",
        releaseYear:"2006-01-01",
        rentalRate:"0,99",
      }
    ];

    const wrapper = shallow((
      <FilmList 
        error={false}
        loading={false}
        isRental={true}
        rentals={films}
      />
    ));
    expect(wrapper.find(TableRow)).toHaveLength(3);
  });

  it('(filmList) should render the same number of customers + 2 for the table header', () => {
    const films = [
      {
        filmId: 1,
        title: "aa",
        description:"aa",
        releaseYear:"2006-01-01",
        rentalRate:"0,99",
      }
    ];

    const wrapper = shallow((
      <FilmList 
        error={false}
        loading={false}
        isRental={false}
        films={films}
      />
    ));
    expect(wrapper.find(TableRow)).toHaveLength(3);
  });
});

describe('<Loader>children</Loader>', () => {

  it('should render children when passed in', () => {
    const wrapper = shallow((
      <Loader error={false} loading={false}>
        <div className="unique" />
      </Loader>
    ));
    expect(wrapper.contains(<div><div className="unique" /></div>)).toEqual(true);
  });
});

