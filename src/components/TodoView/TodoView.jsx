import React from 'react'

const TodoView = () => {
  return (
    <div>
      <section>
        <h1>Lista de tareas</h1>
      </section>
      <section>
        <form>
          <input type="text" />
          <button>agregar tarea</button>
        </form>
      </section>
      <section>
        <ul>
          <li>tarea 1</li>
          <li>tarea 2</li>
          <li>tarea 3</li>
        </ul>
      </section>
    </div>
  )
}

export default TodoView