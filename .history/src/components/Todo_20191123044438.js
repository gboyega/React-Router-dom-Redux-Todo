 import React from "react";

 const Todo = ({ to }) => (
   <ul>
     {todos.map(todo => (
       <Todo key={todo.id} {...todo} />
     ))}
   </ul>
 );

 export default Todo;