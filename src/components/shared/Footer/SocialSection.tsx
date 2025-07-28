import { SocialIcon } from "@/types/footer";
import { JSX, memo } from "react";


interface Props {
  title: string;
  icons: SocialIcon[];
}

const SocialSection = ({ title, icons }: Props) => {
  return (
    <div>
      <h3 className=" text-xl font-extrabold mb-5">{title}</h3>
      <ul className="flex gap-5">
        {icons.map((iconItem, index) => (
          <li key={index}>
            <a
              href={iconItem.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="social-link"
            >
              <img src={iconItem.icon} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(SocialSection);
