import React from "react";
import ParentComponent from "./components/ParentComponent";
import StateComponent from "./components/StateComponent";
import EventComponent from "./components/EventComponent";

export default function App() {
  const jobName = "Developer";
  const salary = 1000;
  return (
    <div>
      {/* <ParentComponent jobName={jobName} salary={salary} /> */}
      <StateComponent />
      {/* <EventComponent /> */}
    </div>
  );
}
