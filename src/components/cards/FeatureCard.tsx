import Image from 'next/image';
import React, { memo } from 'react';

type FeaturesProps = {
  img: string;
  desc: string;
};

const FeatureCard = memo(function FeatureCard({ img, desc }: FeaturesProps) {
  return (
    <div className="p-[30px] bg-white/25 rounded-3xl flex flex-col items-center w-full transform hover:-translate-y-2 transition-all duration-300 ease-out" data-aos="fade-up">
      {img && (
        <Image
          className="pb-4"
          src={img}
          alt="feature"
          width={60}
          height={60}
          loading="lazy"
        />
      )}
      <p className="text-center font-semibold leading-[100%] text-base md:text-xl">
        {desc}
      </p>
    </div>
  );
});

export default FeatureCard;
