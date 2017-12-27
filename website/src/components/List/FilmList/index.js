import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

import Loader from "../../Loader";
import FilmListHelper from "../../../helpers/FilmListHelper";

const FilmList = (props) => (
  <div>
    <Loader {...props}>
      <Table
        wrapperStyle={{ maxHeight: '500px' }} 
        fixedHeader={true}
        selectable={false}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn colSpan="6" style={{textAlign: 'center'}}>
              {
                props.isRental 
                  ? "Customer Rentals"
                  : "Available Films"
              }
            </TableHeaderColumn>
          </TableRow>
          {
            props.isRental 
              ? (
                <TableRow>
                  <TableHeaderColumn>ID</TableHeaderColumn>
                  <TableHeaderColumn>Title</TableHeaderColumn>
                  <TableHeaderColumn>Description</TableHeaderColumn>
                  <TableHeaderColumn>Release Year</TableHeaderColumn>
                  <TableHeaderColumn>Rate</TableHeaderColumn>
                  <TableHeaderColumn>  </TableHeaderColumn>
                </TableRow>
              )
              : (<TableRow/>)
          }
          
        </TableHeader>

        <TableBody
          showRowHover={true}
          displayRowCheckbox={false}
        >
          {
            (props.isRental && props.rentals.length > 0) 
              ? FilmListHelper.buildFilmList(props.rentals, props.isRental, props.onUpdateRental)
              : (!props.isRental && props.films.length > 0) 
                ? FilmListHelper.buildFilmList(props.films, props.isRental, props.onCreateRental) 
                : ""
          }
        </TableBody>
      </Table>
    
    </Loader>
  </div>
)

export default FilmList;