import { FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FooterData, SocialData } from "@/types/footer"; 


export const footerData: FooterData[] = [
  {
    title: "Services",
    list: [
      { li: "Bike and Rickshaw rental", path: "" },
      { li: "Guided Tours of Lucca", path: "" },
      { li: "Guided Bike Tour of Lucca", path: "" },
      { li: "Trip In The Tuscan Hills", path: "" },
      { li: "Transportation With Luxury Cars", path: "" },
      { li: "Wine Tours By Bus With Guide", path: "" },
    ],
  },
  {
    title: "Home",
    list: [
      { li: "Home", path: "/" },
      { li: "About Us", path: "/about" },
      { li: "Tour Packages", path: "" },
    ],
  },
  {
    title: "Contacts",
    list: [
      {
        icon: <FaLocationDot className="w-6 h-6 text-[#FA8B02]" />,
        li: "Piazza Napoleone, Lucca, Tuscany",
        path: "",
      },
      {
        icon: <FaPhoneAlt className="w-6 h-6 text-[#FA8B02]" />,
        li: "+39 346 368 5708",
        path: "",
      },
      {
        icon: <MdEmail className="w-6 h-6 text-[#FA8B02]" />,
        li: "italiainlimo@gmail.com",
        path: "",
      },
    ],
  },
];

export const socialData: SocialData[] = [
  {
    title: "Social Media",
    socialIcon: [
      { icon: "/assets/imgs/social/twitter.svg", path: "#" },
      { icon: "/assets/imgs/social/facebook.svg", path: "#" },
      { icon: "/assets/imgs/social/instagram.svg", path: "#" },
    ],
  },
];
