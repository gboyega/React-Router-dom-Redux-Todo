 import React from "react";

 const Todo = ({text, completed}) => (
   <li style={{textDecoration:completed? 'line-through':'no'}}>
     {text}
   </li>
 );

 export default Todo;