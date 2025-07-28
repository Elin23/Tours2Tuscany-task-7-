"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import tabs from "@/data/Filter";

export default function Filter() {
  const [activeTab, setActiveTab] = useState(0);

  const activeContent = useMemo(() => tabs[activeTab].content, [activeTab]);

  return (
    <div className="min-[1200px]:w-auto w-4/5 2xl:mt-[60px] min-[768px]:mt-10 mt-5 bg-white/20 2xl:p-5 p-2.5 rounded-xl" >
      <div className="flex w-max bg-white/20 rounded-tl-xl rounded-tr-xl overflow-hidden">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(index)}
            className={`2xl:p-4 p-3 flex gap-2.5 justify-between transition-all duration-200 ${
              activeTab === index ? "text-orange bg-white" : "text-white bg-transparent"
            }`}
            role="tab"
            aria-selected={activeTab === index}
          >
            {tab.icon}
            <span className="md:block hidden 2xl:text-lg text-base font-semibold">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
      <div className="2xl:p-3 p-1 flex min-[1200px]:flex-nowrap flex-wrap items-center  lg:w-auto bg-white text-black 2xl:gap-3 gap-1 rounded-tr-xl rounded-br-xl rounded-bl-xl" role="tabpanel">
        {activeContent.map((item) => (
          <div key={item.label} className="2xl:py-4 py-2 flex gap-[7px] 2xl:px-4 px-2">
            {item.icon}
            <div className="flex flex-col font-semibold 2xl:text-lg md:text-base text-sm 2xl:gap-1.5 mb-1.5">
              <span>{item.label}</span>
              <select className="2xl:pr-5 pr-1 font-normal 2xl:text-lg md:text-base text-sm text-start text-gray-01 cursor-pointer">
                <option value="">{item.select}</option>
              </select>
            </div>
          </div>
        ))}
        <div
          role="button"
          tabIndex={0}
          className="2xl:w-20 w-12 h-12 flex justify-center items-center rounded-xl 2xl:h-20 bg-orange cursor-pointer"
        >
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={30}
            height={30}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
}
