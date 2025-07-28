import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import React, { useState } from 'react';


interface CustomDropdownProps {
  title: string;
  items: string[];
}

function CustomDropdown({ title, items } : CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative text-xl">
      <button onClick={toggleDropdown} className="w-full flex items-center justify-between gap-1 rounded-xl transition">
        <span className='text-white'>{title}</span>
        <ChevronDownIcon
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-orange hover:text-white cursor-pointer transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
