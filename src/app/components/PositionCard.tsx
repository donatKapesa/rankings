import React from 'react'
import Image from 'next/image';

export default function PositionCard({pos}) {
  // TODO: try with/without mb-[1px] on each position component
  return (
    <div className='flex p-5 items-center rounded-[10px] h-[130px] shadow-custom mb-[1px] bg-white'>
      <div className='font-bold text-lg'>{pos}</div>
      <div className='w-[78px] h-[78px] mx-5 relative overflow-hidden rounded-full'>
        <Image
          src='/witcher.jpg'
          fill
          alt='wicher image'
          style={{objectFit:"cover"}} />
      </div>
      <p className='text-[28px]'>The Witcher</p>
    </div>
  )
}
