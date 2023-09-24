import React, { useState } from "react";

const [tarea, setTarea] = useState('');

cosnt [form, setForm] = useState('');


//estado de tareas
//estado de form
//evento de submit en el boton add 

/*
[tareas].map(tarea)=> {
    return {
        <ul>
          <div
            style={{
              display: "flex",
              width: "300px",
              justifyContent: "space-between",
              border: "1px solid #fff",
              alignItems: "center",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            <input type="checkbox" name="" id="" />
            <li>tarea 1</li>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>
        </ul>
    }
}
*/

const TodoView = () => {
  return (
    <div>
      <h1>To Do List</h1>

      <section>
        <h2>List</h2>
        <ul>
          <div
            style={{
              display: "flex",
              width: "300px",
              justifyContent: "space-between",
              border: "1px solid #fff",
              alignItems: "center",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            <input type="checkbox" name="" id="" />
            <li>tarea 1</li>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <button>edit</button>
              <button>delete</button>
            </div>
          </div>
        </ul>
      </section>
      <form>
        <input type="text" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoView;
