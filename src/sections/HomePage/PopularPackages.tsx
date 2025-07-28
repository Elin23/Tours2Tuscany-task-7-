import React from 'react'
import { PackagesData } from '@/data/PackagesData'
import TitleComponent from '@/components/shared/TitleComponent'
import PackageCard from '@/components/cards/PackageCard'

const PopularPackages = () => {
    return (
        <section className="min-[2000px]:mx-auto max-w-[1920px]" id="packages">
            <div className='px-[4.103%] lg:px-[5.56%] min-[1260px]:!px-[10%] min-[2000px]:!px-0 pt-[50px] md:pt-[120px] '>
                <TitleComponent title="The Most Popular Packages" padding='pb-[60px]'/>
                <div className='flex flex-wrap lg:flex-nowrap gap-5 justify-center min-[1990px]:gap-[10%]'>
                    {PackagesData.map((item, index) => (
                        <PackageCard key={index} image={item.images} title={item.title} price={item.price} features={item.features}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularPackages