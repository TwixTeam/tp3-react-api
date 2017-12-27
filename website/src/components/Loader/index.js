import React from 'react';

import RefreshIndicator from 'material-ui/RefreshIndicator';

import Alert from 'material-ui/svg-icons/alert/warning';
import SvgIcon from 'material-ui/SvgIcon';

const LABEL_STYLE = {
  margin: 80,
  color: "#555",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const REFRESH = {
  position: 'relative',
  margin: '0 auto',
}
const LOADER = {
  textAlign: 'center',
  margin: '30px auto',
}
const LOADING_TEXT = {
  fontWeight: 'normal',
  fontSize: 15,
  color: "#555",
}

const Loader = (props) => {
  const { loading, error, children } = props;
  const message = props.message || "Erreur de chargement";

  if (error) {
    return (
      <div style={LABEL_STYLE}>
        <SvgIcon style={{ marginBottom: 5, fontSize: 20 }}><Alert color={"#555"} /></SvgIcon> {message}
      </div>
    )
  }

  if (loading) {
    return (
      <div style={LOADER}>
        <RefreshIndicator
          size={40}
          top={0}
          left={0}
          loadingColor={"#41B"}
          status="loading"
          style={REFRESH}
        />
        <h3 style={LOADING_TEXT}>Chargement en cours</h3>
      </div>
    )
  } else {
    return <div>{children}</div>;
  }
}

export default Loader;
