LogForm.jsx;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function LogForm() {
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate('/display', { state: formData });
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <form onSubmit={handleSubmit} className="flex flex-col w-1/2 mb-8">
//         <label className="mb-2">
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </label>
//         <label className="mb-2">
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border p-2 rounded w-full"
//           />
//         </label>
//         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded mt-4">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LogForm;

import React from "react";
import { useNavigate } from "react-router-dom";

function LogForm({ formData, handleChange }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/display", { state: formData });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <form onSubmit={handleSubmit} className="flex flex-col w-1/2 mb-8">
        <label className="mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>
        <label className="mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        >
          Submit
        </button>
      </form>
      <div className="p-4 border rounded shadow mt-4">
        <h2 className="text-xl font-bold mb-2">Current Form Data</h2>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
      </div>
    </div>
  );
}

export default LogForm;
