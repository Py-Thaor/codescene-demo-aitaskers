export const BoxGroup3 = (props: {
  label?: string,
  name: string,
  id?: string,
  className?: string
}) => {
  const {label, name, id = name, className = ""} = props;
  return (
    <>
      <div className={className}>
        {label && <label htmlFor={id} className="font-[500] text-[14px] text-black">{label}</label>}
        <textarea name="" id="" className="bg-white border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] w-full font-[500] text-[14px] text-black mt-[5px] h-[350px]"></textarea>
      </div>
    </>
  )
}