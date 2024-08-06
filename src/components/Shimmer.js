import React from 'react'
import Loader from '../utils/Loader'
export const Shimmer = () => {
  return (
    <div className='relative '>
      <div className='flex flex-col justify-center items-center h-[230px] bg-slate-600'>
        <div className='mt-20 rounded-full '><Loader /></div>
        
      </div>
      <div className='flex flex-col justify-center items-center  bg-slate-600'>
      <div className='text-2xl text-white mb-4'>Looking For yummy food near you...</div>
        
      </div>
   <h1 className=' w-72 h-5 bg-gray-200 m-4 ml-10 rounded-lg'></h1>
    
        <div className='flex flex-wrap m-4 justify-center'>
      {[1,2,3,4,5,6,7,8,9,10].map(i=>{
  return  <div key={i} className='w-[250px] h-[250px] bg-gray-200 m-2 border rounded-md '></div>
      })}
    </div>
    </div>
  
  )
}
