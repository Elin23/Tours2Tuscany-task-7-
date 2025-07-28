'use client';
import { useEffect, useState, useCallback, memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { CloseIcon } from "../../icons/CloseIcon";
import { BurgerIcon } from "../../icons/BurgerIcon";
import Button from "@/components/ui/Button";
import { LinkItem } from "@/data/LinksData";

const NavLinks = dynamic(() => import("./NavLinks"), { ssr: false });
const CustomDropdown = dynamic(() => import("./CustomDropdown"), { ssr: false });

type NavbarProps = {
  links: LinkItem[];
  logo: string;
  setShowLogin: (value: boolean) => void;
  setShowRegister: (value: boolean) => void;
};

function NavbarComponent({ links, logo, setShowLogin, setShowRegister }: NavbarProps) {
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setActive((prev) => !prev), []);
  const closeMenu = useCallback(() => setActive(false), []);

  if (!hasMounted) return null;

  return (
    <>
      <nav className={`fixed px-[20px] min-[992px]:px-[6%] min-[1260px]:px-[10%] min-[1990px]:px-0 top-0 w-full left-0 right-0 z-49 transition-shadow duration-300 md:py-5 ${isScrolled ? "bg-gray-01" : "bg-white/20"}`}>
        <div className="flex justify-between items-center max-w-[1990px] min-[1990px]:mx-auto">
          <div className="cursor-pointer">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={99}
              priority
              className="scale-75 md:scale-90 xl:scale-100"
            />
          </div>
          <div className="hidden min-[992px]:flex gap-10 min-[1260px]:gap-30 min-[1440px]:gap-40">
            <NavLinks links={links} />
            <div className="hidden min-[992px]:flex items-center gap-2.5">
              <CustomDropdown title="Eng" items={["Eng", "Ar"]} />
              <div className="flex gap-2.5">
                <Button
                  name="Login"
                  fill={false}
                  onClick={() => setShowLogin(true)}
                  customStyle="text-sm md:text-base"
                />
                <Button
                  name="Sign Up"
                  fill={true}
                  onClick={() => setShowRegister(true)}
                  customStyle="text-sm md:text-base"
                />
              </div>
            </div>
          </div>

          <button
            className="min-[992px]:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={active ? "Close menu" : "Open menu"}
          >
            {active ? (
              <CloseIcon className="fill-white" />
            ) : (
              <BurgerIcon className="fill-white" />
            )}
          </button>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 bottom-0 w-full bg-gray-01 z-[999] transition-transform duration-300 ease-in-out lg:hidden ${active ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center gap-10">
          <div className="text-[18px] md:text-3xl font-semibold font-inter">
            <div className="cursor-pointer">
              <Image
                src={logo}
                alt="logo"
                width={133}
                height={130}
                className="h-20 w-20 lg:h-28 lg:w-28 scale-75 md:scale-90 xl:scale-100"
              />
            </div>
          </div>
          <NavLinks links={links} onLinkClick={closeMenu} isMobile />
          <Button
            name="Login"
            fill={false}
            onClick={() => {
              setShowLogin(true);
              closeMenu();
            }}
            customStyle="w-[200px] text-center"
          />
          <Button
            name="Sign Up"
            fill={true}
            onClick={() => {
              setShowRegister(true);
              closeMenu();
            }}
            customStyle="w-[200px] text-center"
          />
        </div>

        <button
          className="absolute bottom-5 left-2/4 -translate-x-2/4 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <CloseIcon className="fill-white" />
        </button>
      </div>
    </>
  );
}

const Navbar = memo(NavbarComponent);
export default Navbar;
