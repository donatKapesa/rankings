import React from 'react';
import Image from 'next/image';
import DetailedRankingCard from './components/DetailedRankingCard';
import RankingCardSummary from './components/RankingCardSummary';

export default function Home() {
  // card 1: exactly like mocks
  // card 2: like mocks but pic + medal + name centered vertically
  // card 3: with gradient instead of image
  // card 4: different versions of white card
  return (
    <div className='container mt-16'>
      <RankingCardSummary title="Top 30 video games out now" />
      
      <div className='mb-20'></div>

      <DetailedRankingCard title="Top 5 goats of football" />
    </div>
  );
}
