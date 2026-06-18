export const BoxGroup2 = (props: {
  label?: string,
  name: string,
  id?: string,
  options: {
    value: string,
    label: string
  }[]
}) => {
  const {label, name, id = name, options} = props;
  return (
    <>
      <div>
        {label && <label htmlFor={id} className="font-[500] text-[14px] text-black">{label}</label>}
        <select name="city" id="city" className="bg-white border border-[#DEDEDE] rounded-[4px] py-[14px] px-[20px] w-full font-[500] text-[14px] text-black mt-[5px]">
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </>
  )
}