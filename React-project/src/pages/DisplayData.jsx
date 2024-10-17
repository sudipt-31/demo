DisplayData.jsx;

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function DisplayData() {
//   const location = useLocation();
//   const { name, email } = location.state;

//   return (
//     <div className="flex flex-col items-center p-4">
//       <div className="p-4 border rounded shadow">
//         <h2 className="text-xl font-bold mb-2">Submitted Data</h2>
//         <p><strong>Name:</strong> {name}</p>
//         <p><strong>Email:</strong> {email}</p>
//       </div>
//     </div>
//   );
// }

// export default DisplayData;

import React from "react";
import { useLocation } from "react-router-dom";

function DisplayData() {
  const location = useLocation();
  const { name, email } = location.state;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="p-4 border rounded shadow">
        <h2 className="text-xl font-bold mb-2">Submitted Data</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}

export default DisplayData;
