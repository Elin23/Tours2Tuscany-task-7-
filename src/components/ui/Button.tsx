interface ButtonProps {
    onClick?: () => void;
    customStyle?: string;
    fill: boolean;
    name: string;
  }
  
  export default function Button({ fill, name, onClick, customStyle }: ButtonProps) {
    return (
      <button onClick={onClick} className={` leading-[100%] font-semibold ${customStyle} ${fill ? 'flex items-center justify-center bg-orange text-white py-2.5 px-6 rounded-[50px]' 
            : 'block text-center  text-white  '}`}>
        {name}
      </button>
    );
  }
  