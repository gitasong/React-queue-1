import React from "react";
import TicketList from "./TicketList";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <h3>Admin Page</h3>
        <TicketList ticketList={this.props.adminMasterTicketList}/>
      </div>
    );
  }
}

export default Admin;
