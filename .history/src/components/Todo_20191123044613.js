 import React from "react";

 const Todo = ({text, completed}) => (
   <li style={{textDecoration:completed? ''}}>
     {text}
   </li>
 );

 export default Todo;