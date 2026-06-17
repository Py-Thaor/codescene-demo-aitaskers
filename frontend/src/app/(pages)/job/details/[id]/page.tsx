import { Tag1 } from "@/app/components/tag/Tag1";
import { Tag2 } from "@/app/components/tag/Tag2";
import Link from "next/link";
import { FaBriefcase, FaUserTie } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"

export default function Page() {
  return (
    <>
      <div className="pt-[30px] pb-[60px]">
        <div className="contain">
          <div className="grid grid-cols-[770fr_395fr] gap-[20px]">
            <div>
              {/* Thông tin công việc */}
              <div className="bg-white rounded-[8px] border border-[#DEDEDE] p-[20px]">
                <h1 className="font-[700] text-[28px] text-[#121212] mb-[10px]">
                  Front End Developer ( Javascript, ReactJS)
                </h1>
                <div className="font-[400] text-[16px] text-[#414042] mb-[10px]">
                  LG CNS Việt Nam
                </div>
                <div className="font-[700] text-[20px] text-[#0088FF] mb-[20px]">
                  1.000$ - 1.500$
                </div>
                <Link href="#" className="h-[48px] px-[10px] bg-[#0088FF] rounded-[4px] font-[700] text-[16px] text-[#FFFFFF] flex items-center justify-center mb-[20px]">
                  Ứng tuyển
                </Link>
                <div className="grid grid-cols-3 gap-[16px] mb-[20px]">
                  <img src="/assets/images/job-detail-image-1.png" alt="" className="rounded-[4px] object-cover" />
                  <img src="/assets/images/job-detail-image-2.png" alt="" className="rounded-[4px] object-cover" />
                  <img src="/assets/images/job-detail-image-3.png" alt="" className="rounded-[4px] object-cover" />
                </div>
                <div className="flex flex-col gap-[10px] mb-[10px]">
                  <Tag2
                    icon={<FaUserTie className="text-[16px] text-black" />}
                    label="Fresher"
                  />
                  <Tag2
                    icon={<FaBriefcase className="text-[16px] text-black" />}
                    label="Tại văn phòng"
                  />
                  <Tag2
                    icon={<FaLocationDot className="text-[16px] text-black" />}
                    label="Tầng 15, tòa Keangnam Landmark 72, Mễ Trì, Nam Tu Liem, Ha Noi"
                  />
                </div>
                <div className="flex gap-[8px]">
                  <Tag1
                    label="ReactJS"
                  />
                  <Tag1
                    label="NextJS"
                  />
                  <Tag1
                    label="Javascript"
                  />
                </div>
              </div>
              {/* Hết Thông tin công việc */}
            </div>
            
            <div>
              {/* Thông tin công ty */}
              <div>
                Đây là khối thông tin công ty
              </div>
              {/* Hết Thông tin công ty */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}