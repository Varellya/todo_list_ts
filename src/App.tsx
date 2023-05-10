import React, { useState } from "react";
import { INote } from "./utils/types";

export default function App() {
  const [toDoList, setToDoList] = useState<INote[]>([]);
  const [item, setItem] = useState('');

  const addNewItem = () => {
    setToDoList(toDoList.concat({id: Date.now(), completed: false, note: item}));
    setItem('');
  };

  const taskCompleted = (id: number) => {
    setToDoList(toDoList.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      };

      return item;
    }));
  };

  const deleteItem = (id: number) => {
    setToDoList(toDoList.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1 className="toDoTitle">ToDo List</h1>

      <ul className="toDoList">
        {toDoList.map(item => (
          <li key={item.id} className={`toDoItem  ${item.completed ? 'completed' : ''}`}>
            <input type="checkbox" name="state" onClick={() => taskCompleted(item.id)} />
            <p>{item.note}</p>
            <button onClick={() => deleteItem(item.id)} >
              <img src="../../img/delete.png" alt="" />
            </button>
          </li>
        ))}
      </ul>

      <form className="appForm" action="" method="get">
          <input type="text" id="get_note" value={item} onChange={(e) => setItem(e.target.value)} />
          <button type="button" onClick={() => addNewItem()} >
            <img src="../../img/add.png" alt="" />
          </button>
        </form>
    </div>
  );
};
