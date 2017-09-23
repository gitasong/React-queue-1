import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";

function Ticket(props){
  const timeSinceOpened = new Moment().to(props.timeOpened);

  let ticketDetails =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p>{timeSinceOpened}</p>
    </div>

    if (props.currentRoute === "/admin") {
      return (
        <div>
          {ticketDetails}
          <button onClick={() => {props.handleClosingTicket(props.id)}}>Close Ticket</button>
          <hr/>
        </div>
      );
    }
    else {
      return (
        <div>
          {ticketDetails}
          <hr/>
        </div>
      );
    }
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  timeOpened: PropTypes.string,
  issue: PropTypes.string,
  currentRoute: PropTypes.string
};

export default Ticket;
