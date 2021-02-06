import React, { useState } from "react";
import "./styles.css";
import Modal from "./Modal";
export default function App() {
  const [isopen, setIsOpen] = useState("false");
  return (
    <div>
      <ul>
        <li className="head-parti">
          <h3> Participants</h3>
        </li>
        <div className="content">
          <li>user</li>
          <li>user</li>
          <li>user</li>
          <li>user</li>
          <li>user</li>
          <li>user</li>
        </div>
      </ul>
      <div className="head">
        <ul className="date-time">
          <li className="date">
            2 Feb 2020
            <li className="time"> 9am-9pm</li>
          </li>
          <li className="date">
            5 Feb 2020
            <li className="time"> 9am-9pm</li>
          </li>
        </ul>
      </div>
      <div className="main">
        <div className="button">
          <Modal open={isopen} onClose={() => setIsOpen(false)} />
          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>

          <button onClick={() => setIsOpen(true)}></button>
        </div>
      </div>
    </div>
  );
}
