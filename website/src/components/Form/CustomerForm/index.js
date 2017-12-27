import React from 'react';

import { Card, CardText, CardTitle, CardActions, CardHeader } from "material-ui/Card";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import "./CustomerForm.css";

const CustomerForm = (props) => (
  <div>
    <Card style={{ textAlign: 'center' }}>
      <CardTitle>
        <h3>Customer Form</h3>
        <p>* Required field</p>
        
        {
          props.errorMessage &&
          <p style={{ color: "#F00"}}>{props.errorMessage}</p>
        }
      </CardTitle>

      <CardHeader>
        <h3>Identity</h3>
      </CardHeader>

      <CardText>
        <TextField
          className="Left-Input" 
          hintText="FirstName *"
          hintStyle={{color:'#ccc'}} 
          id={"1"} 
          type="text"
          value={props.currentCustomer.firstName} 
          onChange={(e) => props.editFirstName(e.target.value.toUpperCase())} 
        />

        <TextField
          className="Right-Input" 
          hintText="LastName *"
          hintStyle={{color:'#ccc'}} 
          id={"2"} 
          type="text"
          value={props.currentCustomer.lastName} 
          onChange={(e) => props.editLastName(e.target.value.toUpperCase())} 
        />

        <br/>

        <TextField
          className="Left-Input" 
          hintText="Mail"
          hintStyle={{color:'#ccc'}} 
          id={"3"} 
          type="email"
          value={props.currentCustomer.email} 
          onChange={(e) => props.editMail(e.target.value)} 
        />

        <TextField
          className="Right-Input" 
          hintText="Phone *"
          hintStyle={{color:'#ccc'}} 
          id={"4"} 
          type="number"
          value={props.currentCustomer.address.phone} 
          onChange={(e) => props.editPhone(e.target.value)} 
        />

        <CardHeader>
          <h3>Address</h3>
        </CardHeader>

        <TextField
          className="Left-Input" 
          hintText="Address *"
          hintStyle={{color:'#ccc'}} 
          id={"5"} 
          type="text"
          value={props.currentCustomer.address.address} 
          onChange={(e) => props.editAddress(e.target.value)} 
        />

        <TextField
          className="Right-Input" 
          hintText="Address2"
          hintStyle={{color:'#ccc'}} 
          id={"6"} 
          type="text"
          value={props.currentCustomer.address.address2} 
          onChange={(e) => props.editAddress2(e.target.value)} 
        />

        <br/>

        <TextField
          className="Left-Input" 
          hintText="District *"
          hintStyle={{color:'#ccc'}} 
          id={"7"} 
          type="email"
          value={props.currentCustomer.address.district} 
          onChange={(e) => props.editDistrict(e.target.value)} 
        />

        <TextField
          className="Right-Input" 
          hintText="PostalCode"
          hintStyle={{color:'#ccc'}} 
          id={"8"} 
          type="number"
          value={props.currentCustomer.address.postalCode} 
          onChange={(e) => props.editPostalCode(e.target.value)} 
        />
      </CardText>

      <CardActions>
        <RaisedButton
          type="submit"
          primary
          label={props.currentCustomer.customerId ? "Edit" : "Add"}
          onClick={() => props.handleSubmit()}
        />

        <RaisedButton
          type="submit"
          secondary
          label="Reset Form"
          onClick={() => props.resetForm()}
        />
      </CardActions>
      <br/>
      <br/>
    </Card>
  </div>
)

export default CustomerForm;

