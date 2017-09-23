import React from "react";
import TicketList from "./TicketList";
import {connect} from "react-redux";

class Admin extends React.Component {

  handleClosingTicket(ticketID) {
    const { dispatch } = this.props;
  }
  
  render() {
    console.log("Current Path: ", this.props.location.pathname);
    return (
      <div>
        <h3>Admin Page</h3>
      <TicketList ticketList={this.props.adminMasterTicketList} currentRoute={this.props.location.pathname}/>
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
