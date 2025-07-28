import { JSX } from "react";
import { StaticImageData } from "next/image";

export interface FooterData {
  title: string;
  list: ListItem[];
}

export interface SocialData {
  title: string;
  socialIcon: SocialIcon[];
}

export interface ListItem {
  icon?: string | JSX.Element;
  li: string;
  path: string;
}

export interface SocialIcon {
  icon: string;
  path: string;
}

export interface FooterProps {
  logo: StaticImageData;
  dataF: FooterData[];
  Social: SocialData[];
  copy: string;
}
