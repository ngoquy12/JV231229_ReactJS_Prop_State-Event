import React from "react";

export default function EventComponent() {
  // Tên sự kiện viết theo nguyên tắc camel case
  // Tên hàm nên bắt đầu với tiền tố handle+chức năng
  // Sử dụng arrow function
  // Mỗi hàm được viết ra chúng ta phải có comment đầy đủ

  const handleClick = (event) => {
    console.log("Event: ", event.target);
  };

  const handleChange = (event) => {
    console.log("Value: ", event.target.value);
  };

  const users = [
    {
      id: 1,
      name: "A",
    },
    {
      id: 2,
      name: "A",
    },
    {
      id: 3,
      name: "A",
    },
  ];

  /**
   * Hàm xóa thông tin một user theo id
   * @param {*} id Id của user cần xóa
   * @returns ...
   * Author: NVQUY (25/06/2024)
   */
  const handleDelete = (id) => {
    console.log("Id delete: ", id);
    return 1;
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <input type="text" onChange={handleChange} />

      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>
                  <button>Sửa</button>
                  <button onClick={() => handleDelete(user.id)}>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
