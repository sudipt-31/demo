CardPage.jsx;

import React from "react";
import Card from "../components/Card";
const CardPage = () => {
  return (
    <div className="flex justify-center items-center flex-wrap p-4 bg-gray-100 min-h-screen">
      <Card
        title="this is img"
        description="thias is desc"
        image="https://i.pinimg.com/originals/71/de/0e/71de0e8fe099593c6e7660871153af83.jpg"
      />
    </div>
  );
};

export default CardPage;
