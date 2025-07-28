import React, { memo } from "react";
import Image from "next/image";
import { CounterData } from "@/data/CounterData";
import Counter from "@/components/ui/Counter";

interface WelcomeProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  width: number;
  height: number;
  gap: string
}

const Welcome = memo(function Welcome({image, title, subtitle, description, width, height,gap}: WelcomeProps) {
  return (
    <section className={`flex flex-col lg:flex-row ${gap} pb-[50px] md:pb-16 items-center justify-center px-10 min-[1260px]:px-[10%] min-[2000px]:px-0 min-[2000px]:mx-auto max-w-[1920px]`} data-aos="zoom-in">
      <div>
        <Image
          src={image}
          alt="welcome"
          width={width}
          height={height}
          priority
          className="w-[250px] md:w-[350px] lg:w-[450px]"
        />
      </div>
      <div className="lg:flex-1 text-center lg:text-start">
        <h4 className="font-semibold uppercase text-opacity-60">
          {subtitle}
        </h4>
        <h2 className="text-2xl lg:text-[32px] text-gray-01 font-extrabold mt-1.5 mb-8">
          {title}
        </h2>
        <p className="text-gray-01 text-base lg:text-lg mb-8 leading-8">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-[50px]">
          {CounterData.map((counter) => (
            <Counter key={counter.label} value={counter.value} label={counter.label} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Welcome;
