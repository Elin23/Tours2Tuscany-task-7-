
import Hero from '@/components/shared/Hero'
import Features from '@/sections/AboutPage/Features'
import Welcome from '@/sections/HomePage/Welcome'
import Testimonials from '@/sections/Testimonials'
import React from 'react'

function AboutPage() {
  return (
    <div>
      <Hero bg="/assets/imgs/about_bg.webp">
        <div className="max-w-[1383px] mx-auto text-center text-white flex flex-col gap-6">
          <h1 className='text-4xl lg:text-7xl font-podcast'>Our team cares about your full relax</h1>
          <p className='w-[80%] md:w-[65%] text-base md:text-lg lg:text-2xl font-bold mx-auto'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
          <button className=' block  mx-auto text-center bg-none text-white text-base md:text-xl font-semibold
                border border-white py-3 px-4 md:px-6 rounded-full hover:bg-orange'>
                View our Tour Packages
          </button>
        </div>
      </Hero>
      <Welcome
        image="/assets/imgs/city-picture.png"
        subtitle="WELCOME TO OUR SITE!"
        title="We Are The Center Of Lucca To Offer You The Best"
        width={650}
        height={559}
        gap="gap-[20px] lg:gap-[70px] pt-16" 
        description="We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
      />
      <Features />
      <Testimonials/>
    </div>
  )
}

export default AboutPage
