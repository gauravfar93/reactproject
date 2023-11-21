import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "./employees.css";
import { IoMdSearch } from "react-icons/io";

const employees = [
  {
    id: 1,
    name: "Arjun",
    dob: "16-11-2000",
    role: "Software Engineer",
  },
  {
    id: 2,
    name: "Mahesh",
    dob: "15-01-1995",
    role: "Web Developer",
  },
  {
    id: 3,
    name: "Dinesh",
    dob: "16-02-2000",
    role: "Graphic Designer",
  },
  {
    id: 4,
    name: "Gaurav",
    dob: "18-07-1996",
    role: "React Devloper",
  },
  {
    id: 5,
    name: "Priya",
    dob: "17-07-1998",
    role: "HTML Developer",
  },
  {
    id: 6,
    name: "Braj",
    dob: "12-6-2000",
    role: "Backend Developer",
  },
  {
    id: 7,
    name: "Suraj",
    dob: "15-12-2000",
    role: "Frontend Developer",
  },
  {
    id: 8,
    name: "Anubha",
    dob: "18-06-1995",
    role: "Angular Developer",
  },
];
export const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="employeesContainer">
        <div className="search">
          <input
            type="search"
            className="searchBar"
            placeholder="Search with name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoMdSearch color="white" />
        </div>
        <div className="employeesData">
          {filteredEmployees.length === 0 ? (
            <p style={{ color: "white", textAlign: "center" }}>
              No matching names found.
            </p>
          ) : (
            filteredEmployees.map((ele, i) => (
              <div key={ele.id} className="employeeDataContainer">
                <p>
                  Emp ID : <span style={{ fontWeight: "bold" }}>{ele.id}</span>
                </p>
                <p>
                  Name : <span style={{ fontWeight: "bold" }}>{ele.name}</span>
                </p>
                <p>
                  DOB :{" "}
                  <span style={{ fontWeight: "bold", color: "#86591d" }}>
                    {ele.dob}
                  </span>
                </p>
                <p>
                  Role :{" "}
                  <span style={{ fontWeight: "bolder", color: "#297235" }}>
                    {ele.role}
                  </span>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
