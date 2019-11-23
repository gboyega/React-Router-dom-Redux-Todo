 import React from "react";
 import Todo from "./Todo";

 const Todo = ({ todos }) => (
   <ul>
     {todos.map(todo => (
       <Todo key={todo.id} {...todo} />
     ))}
   </ul>
 );

 export default Todo;