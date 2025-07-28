import { formData } from "@/types/form";
import { InputGroup } from "./InputGroup";

interface FormProps 
{
    data: formData[];
    btn: string;
}
export default function BookingForm({data , btn} : FormProps) {
  return (
    <form className="2xl:p-[30px] p-4 rounded-3xl bg-white/30 2xl:mt-9 mt-5">
      {data.map((e, i) => (
        <div key={i} className="min-[768px]:flex w-full justify-between 2xl:gap-[30px] min-[768px]:gap-2">
          <InputGroup label={e.label} placeholder={e.place} type={e.type} />
          <InputGroup label={e.labe2} placeholder={e.place2} type={e.type2} />
        </div>
      ))}
      <div className="text-center">
        <button className="w-[212px] bg-orange 2xl:text-xl text-base font-semibold text-white rounded-full py-2.5 px-[24px]">
          {btn}
        </button>
      </div>
    </form>
  )
}
