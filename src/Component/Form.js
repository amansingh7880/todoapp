import { useEffect } from "react";
import React from 'react'
import {v4 as uuidv4} from "uuid";
const Form = ({input,setInput,todos,setTodos,editTodo,setEditTodo}) => {
    const updateTodo=(title,id,save)=>{
        const newTodo =todos.map((todo)=>
            todo.id === id ?{title,id,save}:todo
        )
        setTodos(newTodo);
        setEditTodo("");
    }
    useEffect(()=>{
       if(editTodo){
        setInput(editTodo.title)
       }
       else{
        setInput("");
       }
    },[setInput,editTodo]);

    const inputchange=(event)=>{
        setInput(event.target.value);
    };
    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!editTodo)
        {
            setTodos([...todos ,{id: uuidv4(),title:input ,save: false}]);
            setInput("");
        }
        else
        {
            updateTodo(input,editTodo.id,editTodo.save);
        }
    };
    return (
    <form onSubmit={onFormSubmit}>
        <input type='text' placeholder='Enter a Add list...' className='task-input' value={input} required onChange={inputchange}/>
        <button className='btn-add' type='submit'>
            {editTodo?"Ok" :"Add"}
        </button>
    </form>
  )
}

export default Form