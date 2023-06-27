import React from "react";

function Todo(props) {

  return (
    <div className="col-8 text-end p-3 border border-dark bg-grey">
      <h1 className="text-center">{props.title}</h1>
      <button className="btn btn-dark">Delete</button>
    </div>
  )
}

export default Todo;