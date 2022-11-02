import React, { useState, useEffect } from "react";
import "./Todo.css";
const getLocalItmes = () => {
  let list = localStorage.getItem("lists");


  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItmes());
  
  const addItem = () => {
    if (!inputData) {
    } 
      setItems([...items, inputData]);
      setInputData("");
    }
  


  const deleteItem = (id) => {
    const updateditems = items.filter((elem, index) => {
      return index !== id;
    });
    setItems(updateditems);
  };

  const removeAll = () => {
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h2>Abhishek Todo List</h2>
          <div className="addItems">
            <input
              type="text"
              placeholder=" Enter task"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)} />
              <i
                className="fa fa-plus add-btn"
                title="Add Item"
                onClick={addItem} ></i>
          </div>

          <div className="showItems">
            {items.map((elem , index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{elem}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(index)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span> REMOVE ALL</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
        }

export default Todo;
