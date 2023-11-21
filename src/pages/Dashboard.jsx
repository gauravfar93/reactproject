import React from "react";
import "../pages/dashboard.css";
import { Progress } from "../components/Progress";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const progressArray = [
  {
    title: "Productivity on Monday",
    percentage: 4,
  },
  {
    title: "Productivity on Tueday",
    percentage: 92,
  },
  {
    title: "Productivity on Wednesday",
    percentage: 50,
  },
  {
    title: "Productivity on Thursday",
    percentage: 93,
  },
  {
    title: "Productivity on Friday",
    percentage: 80,
  },
  {
    title: "Productivity on Saturday",
    percentage: 90,
  },
];
export const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className="dashContainer">
      {/* <div className="dashNav">
        <img src="./images/userCall.png" alt="icon" />
      </div>
      <div className="dashLogo">
        <img src="./images/dashLogo.png" alt="dashlogo" />
      </div> */}
      
      <div className="dashHeadingContainer">
        <p className="dashHeading">Employee Productivity Dashboard</p>
      </div>
      {/* Progress */}
      <div className="progressContainer">
        {progressArray.map((ele, i) => {
          return (
            <div key={i}>
              <div className="percentageItemsContainer">
                <p className="dashPercentageTitle">{ele.title}</p>
                <p className="dashPercentage">{`${ele.percentage}%`}</p>
              </div>
              <Progress percentage={ele.percentage} />
            </div>
          );
        })}
      </div>
     
    </div>
     {/* Footer */}
     <Footer/>
    </>
  );
};
