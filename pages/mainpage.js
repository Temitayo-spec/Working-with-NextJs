import React, { useState } from "react";
import Sidebar from "../comps/Sidebar";
import { CardData } from "../comps/CardData";
function mainpage() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(CardData);

  const excludeColumns = ["image"];

  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };
  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setData(CardData);
    } else {
      const filteredData = CardData.filter((item) => {
        return Object.keys(item).some((key) => {
          return excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setData(filteredData);
    }
  };

  return (
    <div className="mainpage_wrapper">
      <Sidebar />

      <main className="main-section">
        <section className="section-a">
          <header>
            <div className="main-heading">
              <h2>Dashboard</h2>
            </div>
            <div className="filter">
              <input
                type="text"
                placeholder="Search Courses"
                value={searchText}
                onChange={(e) => handleChange(e.target.value)}
              />
              <span>
                <svg
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                  onClick={(e) => handleChange(e.target.value)}
                >
                  <circle
                    cx="7.95181"
                    cy="7.95181"
                    r="7.95181"
                    fill="#6176AE"
                  />
                  <circle
                    cx="7.95181"
                    cy="7.95181"
                    r="7.95181"
                    stroke="#6176AE"
                  />
                  <path
                    d="M8.34943 8.34943L15.1085 16.5"
                    stroke="#6176AE"
                    strokeWidth="3.57831"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="8.06678"
                    cy="8.06678"
                    r="4.88605"
                    fill="#D9DDE6"
                  />
                </svg>
              </span>
            </div>
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="name">
              <p>Hi Favour</p>
            </div>
          </header>
        </section>
        <section className="section-b">
          <p>Briefs</p>
          <div className="boxs">
            <div className="box box-one"></div>
            <div className="box box-two"></div>
          </div>
        </section>
        <section className="section-c">
          <p className="label">Continue Learning</p>
          <div className="card">
            {data.map((val, key) => {
              return (
                <div key={key} className="cards card-one">
                  <img src={val.image} />
                  <div className="card-title">
                    <h2>{val.title}</h2>
                    <div className="faculty">
                      <div className="small-circle"></div>
                      <p>{val.faculty}</p>
                    </div>
                  </div>
                  <button type="submit">Enter Classroom</button>
                </div>
              );
            })}
          </div>
          {data.length === 0 && <span>No records found to be displayed!!</span>}
        </section>
      </main>
    </div>
  );
}

export default mainpage;
