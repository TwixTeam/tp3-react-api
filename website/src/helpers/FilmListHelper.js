import React from 'react';

import RaisedButton from "material-ui/RaisedButton";
import {
  TableRowColumn,
  TableRow,
} from 'material-ui/Table';

const FilmListHelper = {
  
  buildFilmList: (films, isRental, buttonAction) => (

    films.map( (film) => (
      <TableRow key={film.filmId}>
        <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{film.filmId}</TableRowColumn>
        <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{film.title}</TableRowColumn>
        <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{film.description}</TableRowColumn>
        <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{new Date(film.releaseYear).getFullYear()}</TableRowColumn>
        <TableRowColumn style={{wordWrap: 'break-word', whiteSpace: 'normal'}}>{film.rentalRate} / 5</TableRowColumn>
        <TableRowColumn>
          <RaisedButton 
            id={film.filmId}
            label={isRental ? "Return" : "Rent"}
            onClick={() => buttonAction(film.filmId)}
            primary={isRental}
            secondary={!isRental}
          />
        </TableRowColumn>
      </TableRow>
    ))
  )
}

export default FilmListHelper;