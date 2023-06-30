import React from 'react'
import Image from 'next/image'

export default function DetailedRankingCardV2() {
  return (
    <div className='mb-48'>
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 rounded-lg w-[506px] h-[244px] overflow-hidden shadow-first-place">
        <div className="flex-none">
            <Image src="/gold-medal-2.png" alt="Medal Image" width={50} height={50} objectFit="contain" />
        </div>
        <div className="w-24 h-24 relative rounded-full overflow-hidden">
            <Image
                src="/ronaldo.png"
                alt="Ronaldo Image"
                fill
                className="object-cover"
            />
        </div>
        </div>

        <div className='rounded-[10px] h-[130px] overflow-hidden border-[#4F4F4F] shadow-custom'>
        </div>
        <div className='rounded-[10px] h-[130px] overflow-hidden border-[#4F4F4F] shadow-custom'>
        </div>
    </div>
  )
}
