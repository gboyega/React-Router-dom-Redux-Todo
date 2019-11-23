 import React from "react";

 const Todo = ({text, comple}) => (
   <ul>
     {todos.map(todo => (
       <Todo key={todo.id} {...todo} />
     ))}
   </ul>
 );

 export default Todo;