"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000); 
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-md flex items-center justify-center">
      <div className="relative w-12 h-12 spin-custom">
        <div className="w-5 h-5 bg-[#FA8B02] rounded-full absolute top-0 left-0" />
        <div className="w-5 h-5 bg-[#FA8B02] rounded-full absolute top-0 right-0" />
        <div className="w-5 h-5 bg-[#FA8B02] rounded-full absolute bottom-0 left-0" />
        <div className="w-5 h-5 bg-[#FA8B02] rounded-full absolute bottom-0 right-0" />
      </div>
    </div>
  );
}
