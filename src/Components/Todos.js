import React from 'react'
import { TodoItem } from "./TodoItem";
import TableHead from './tableHead';

export const Todos = (props) => {
  const style={
    borderCollapse: 'separate',
    borderSpacing:'0 20px',
  }
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>

      <table className="table table-sm table-dark" style={style}>
        <TableHead/>
        {props.todos.map((todoe) => {
          return <TodoItem todo={todoe} key={todoe.id} onDelete={props.onDelete} onClicked={props.onClicked} />
        })}
      </table>
    </div>
  )
}