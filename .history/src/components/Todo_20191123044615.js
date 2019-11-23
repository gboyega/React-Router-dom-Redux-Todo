 import React from "react";

 const Todo = ({text, completed}) => (
   <li style={{textDecoration:completed? 'lin'}}>
     {text}
   </li>
 );

 export default Todo;