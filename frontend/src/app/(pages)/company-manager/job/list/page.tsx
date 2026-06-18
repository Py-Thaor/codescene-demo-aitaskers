import { JobCard2 } from "@/app/components/card/JobCard2";
import { Select1 } from "@/app/components/select/Select1";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="py-[60px]">
        <div className="contain">
          <div className="mb-[20px] flex justify-between items-center flex-wrap gap-[20px]">
            <h1 className="font-[700] sm:text-[28px] text-[24px] text-[#121212]">
              Quản lý công việc
            </h1>
            <Link href="#" className="px-[20px] py-[8px] font-[400] text-[14px] text-white bg-[#0088FF] rounded-[4px] inline-block">
              Thêm mới
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[20px]">
            <JobCard2 />
            <JobCard2 />
            <JobCard2 />
            <JobCard2 />
            <JobCard2 />
            <JobCard2 />
            <JobCard2 />
            <JobCard2 />
          </div>
          <Select1 totalPage={4} />
        </div>
      </div>
    </>
  )
}