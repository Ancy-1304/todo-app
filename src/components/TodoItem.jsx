function TodoItem({ task, onDelete }) {
   return (
     <li>
       {task}
       <button className="delete" onClick={onDelete}>Delete</button>
     </li>
   );
 }
 
 export default TodoItem;
 