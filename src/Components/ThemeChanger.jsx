import React from "react";
const ThemeChanger = ({ toggleTheme, theme }) => {
  return (
    <div>
      <button
        onClick={toggleTheme}
        className={`${
          theme === "dark"
            ? "transform rounded bg-white px-4 py-2 font-bold text-black transition-all duration-500 hover:scale-105 hover:bg-slate-300"
            : "transform rounded bg-black px-4 py-2 font-bold text-white transition-all duration-500 hover:scale-105 hover:bg-gray-700"
        }`}
      >
        {theme === "light" ? "Dark" : "Light"} Theme
      </button>
    </div>
  );
};

export default ThemeChanger;
