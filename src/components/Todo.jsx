import React from "react";
import { useState } from "react";
import Model from "./Model.jsx";

function Todo(props) {
  const [modelOpen, makeModelOpen] = useState(false)

  function deleteHandler() {
    makeModelOpen(true)
  }


  return (
    <div className="col-8 text-end p-3 border border-dark bg-grey">
      <h1 className="text-center">{props.title}</h1>
      <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">Delete</button>
      <Model />
    </div>
  )
}

export default Todo;