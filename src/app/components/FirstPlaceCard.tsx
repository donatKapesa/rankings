import React from 'react'
import Image from 'next/image'

export default function FirstPlaceCard() {
  return (
    <div className="h-[244px] w-full bg-metallic-gold bg-cover flex justify-between py-2 px-10 rounded-lg overflow-hidden shadow-first-place">
        <div className='flex items-center flex-col'>
        <div className='w-[128px] h-[128px] relative'>
            <Image 
            src="/gold-medal-1-cropped.png" 
            fill
            alt="Medal Image" 
            style={{objectFit:"contain", objectPosition: "bottom"}}
            />
        </div>
        <div className="text-black text-[28px] leading-[36px]">
            Ronaldo
        </div>
        </div>
        <div className='w-[168px] h-[168px] relative overflow-hidden rounded-full'>
        <Image
            src="/ronaldo.png"
            fill
            alt="image"
            style={{objectFit:"cover"}}
        />
        </div>
    </div>
  )
}
