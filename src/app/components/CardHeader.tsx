import React from 'react'
import Button from './Button'

export default function CardHeader() {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 0 24 24" width="34"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <p className='font-semibold text-[13px]'>
              dkapesa
          </p>
          <div className='text-alt mx-1'>
              <svg xmlns="http://www.w3.org/2000/svg" height="5" viewBox="0 0 24 24" width="5"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/></svg>
          </div>
          <p className='text-alt text-[13px]'>7h</p>
          <div className='ml-2'>
            <Button text='Sports' width={84} height={31} fontSize={14} />
          </div>
        </div>
        
        <div className='text-alt'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/></svg>
        </div>
    </div>
  )
}
