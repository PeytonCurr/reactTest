import React, { useState } from "react";
import { AppState } from "../AppState.js";
import Todo from "../components/Todo.jsx";

export default function HomePage() {
  const [cnt, setCount] = useState(0)
  AppState.pickle = cnt

  return (
    <div className="home-page container my-3">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="card">
            <div className="card-body">
              <button className="btn btn-success my-1" onClick={() => setCount((c) => c + 1)}>
                count is {AppState.pickle}
              </button>
            </div>
          </div>
        </div>

        <Todo title="Todo1" />
        <Todo title="Todo2" />
        <Todo title="Todo3" />

      </div>
    </div>
  )
}