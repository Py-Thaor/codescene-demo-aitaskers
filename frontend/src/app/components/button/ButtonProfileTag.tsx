export const ButtonProfileTag = (props: {
  label: string
}) => {
  const {label} = props;
  return (
    <div
      className="bg-[#e9e9e9] font-[500] text-[14px] rounded-[20px] px-[12px] text-[#121212] flex justify-center items-center"
    >
      {label}
    </div>
  )
}