import React, { useState } from "react";

const Form = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
  });
  const [entries, setEntries] = useState([]);

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const addEntry = () => {
    setEntries([...entries, inputData]);
    setInputData({ name: "", email: "" }); // Clear the input fields after submission
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submit the form</h1>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={inputData.name}
          onChange={changeHandle}
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={inputData.email}
          onChange={changeHandle}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        className="bg-red-500 p-1 my-4 rounded-lg px-4"
        onClick={addEntry}
      >
        Add it
      </button>

      <table
        border={1}
        cellPadding={10}
        className="  border border-collapse border-black"
      >
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((info, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{info.name}</td>
              <td className="border border-gray-300 p-2">{info.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
