'use client'
import { useState, useEffect } from 'react'

export default function CardTitle({title, handleTitleChange}) {
  // const [currentTitle, setCurrentTitle] = useState(initialTitle || '');

  // useEffect(() => {
  //   console.log('inside useEffect')
  //   if(initialTitle) {
  //     setCurrentTitle(initialTitle);
  //   }
  // }, [initialTitle]);
  
  const fontSize = 19
  return (
    <div className='h-[50px] bg-primary rounded-[10px] flex items-center justify-between hover:bg-primary-light'>
        {/* <div className='mx-[17px]'> */}
          <input 
              className={`pl-[17px] w-full h-full text-white text-[${fontSize}px] bg-transparent placeholder-[#C8C6C2] focus:outline-none`} 
              type="text" 
              placeholder='Enter the name of your list here...'
              value={title}
              onChange={handleTitleChange}
            /> 
            {/* : <p className='text-white text-[19px] font-medium'>{title}</p>
          } */}
        {/* </div> */}
          {/* // value={title} 
          // onChange={handleChange} /> */}
        {/*  */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 24 24" width="34">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z" fill="white"/>
        </svg> */}
    </div>
  )
}
