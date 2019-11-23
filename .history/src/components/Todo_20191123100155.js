 import React from "react";

 const Todo = ({text, completed}) => (
   <li onCl style={{textDecoration:completed? 'line-through':'none'}}>
     {text}
   </li>
 );

 export default Todo;