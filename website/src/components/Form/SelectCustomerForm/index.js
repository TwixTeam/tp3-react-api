import React from 'react';

import { Card, CardText, CardTitle } from "material-ui/Card";

import Loader from "../../Loader";
import CustomerListHelper from "../../../helpers/CustomerListHelper";


const SelectCustomerForm = (props) => (
  <div>
    <Card style={{ textAlign: 'center' }}>
      <CardTitle>
        <h3>Select Customer</h3>
      </CardTitle>

      <CardText>
        <Loader {...props}>
          {
            CustomerListHelper.buildCustomerSelectField(props)
          }
        </Loader>
      </CardText>
    </Card>
  </div>
)

export default SelectCustomerForm;