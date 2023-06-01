import React from "react";
import ThemeChanger from "./ThemeChanger";
import TodoList from "./TodoList";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [countDone, setCountDone] = useState(0);
  const [countRemaining, setCountRemaining] = useState(null);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const tasksDone = (items) => {
    const counting = items.filter((item) => item.completed === true).length;
    setCountDone(counting);
  };

  const tasksRemaining = (items) => {
    const counting = items.filter((item) => item.completed === false).length;
    setCountRemaining(counting);
  };

  return (
    <div
      className={
        theme === "dark"
          ? "h-full overflow-auto bg-gray-900 p-5"
          : "App h-full overflow-auto bg-white p-5"
      }
    >
      <div className={`container flex  align-middle `}>
        <div className="flex w-[50%] items-center align-middle">
          <ThemeChanger toggleTheme={toggleTheme} theme={theme} />
        </div>
        <div className="flex w-[50%] flex-col md:flex-row md:justify-between">
          <div className="mb-3 flex items-center rounded-lg bg-green-200 p-4 font-bold shadow-md md:mb-0">
            <h1>Tasks Completed</h1>
            <span className="ml-5 md:ml-12">{countDone}</span>
          </div>
          <div className="flex items-center  rounded-lg bg-red-200 p-4 font-bold shadow-md">
            <h1>Tasks Remaining</h1>
            <span className="ml-5 md:ml-12">{countRemaining}</span>
          </div>
        </div>
      </div>
      <TodoList
        theme={theme}
        tasksDone={tasksDone}
        tasksRemaining={tasksRemaining}
      />
    </div>
  );
};

export default App;
