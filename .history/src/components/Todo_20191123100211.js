 import React from "react";

 const Todo = ({ontext, completed}) => (
   <li onClick={onClick} style={{textDecoration:completed? 'line-through':'none'}}>
     {text}
   </li>
 );

 export default Todo;