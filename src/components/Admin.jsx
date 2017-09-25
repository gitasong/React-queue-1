import React from "react";
import TicketList from "./TicketList";
import {connect} from "react-redux";
import c from "./../constants";

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.handleClosingTicket = this.handleClosingTicket.bind(this);
  }

  handleClosingTicket(ticketID) {
    const { dispatch } = this.props;
    const action = {
      type: c.CLOSE_TICKET,
      ticketID: ticketID,
    }
    dispatch(action);
  }

  render() {
    console.log("Current Path: ", this.props.location.pathname);
    return (
      <div>
        <h3>Admin Page</h3>
      <TicketList ticketList={this.props.adminMasterTicketList} currentRoute={this.props.location.pathname}
      handleClosingTicket={this.handleClosingTicket}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adminMasterTicketList: state
  }
}

export default connect(mapStateToProps)(Admin);
