export const BoxGroup1 = (props: {
  label?: string,
  name: string,
  id?: string,
  type?: string
  className?: string
}) => {
  const {label, name, id = name, type = "text", className = ""} = props;
  return (
    <>
      <div className={className}>
        {label && <label htmlFor={id} className="font-[500] text-[14px] text-black">{label}</label>}
        <input type={type} name={name} id={id} className="bg-white border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] w-full font-[500] text-[14px] text-black mt-[5px]" />
      </div>
    </>
  )
}