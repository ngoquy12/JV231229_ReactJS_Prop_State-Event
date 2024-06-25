import React, { useState } from "react";

export default function StateComponent() {
  // Tạo state cho một component
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  console.log("render");
  // trong lần đầu khi component được render thì count nhận giá trị  = 0
  // render & re-render

  const handleCount = () => {
    // Cập nhật state của biến count
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleCount}>Count</button>

      <div>Input value: {value}</div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
