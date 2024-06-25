import React from "react";
import ChildrenComponent from "./ChildrenComponent";

export default function ParentComponent({ jobName, salary }) {
  const company = "Rikkei Academy";
  const userName = "Nguyễn Văn A";

  return (
    <div>
      <h2>ParentComponent</h2>

      <ChildrenComponent
        jobName={jobName}
        company={company}
        userName={userName}
        salary={salary}
      />
    </div>
  );
}
