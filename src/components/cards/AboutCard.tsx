
import { AboutCardData } from '@/data/AboutCard'
import Image from 'next/image'

export default function AboutCard() {
   
  return (
    <section className='bg-offers bg-cover bg-center px-10 min-[1440px]:px-40 3xl:px-63 py-[83px]
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[83px] mt-[120px]'>
      {AboutCardData.map((item,index) => {
        return(
            <div key={index} className='text-center p-7.5 rounded-3xl bg-[#FFFFFF4D] justify-center w-full h-[189px]'>
                <Image src={item.icon} alt={item.alt} width={60} height={60} className=' mx-auto mb-[15px]'/>
                <p className='text-lg xl:text-xl font-semibold line-clamp-2'>{item.text}</p>
            </div>
        )
      })}
    </section>
  )
}
