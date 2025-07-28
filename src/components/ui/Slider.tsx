'use client';

import { useEffect, useState, useMemo, useCallback, ReactElement,useRef,} from 'react';
import LeftArrow from '../icons/LeftArrow';
import RightArrow from '../icons/RightArrow';
import TitleComponent from '../shared/TitleComponent';

interface SliderProps<T> {
  items: T[];
  title: string;
  renderCard: (item: T, index: number) => ReactElement;
  cardsPerView: {
    desktop: number;
    tablet: number;
    mobile: number;
  };
  gap?: number;
}

const Slider = <T,>({items, title, renderCard, cardsPerView, gap = 20}: SliderProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = items.length;

  const updateLayout = useCallback(() => {
    let count = 1;
    if (window.innerWidth >= 1024) count = cardsPerView.desktop;
    else if (window.innerWidth >= 768) count = cardsPerView.tablet;
    else count = cardsPerView.mobile;

    setVisibleCards(count);

    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalGap = gap * (count - 1);
      const cardW = (containerWidth - totalGap) / count;
      setCardWidth(cardW);
    }
  }, [cardsPerView, gap]);

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [updateLayout]);

  const goNext = useCallback(() => {
    if (currentIndex < totalItems - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, totalItems, visibleCards]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const translateX = useMemo(() => {
    return (cardWidth + gap) * currentIndex;
  }, [currentIndex, cardWidth, gap]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between ">
        <TitleComponent title={title} padding='pb-[10px] md:pb-[60px]'/>
        <div className="flex items-center justify-end gap-2 md:gap-5 mb-6">
        <button
          onClick={goPrev}
          disabled={currentIndex === 0}
          className="!bg-[#EFEFEF] p-3 w-[35px] h-[35px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full 
                cursor-pointer transition-all duration-300 
               hover:!bg-orange hover:shadow-md"
        >
          <LeftArrow/>
        </button>
        <button
          onClick={goNext}
          disabled={currentIndex >= totalItems - visibleCards}
          className="!bg-[#EFEFEF] p-3 w-[35px] h-[35px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full 
                cursor-pointer transition-all duration-300 
               hover:!bg-orange hover:shadow-md"
        >
          <RightArrow/>
        </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden w-full" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${gap}px`,
            transform: `translateX(-${translateX}px)`,
            width: 'max-content',
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                width: `${cardWidth}px`,
                flex: `0 0 auto`,
              }}
            >
              {renderCard(item, idx)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
