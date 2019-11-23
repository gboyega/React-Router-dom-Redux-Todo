 import React from "react";

 const Todo = ({text,}) => (
   <ul>
     {todos.map(todo => (
       <Todo key={todo.id} {...todo} />
     ))}
   </ul>
 );

 export default Todo;