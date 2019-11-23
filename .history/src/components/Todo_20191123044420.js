 import React from "react";
 import Todo from "./Todo";

 const TodoL = ({ todos }) => (
   <ul>
     {todos.map(todo => (
       <Todo key={todo.id} {...todo} />
     ))}
   </ul>
 );

 export default Todo;