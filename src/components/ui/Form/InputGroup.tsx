interface InputGroupProps {
    label: string;
    placeholder: string;
    type: string;
}

export const InputGroup = ({ label, placeholder, type }: InputGroupProps) => (
    <div className="min-[768px]:w-1/2 min-[768px]:mb-[30px] mb-2">
        <label className="2xl:text-lg text-sm font-semibold mb-2 block">{label}</label>
        <input
            className="2xl:py-3.5 p-2 rounded-lg 2xl:px-6 w-full 2xl:placeholder:text-lg placeholder:text-sm bg-white"
            placeholder={placeholder}
            type={type}
        />
    </div>
);