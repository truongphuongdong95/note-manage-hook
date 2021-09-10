import React from "react";
import { AlertList, Alert, AlertContainer } from "react-bs-notifier";
import { connect } from "react-redux";
function AlertInfo(props) {

  const showAlert = props.showAlert;
  const alertOff = props.alertOff;
  const infoAlert = props.infoAlert; 

  const handleDismiss = () => {
    alertOff();
  }

  if (showAlert === false) return null;
  return (
    <AlertContainer>
      <Alert type="success" onDismiss={() => handleDismiss()} timeout={1500}>{infoAlert}</Alert>
    </AlertContainer>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    showAlert: state.showAlert,
    infoAlert: state.infoAlert
    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    alertOff: () => {
        dispatch({type:"ALERT_OFF"})
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo);
