import React from 'react'
import tick from '../assets/tick.png'
import nottick from '../assets/nottick.png'
import delete_8 from '../assets/delete_8.png'
const TODOitem = ({text,id , isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img  className='w-7'  src={ isComplete?tick :nottick}  />
            <p className={`text-slate-500 ml-4 text-[17px] decoration-slate-500 ${isComplete?"line-through":""}`}>{text}</p>
        </div>
        <img 
     onClick={() => deleteTodo(id)} 
     className='w-6.5 cursor-pointer' 
     src={delete_8} 
     alt="Delete Todo" 
/>


      
    </div>
  )
}

export default TODOitem



