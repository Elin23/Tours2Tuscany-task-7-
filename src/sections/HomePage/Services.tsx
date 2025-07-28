import ServiceCard from '@/components/cards/ServiceCard'
import { CardInfo } from '@/data/ServicesCard'
import React from 'react'


export default function Services() {
   
  return (
    <section className='px-10 min-[1260px]:px-[10%] min-[2000px]:px-0  min-[2000px]:mx-auto max-w-[1920px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 pt-[50px] md:pt-[120px] pb-[63px]'>
      {CardInfo.map((card,index) => {
        return (
            <ServiceCard key={index} image={card.image} title={card.title} desc={card.desc}/>
        )
      })}
    </section>
  )
}
