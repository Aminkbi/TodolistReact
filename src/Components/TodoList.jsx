import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import ButtonGroup from "./ButtonGroup";
const TodoList = ({ theme, tasksDone, tasksRemaining }) => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState("Urgent");
  const [selectedPriority, setSelectedPriority] = useState("ALL");

  useEffect(() => {
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }

    const newItem = {
      id: items.length + 1,
      title: inputValue,
      completed: false,
      priority: priority,
    };

    setItems([...items, newItem]);
    setInputValue(""); // Clear the input field
  };

  const deleteItem = (id) => {
    setItems((prevItems) =>
      prevItems
        .filter((item) => item.id !== id)
        .map((item, index) => ({ ...item, id: index + 1 }))
    );
  };

  const toggleCompleted = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  useEffect(() => {
    tasksDone(items);
  }, [items, tasksDone]);
  useEffect(() => {
    tasksRemaining(items);
  }, [items, tasksRemaining]);

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  const handleSelectedPriorityChange = (event) => {
    setSelectedPriority(event);
  };
  return (
    <div className="container mx-auto my-auto mt-8 h-[100vh] max-w-md text-center">
      <h1
        className={`text-bold text-4xl ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        Todo List
      </h1>
      <form className="flex justify-center p-5">
        <input
          type="text"
          className={` mr-5 rounded-lg border-2 border-solid p-3 ${
            theme === "dark" ? "bg-slate-600 text-white " : " border-black"
          }`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={addItem}
          className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
        >
          Add
        </button>
        <select className="p-1" name="priority" onChange={handlePriorityChange}>
          <option value="Urgent">Urgent</option>
          <option value="Important">Important</option>
          <option value="Low Priority">Low Priority</option>
        </select>
      </form>

      <ButtonGroup
        theme={theme}
        setprioritychange={handleSelectedPriorityChange}
      />
      {items
        .filter((item) => {
          if (selectedPriority === "Urgent") {
            return item.priority === "Urgent";
          } else if (selectedPriority === "Important") {
            return item.priority === "Important";
          } else if (selectedPriority === "Low Priority") {
            return item.priority === "Low Priority";
          } else {
            return true;
          }
        })
        .map((item) => (
          <TodoItem
            priority={item.priority}
            theme={theme}
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
            toggleCompleted={toggleCompleted}
            deleteItem={deleteItem}
          />
        ))}
    </div>
  );
};

export default TodoList;
