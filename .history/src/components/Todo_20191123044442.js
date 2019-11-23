 import React from "react";

 const Todo = ({t}) => (
   <ul>
     {todos.map(todo => (
       <Todo key={todo.id} {...todo} />
     ))}
   </ul>
 );

 export default Todo;