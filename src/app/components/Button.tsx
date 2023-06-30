import React from 'react'

export default function Button({text, width, height, fontSize}) {
  return (
    <div className={`text-white bg-primary w-[${width}px] h-[${height}px] rounded-[25px] shadow-button flex items-center justify-center`}>
        <p className={`font-normal text-[${fontSize}px]`}>
            {text}
        </p>
    </div>
  )
}
