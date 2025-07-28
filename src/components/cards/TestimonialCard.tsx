'use client';

import Image from 'next/image';

interface TestimonialCardProps {
  image: string;
  name: string;
  text: string;
}

const TestimonialCard = ({ image, name, text }: TestimonialCardProps) => {
  return (
    <div className="mx-auto max-w-[700px] min-h-[406px] rounded-3xl border border-[#EFEFEF] p-4 md:p-7.5 bg-white flex flex-col items-center text-center">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full mb-[15px]"
      />
      <h3 className="text-lg text-gray-01">{name}</h3>
      <Image src="/assets/icons/qoute.svg" alt="quote" width={40} height={28} className="mr-auto" />
      <p className="text-base md:text-lg text-gray-01 leading-7.5 my-3.5">{text}</p>
      <Image src="/assets/icons/qoute.svg" alt="quote" width={40} height={28} className="ml-auto" />
    </div>
  );
};

export default TestimonialCard;
