import React from 'react'
import tick from '../assets/tick.png'
import untick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text, id, status, deleteTask, check}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

        <div onClick={() => {check(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={status ? tick : untick} alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${status ? 'line-through' : ''}`}>{text}</p>
        </div>

        <img onClick={() => {deleteTask(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer'/>

    </div>
  )
}

export default TodoItems