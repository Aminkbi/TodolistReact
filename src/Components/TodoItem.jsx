import React from "react";

const TodoItem = ({
  id,
  title,
  completed,
  toggleCompleted,
  deleteItem,
  theme,
  priority,
}) => {
  return (
    <div
      className={`mb-4 flex w-full items-center justify-between p-5 ${
        theme === "dark"
          ? "rounded-full border-4  border-white bg-slate-700 p-4"
          : "rounded-full border-4  border-black bg-slate-300 p-4"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-5 hover:cursor-pointer"
          checked={completed}
          onChange={() => toggleCompleted(id)}
        />
        <label
          className={`${completed ? "line-through " : ""}${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {title}
        </label>
        <div
          className={`ml-4 rounded px-2 py-1 text-sm text-white ${
            priority === "Urgent"
              ? "bg-red-500"
              : priority === "Important"
              ? "bg-orange-500"
              : priority === "Low Priority"
              ? "bg-yellow-500"
              : ""
          }`}
        >
          {priority}
        </div>
      </div>

      <button
        onClick={() => deleteItem(id)}
        className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
