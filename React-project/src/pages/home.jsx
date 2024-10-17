import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="p-3">
        <p>Count:{count}</p>

        <button
          className="rounded-lg bg-red-400 p-2  "
          onClick={() => setCount(count + 1)}
        >
          Incriment
        </button>
        <button
          className="rounded-lg bg-red-400 p-2  mx-4"
          onClick={() => setCount(count - 1)}
        >
          decriment
        </button>
      </div>
    </div>
  );
};

export default Home;
