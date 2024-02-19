import React from "react";
import "../todo.css";

const ToDoCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-header">Todo Card</div>
        <div className="card-body">
          <div className="todo-title">{props.title}</div>
          <div className="todo-id">ID: {props.id}</div>
          <div className="completed-checkbox">
            <input
              type="checkbox"
              id="completedCheckbox"
              checked={props.status}
            />
            <label className="checkbox-label" htmlFor="completedCheckbox">
              Completed
            </label>
          </div>
          <div className="icon-container mt-3">
            <span className="edit-icon">✏️</span>
            <span className="delete-icon">❌</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoCard;
