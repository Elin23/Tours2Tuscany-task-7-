import Image from 'next/image';
import CalenderIcon from '../icons/CalenderIcon';
import UsersIcon from '../icons/UsersIcon';
import { memo } from 'react';

type DestinationProps = {
  id: number;
  img: string;
  title: string;
  price: string;
  day: string;
  date: string;
  description: string;
};

const DestinationCard = memo(
  ({ img, title, price, day, date, description }: DestinationProps) => {
    return (
      <div
        className="flex flex-col min-h-[520px]"
        data-aos="flip-left"
        data-aos-once="true"
      >
        {img && (
          <Image
            className="pb-4 w-full md:w-[330px]"
            src={img}
            alt="Destination"
            width={330}
            height={404}
          />
        )}
        <div className="flex flex-col gap-3">
          <p className="leading-[100%] font-bold text-sm md:text-2xl text-gray-01">
            {title}
          </p>
          <p className="font-semibold text-sm md:text-lg leading-[100%] text-gray-01">
            from{' '}
            <span className="text-orange text-lg md:text-2xl font-extrabold">
              {price}
            </span>
          </p>
          <div className="flex justify-between text-orange">
            <div className="flex items-center gap-1.5">
              <CalenderIcon />
              <span className="font-semibold leading-[100%]">{day}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <UsersIcon />
              <span className="font-semibold leading-[100%]">{date}</span>
            </div>
          </div>
          <p className="text-sm md:text-lg leading-6">{description}</p>
        </div>
      </div>
    );
  }
);

export default DestinationCard;
