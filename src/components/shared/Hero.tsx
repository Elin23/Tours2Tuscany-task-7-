import { ReactNode } from "react";

type HeroProps = {
  bg: string;
  children: ReactNode;
}
function Hero({bg, children} : HeroProps) {
  return (
    <div className={`max-w-screen h-screen bg-center bg-cover bg-no-repeat flex items-center justify-center flex-col`} style={{ backgroundImage: `url(${bg})` }}>
      {children}
    </div>
  )
}

export default Hero
