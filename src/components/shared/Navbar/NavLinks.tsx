import { LinkItem } from "@/data/LinksData";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinksListProps = {
    links: LinkItem[];
    onLinkClick?: () => void;
    isMobile?: boolean;
  };
function NavLinks({ links, onLinkClick, isMobile }: LinksListProps) {
    const pathname = usePathname();
  return (
    <ul className={` ${isMobile ? 'flex flex-col gap-8' : 'flex gap-10 items-center justify-center'}`}>
    {links.map((item, index) => {
      const isActive = pathname === item.link ;

      return (
        <li key={index} className="text-center">
          <Link
            href={item.link}
            onClick={onLinkClick}
            className={`
              ${isMobile ? 'text-lg font-semibold' : 'md:text-lg lg:text-xl leading-5'} 
              text-white 
              ${isActive ? 'border-b-2 border-orange' : ''}
            `}
          >
            {item.label}
          </Link>
        </li>
      );
    })}
  </ul>
  )
}

export default NavLinks
