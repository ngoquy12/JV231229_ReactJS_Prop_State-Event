import React from "react";

export default function ChildrenComponent({ company, userName }) {
  return (
    <div>
      <h2>Tên công ty: {company}</h2>
      <h2>Họ tên: {userName}</h2>
    </div>
  );
}
