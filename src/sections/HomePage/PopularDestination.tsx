'use client'
import DestinationCard from '@/components/cards/DestinationCard'
import Slider from '@/components/ui/Slider'
import { DestinationCardData } from '@/data/DestinationsCardData'
import React from 'react'

function PopularDestination() {
  return (
    <div className="px-10 min-[1260px]:px-[10%] min-[2000px]:px-0 py-[50px] md:py-[123px] min-[2000px]:mx-auto max-w-[1920px]">
      <Slider
        items={DestinationCardData}
        title='Explore Our Popular Destinations'
        cardsPerView={{ desktop: 4, tablet: 2, mobile: 1 }}
        renderCard={(destination) => (
          <DestinationCard id={destination.id} img={destination.img} title={destination.title} price={destination.price} date={destination.date} day={destination.day} description={destination.description}/>
        )}
      />
    </div>
  )
}

export default PopularDestination
