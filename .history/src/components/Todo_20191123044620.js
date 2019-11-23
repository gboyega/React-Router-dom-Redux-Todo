 import React from "react";

 const Todo = ({text, completed}) => (
   <li style={{textDecoration:completed? 'line-thr'}}>
     {text}
   </li>
 );

 export default Todo;