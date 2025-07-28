'use client';
import React, { memo } from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  image: string;
  title: string;
  desc: string;
}
const ServiceCard = memo(function ServiceCard({ image, title, desc }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <Image
        src={image}
        alt={title} 
        width={330}
        height={302}
        className="w-full h-auto rounded-3xl object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 330px"
        data-aos="flip-left"
      />
      <div className="text-gray-01" data-aos="zoom-in">
        <h4 className="text-2xl font-bold mb-3">{title}</h4>
        <p className="text-lg">{desc}</p>
      </div>
    </div>
  );
});

export default ServiceCard;
