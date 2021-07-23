import React from "react";
import Sidebar from "../comps/Sidebar";
import { CardData } from "../comps/CardData";
function mainpage() {
  return (
    <div className="mainpage_wrapper">
      <Sidebar />
      <main className="main-section">
        <section className="section-a">
          <header>
            <div className="main-heading">
              <h2>Courses</h2>
            </div>

            <div className="tag">
              <div className="circle one"></div>
              <div className="circle two"></div>
            </div>
            <div className="name">
              <p>Hi Favour</p>
            </div>
          </header>
        </section>
        <section className="first-section">
          <div className="navigator">
            
          </div>
        </section>
      </main>
    </div>
  );
}

export default mainpage;
