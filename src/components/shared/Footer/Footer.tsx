import { memo } from "react";
import Image from "next/image";
import FooterColumn from "./FooterColumn";
import SocialSection from "./SocialSection";
import { FooterData, SocialData } from "@/types/footer";

interface FooterProps {
  logo: string;
  data: FooterData[];
  Social: SocialData[];
  copy: string;
}

const Footer = memo(function Footer({ logo, data, Social, copy }: FooterProps) {
  return (
    <footer className="px-[40px] min-[1260px]:px-[10%] py-10 bg-gray-01">
      <div className="min-[1990px]:px-0 min-[1990px]:mx-auto max-w-[1990px]">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={99}
          priority
          className="2xl:mb-[33px] mb-5"
        />
      </div>

      <div className="2xl:py-[33px] py-5 text-white flex flex-wrap justify-between gap-5 border-y min-[1990px]:px-0 min-[1990px]:mx-auto max-w-[1990px]">
        {data.map((item) => (
          <FooterColumn key={item.title} title={item.title} list={item.list} />
        ))}

        {Social.map((social) => (
          <SocialSection key={social.title} title={social.title} icons={social.socialIcon} />
        ))}
      </div>

      <div className="text-white text-center 2xl:py-10 py-5 min-[1990px]:px-0 min-[1990px]:mx-auto max-w-[1990px]">
        <span className="text-base font-normal">Copyrights {copy}</span>
      </div>
    </footer>
  );
});

export default Footer;
