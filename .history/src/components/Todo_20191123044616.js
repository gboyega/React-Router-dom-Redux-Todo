 import React from "react";

 const Todo = ({text, completed}) => (
   <li style={{textDecoration:completed? 'line'}}>
     {text}
   </li>
 );

 export default Todo;