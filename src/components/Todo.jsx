import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
    const inputRef = useRef();

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = () => {
        const inputText = inputRef.current.value.trim();
        
        if (inputText === '') {
            return null;
        } 

        const newTask = {
            id: Date.now(),
            task: inputText,
            status: false,
        }

        setTasks((prev) => [...prev, newTask]);
        inputRef.current.value = ''
        inputRef.current.focus();
    }

    const deleteTask = (id) => {
        setTasks((prevTasks) => {
           return prevTasks.filter((task) => task.id !== id)
        })
    }

    const check = (id) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id === id) {
                    return {...task, status: !task.status}
                }
                return task;
            })
        })
    }

    

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        
        {/* ------ Title ------ */}

        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="" />
            <h1 className='text-3xl font-semibold drop-shadow-[-1.5px_1.5px_#FF4C24]'>To-Do List</h1>
        </div>


        {/* ------ Input Box ------ */}

        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" 
            placeholder='Add a task...'/>
            <button onClick={addTask} className='border-none rounded-full bg-[#FF4C24] w-32 h-14 text-white text-lg font-medium cursor-pointer'>
            ADD</button>
        </div>


        {/* ------ Todo List ------ */}

        <div>
            {tasks.map((item, index) => {
                return <TodoItems key={index} text={item.task} id={item.id} status={item.status} deleteTask={deleteTask} check={check}/>
            })}
        </div>

    </div>
  ) 
}

export default Todo