import Link from "next/link"
import { FaBars } from "react-icons/fa6"
import { HeaderMenu } from "./HeaderMenu"

export const Header = () => {
  return (
    <>
      <header className="py-[15px] bg-[#000071]">
        <div className="contain">
          <div className="flex lg:justify-between items-center">
            <Link href="/" className="text-[#FFFFFF] sm:text-[28px] text-[20px] font-[800] lg:flex-none flex-1">AITasker</Link>
            <HeaderMenu />
            <div className="sm:text-[16px] text-[12px] font-[600] text-[#FFFFFF] flex gap-[5px]">
              <Link href="#">Đăng nhập</Link>
              <span>/</span> 
              <Link href="#">Đăng ký</Link>
            </div>
            <button className="text-[23px] text-[#FFFFFF] lg:hidden ml-[12px]">
              <FaBars />
            </button>
          </div>
        </div>
      </header>
    </>
  )
}