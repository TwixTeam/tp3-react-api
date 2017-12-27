import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

import CustomerListHelper from "../../../helpers/CustomerListHelper";

import Loader from "../../Loader";

const CustomerList = (props) => (
  <div>
    <Loader error={props.error} loading={props.loading}>
      <Table
        height="600px"
        fixedHeader={true}
        selectable={false}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn colSpan="6" style={{textAlign: 'center'}}>
              Customer List
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Last name, First name</TableHeaderColumn>
            <TableHeaderColumn>Phone</TableHeaderColumn>
            <TableHeaderColumn>Mail</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
            <TableHeaderColumn>  </TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody
          showRowHover={true}
          displayRowCheckbox={false}
        >
          {
            props.customers.length > 0 &&
            CustomerListHelper.displayCustomers(props)
          }
        </TableBody>
      </Table>
    </Loader>
  </div>
);

export default CustomerList;