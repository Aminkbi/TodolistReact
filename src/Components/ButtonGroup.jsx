import React, { useState } from "react";

function ButtonGroup({ theme, setprioritychange }) {
  const [activeButton, setActiveButton] = useState("ALL");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="container mx-auto flex h-16 items-center p-1">
      <button
        className={`w-1/4 rounded-l border-2 hover:cursor-pointer ${
          activeButton === "ALL" && theme === "dark"
            ? "scale-90 border-0 bg-slate-500 text-white transition-transform duration-500"
            : activeButton === "ALL" && theme !== "dark"
            ? "scale-90 border-0 bg-slate-300 transition-transform duration-500"
            : activeButton !== "ALL" && theme === "dark"
            ? "bg-slate-600 text-white"
            : "bg-slate-200"
        }`}
        onClick={() => {
          handleButtonClick("ALL");
          setprioritychange("ALL");
        }}
      >
        ALL
      </button>

      <button
        className={`w-1/4  border-y-2   hover:cursor-pointer ${
          activeButton === "Urgent" && theme === "dark"
            ? "scale-90 border-y-0 bg-red-500 text-white transition-transform duration-500"
            : activeButton === "Urgent" && theme !== "dark"
            ? "scale-90 border-y-0 bg-red-300 transition-transform duration-500"
            : activeButton !== "Urgent" && theme === "dark"
            ? "bg-red-600 text-white"
            : "bg-red-200"
        }`}
        onClick={() => {
          handleButtonClick("Urgent");
          setprioritychange("Urgent");
        }}
      >
        Urgent
      </button>
      <button
        className={`w-1/4 border-y-2 border-l-2  hover:cursor-pointer ${
          activeButton === "Important" && theme === "dark"
            ? "scale-90 border-0 border-y-0 border-l-0  bg-orange-500 text-white transition-transform duration-500"
            : activeButton === "Important" && theme !== "dark"
            ? "scale-90 border-y-0 border-l-0 bg-orange-300 transition-transform duration-500"
            : activeButton !== "Important" && theme === "dark"
            ? "bg-orange-600 text-white"
            : "bg-orange-200"
        }`}
        onClick={() => {
          handleButtonClick("Important");
          setprioritychange("Important");
        }}
      >
        Important
      </button>
      <button
        className={`w-1/4 rounded-r border-2 hover:cursor-pointer ${
          activeButton === "Low Priority" && theme === "dark"
            ? "scale-90 border-0 bg-yellow-500 text-white transition-transform duration-500"
            : activeButton === "Low Priority" && theme !== "dark"
            ? "scale-90 border-0 bg-yellow-300 transition-transform duration-500 "
            : activeButton !== "Low Priority" && theme === "dark"
            ? "bg-yellow-600 text-white"
            : "bg-yellow-200"
        }`}
        onClick={() => {
          handleButtonClick("Low Priority");
          setprioritychange("Low Priority");
        }}
      >
        Low Priority
      </button>
    </div>
  );
}

export default ButtonGroup;
