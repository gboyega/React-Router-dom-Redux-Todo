 import React from "react";

 const Todo = ({onCtext, completed}) => (
   <li onClick={onClick} style={{textDecoration:completed? 'line-through':'none'}}>
     {text}
   </li>
 );

 export default Todo;