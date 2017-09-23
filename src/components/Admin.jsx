import React from "react";
import TicketList from "./TicketList";
import {connect} from "react-redux";

class Admin extends React.Component {
  render() {
    console.log("Current Path: ", this.props.location.pathname);
    return (
      <div>
        <h3>Admin Page</h3>
        <TicketList ticketList={this.props.adminMasterTicketList}/>
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
