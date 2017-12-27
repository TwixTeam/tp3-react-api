import React from 'react';

import RaisedButton from "material-ui/RaisedButton";
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import SelectField from "material-ui/SelectField";
import MenuItem from 'material-ui/MenuItem';

const CustomerListHelper = {

  displayCustomers: (props) => (
    props.customers.map( (customer) => (
      <TableRow key={customer.customerId}>
        <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{customer.customerId}</TableRowColumn>
        <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{customer.lastName} {customer.firstName}</TableRowColumn>
        <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{customer.address.phone}</TableRowColumn>
        <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{customer.email}</TableRowColumn>
        <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{customer.address.address}, {customer.address.address2}, {customer.address.district}, {customer.address.postalCode}</TableRowColumn>
        <TableRowColumn>
          <RaisedButton 
            id={customer.customerId}
            label="Edit"
            onClick={() => props.handleEditCustomer(customer)}
            primary={true}  
          />

          <RaisedButton 
            label="Rentals"
            onClick={() => props.handleGoToCustomerRentals(customer.customerId)}
            secondary={true}  
          />
        </TableRowColumn>
      </TableRow>
    ))
  ),

  buildCustomerSelectField: (props) => (
    <SelectField
      hintText="Customer"
      value={props.selectedCustomerId}
      onChange={(event, index, value) => props.onSelectCustomer(value)}
    >
      {
        props.customers.map((customer) => (
          <MenuItem key={customer.customerId} value={customer.customerId} primaryText={`${customer.lastName} ${customer.firstName}`}/>
        ))
      }
    </SelectField>
  )
}

export default CustomerListHelper;