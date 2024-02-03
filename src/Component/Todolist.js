import React from 'react'
const Todolist = ({todos,setTodos,setEditTodo}) => {

  const handelSave=(todo)=>{
    setTodos(
      todos.map((item)=>{
        if(item.id===todo.id)
        {
          return{...item,save: !item.save}
        }
        return item;
      })
    );
  };
  const handelEdit=({id})=>{
    const findlist=todos.find((todo) =>todo.id === id);
    setEditTodo(findlist);
  }

  const Deleteitem=({id})=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  };

  return (
    <div>
      {todos.map((todo)=>(
          <li className="list-item" key={todo.id}>
            <input type="text" value={todo.title} className={`list ${todo.save ?"save":""}`} onChange={(event)=>event.preventDefault()}
            />
            <div className='allbtn'>
              <button className='btn-save task-btn'  onClick={()=>handelSave(todo)}><i className='fa fa-check-circle'></i></button>
              <button className='btn-edit task-btn' onClick={()=> handelEdit(todo)}><i className='fa fa-edit'></i></button>
              <button className='btn-delete task-btn' onClick={()=>Deleteitem(todo)}><i className='fa fa-trash'></i></button>

            </div>
          </li>
        ))
      }
    </div>
  )
}

export default Todolist
