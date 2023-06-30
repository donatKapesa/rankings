import React from 'react'
import CardTitle from './CardTitle'
import RoundImage from './RoundImage'
import Button from './Button'

export default function RankingCardSummary({title}) {
  return (
    <div className='w-[523px]'>
        <CardTitle initialTitle={title} />
        <div className='h-[180px] ml-[14px] mt-[-50px] shadow-custom rounded-lg flex flex-col'>
            <div className='h-[50px]'></div>
            <div className='flex flex-grow items-center justify-center'>
                <div className='flex w-3/5 justify-between'>
                    <div className='flex items-center'>
                        <div className='text-lg font-bold mx-1.5'>
                            1
                        </div>
                        <RoundImage src='/witcher.jpg' width={78} height={78} />
                    </div>
                    <div className='flex items-center'>
                        <div className='text-lg font-bold mx-1.5'>
                            2
                        </div>
                        <RoundImage src='/witcher.jpg' width={78} height={78} />
                    </div>
                    <div className='flex items-center'>
                        <div className='text-lg font-bold mx-1.5'>
                            3
                        </div>
                        <RoundImage src='/witcher.jpg' width={78} height={78} />
                    </div>
                </div>
                <div className='w-2/5 flex items-center justify-end'>
                    <div className='relative'>
                        <p className="absolute text-center font-bold text-lg mb-2 w-full text-black">205 votes</p>
                        <div className='py-7 px-4'>
                            <Button text="view list" width={140} height={58} fontSize={22} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
