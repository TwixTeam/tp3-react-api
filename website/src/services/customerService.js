import axios from "axios";

const CustomerService = {

  getAllCustomers: () => {
    return axios.get('/customer/')
      .then(res => res.data)
  },

  createCustomer: (customer) => {
    return axios.post('/customer/', customer)
      .then(res => res.data)
  },

  updateCustomer: (customer) => {
    return axios.put('/customerUpdate/', customer)
      .then(res => res.data)
  }
}

export default CustomerService;