import Image from 'next/image';
import { memo } from 'react';
import Button from '../ui/Button';

interface Feature {
  icon: string;
  text: string;
}

interface PackageCardProps {
  image: string;
  title: string;
  price: string;
  features: Feature[];
}

const PackageCard = memo(function PackageCard({ image, title, price, features}: PackageCardProps) {
  return (
    <div className="w-full md:w-[48%] lg:w-[340px] overflow-hidden transition-all duration-300 rounded-3xl shadow-[0px_0px_20px_0px_#0000001A] hover:shadow-[0px_10px_30px_0px_#00000030] hover:scale-[1.02]" data-aos="flip-left">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-[340px] object-center lg:object-cover"
        sizes="(max-width: 768px) 100vw, 340px"
        priority={false}
      />
      <div className="p-[25px] flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-[20px] font-extrabold text-black">{title}</h2>
          <h3 className="text-orange font-bold text-5xl">
            <span className="text-[20px] text-black/50 font-normal align-super">€</span>
            {price}
            <span className="font-normal text-[20px] text-black/50">/day</span>
          </h3>
        </div>

        <div>
          {features.map((feature) => (
            <div
              key={feature.text}
              className="flex items-center gap-4 text-[14px] text-black/80 py-4"
            >
              <Image
                src={feature.icon}
                alt={feature.text}
                width={24}
                height={24}
                className="w-6 h-auto"
              />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
        <Button name="Book Now" fill={false} customStyle="py-3 px-6 border !text-orange font-semibold text-[20px] border-orange rounded-[50px] transition-colors duration-300 hover:bg-orange hover:!text-white"/>
      </div>
    </div>
  );
});

export default PackageCard;
