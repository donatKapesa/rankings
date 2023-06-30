import React from 'react'
import Image from 'next/image'

export default function RoundImage({src, width, height}) {
  return (
    <div className={`w-[${width}px] h-[${height}px] relative overflow-hidden rounded-full`}>
        <Image
            src={src}
            fill
            alt='image'
            style={{objectFit: 'cover'}} />
    </div>
  )
}
