import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p>{props.timeSinceOpened}</p>
    </div>
  );
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  timeSinceOpened: PropTypes.string,
  issue: PropTypes.string,
};

export default Ticket;
