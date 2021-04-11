import React from "react";
import Header from "../Header/Header";
import "./dashboard.css";

const Dashboard = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className="dashboard-background">
        <div className="dashboard-content">
          <h5 className="mt-4">Welcome to the page!</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
