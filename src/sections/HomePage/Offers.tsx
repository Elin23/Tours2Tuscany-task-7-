'use client';
import Image from 'next/image';
import React, { memo } from 'react';
import Button from '@/components/ui/Button';
import TitleComponent from '@/components/shared/TitleComponent';

const Offers = memo(function Offers() {
  return (
    <section className="relative bg-[url('/assets/imgs/bg2.png')] bg-cover bg-center h-[450px] mt-[50px] md:mt-[100px] py-15 px-10 min-[1260px]:px-[10%] min-[1920px]:px-40 3xl:px-63 ">
      <div className='flex items-center justify-center lg:justify-start min-[2000px]:mx-auto max-w-[1920px]'>
        <div className="w-[569px] p-7.5 rounded-3xl text-center flex flex-col gap-8 bg-white/25" data-aos="zoom-in">
          <TitleComponent title='Get Special Offers for Organizations' />
          <p className="text-base lg:text-lg leading-[26px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <Button fill={true} name="Contact Us" customStyle="w-[212px] mx-auto" />
        </div>
        <Image
          src="/assets/imgs/woman.png"
          alt="offers"
          width={427}
          height={600}
          loading="lazy"
          className="hidden lg:flex absolute bottom-0 right-10 min-[1440px]:right-40 min-[1990px]:right-[25%]"
          data-aos="flip-left"
        />
      </div>
    </section>
  );
});

export default Offers;
