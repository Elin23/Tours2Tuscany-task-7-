import Image from "next/image";

export default function SocialLoginButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="gap-2.5 border border-[#333333]/60 flex py-2.5 px-6 items-center text-[#333333]/60 rounded-full"
    >
      <Image src={icon} alt="social-login" width={30} height={10}/>
      <div className="w-4/5 2xl:text-lg text-sm font-semibold">{label}</div>
    </button>
  );
}
