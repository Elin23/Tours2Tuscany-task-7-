import FeatureCard from '@/components/cards/FeatureCard'
import { FeaturesData } from '@/data/FeaturesData'
import React from 'react'

function Features() {
    return (
        <section className='relative bg-cover bg-center h-fit lg:h-[355px] mt-[100px] py-15 px-10 min-[1260px]:px-[10%] min-[2000px]:px-0 
                        flex items-center justify-center' style={{ backgroundImage: `url("/assets/imgs/bg2.png")` }}>
            <div className='min-[2000px]:mx-auto max-w-[1920px] flex flex-col lg:flex-row gap-5 '>
                {FeaturesData.map((item, index) => (
                    <FeatureCard key={index} img={item.img} desc={item.desc}/>
                ))}
            </div>
        </section>
    )
}

export default Features
