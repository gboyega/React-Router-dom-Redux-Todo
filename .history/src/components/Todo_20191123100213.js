 import React from "react";

 const Todo = ({onClicktext, completed}) => (
   <li onClick={onClick} style={{textDecoration:completed? 'line-through':'none'}}>
     {text}
   </li>
 );

 export default Todo;