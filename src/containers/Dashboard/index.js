import React from "react";
import Header from "../Header/Header";
import "./dashboard.css";

const Dashboard = (props) => {
  return (
    <React.Fragment>
      <div className="background">
        <Header />
        <div className="dashboard-content">
          <h5>Welcome to the page!</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
