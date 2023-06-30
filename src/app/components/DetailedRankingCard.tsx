import React from 'react'
import CardHeader from './CardHeader'
import CardTitle from './CardTitle'
import PositionCard from './PositionCard'
import NewPositionEntryCard from './NewPositionEntryCard'
import FirstPlaceCard from './FirstPlaceCard'

export default function DetailedRankingCard({title}) {
  return (
    <div className='w-[523px]'>
        <CardHeader />
        <CardTitle initialTitle={title} />

        <div className='mb-48 w-[506px] ml-[17px]'>
          <FirstPlaceCard />
          <PositionCard pos={1}/>
          <PositionCard pos={2}/>
          <PositionCard pos={3}/>
          <NewPositionEntryCard pos={4} />
        </div>
    </div>
  )
}
