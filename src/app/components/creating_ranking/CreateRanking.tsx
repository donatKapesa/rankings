'use client'

import React, { useState } from 'react'
import CardTitle from '../CardTitle'
import NewPositionEntryCard from '../NewPositionEntryCard'

export default function CreateRanking() {
    const [cardTitle, setCardTitle] = useState('')
    
    const handleTitleChange = (e) => {
        console.log(e.target.value)
        setCardTitle(e.target.value)
    }
      
    return (
        <div>
            <CardTitle title={cardTitle} handleTitleChange={handleTitleChange} />
            <NewPositionEntryCard pos={1} />    
        </div>
    )
}
