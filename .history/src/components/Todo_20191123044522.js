 import React from "react";

 const Todo = ({text, completed}) => (
   <li>
     {todos.map(todo => (
       <Todo key={todo.id} {...todo} />
     ))}
   </>
 );

 export default Todo;