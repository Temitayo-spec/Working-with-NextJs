import React from 'react';
import Link from "next/link";
import { SidebarData } from "../comps/SidebarData";

function Sidebar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <img src="/image 2.svg" alt="Learnovate logo" />
        <h2>Learnovate</h2>
      </div>

      <ul className="nav-links">
        {SidebarData.map((val, key) => {
          if (typeof window !== "undefined") {
            return (
              <li
                onClick={() => {
                  window.location.pathname = val.link;
                }}
                key={key}
                className={window.location.pathname == val.link ? "active" : ""}
              >
                <a>
                  <span>{val.icon}</span>
                  {val.title}
                </a>
                {window.location.pathname == val.link ? (
                  <div className="colored"></div>
                ) : (
                  ""
                )}
              </li>
            );
          }
        })}
        ;
        <div className="log-out">
          <h3>
            <Link href="#">
              <a>Log Out</a>
            </Link>
          </h3>
        </div>
      </ul>
    </nav>
  );
}

export default Sidebar
