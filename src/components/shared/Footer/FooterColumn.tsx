import Link from "next/link";
import { JSX, memo } from "react";

interface ListItem {
  icon?: string | JSX.Element;
  li: string;
  path: string;
}

interface Props {
  title: string;
  list: ListItem[];
}

const FooterColumn = ({ title, list }: Props) => {
  return (
    <div>
      <h3 className="2xl:text-xl text-lg font-extrabold mb-5">{title}</h3>
      <ul>
        {list?.map((item, index) => (
          <li
          key={index}
            className="flex 2xl:text-lg text-sm mb-2.5 items-center font-semibold gap-2.5"
          >
            {item.icon}
            <Link href={item.path}>{item.li}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(FooterColumn);
