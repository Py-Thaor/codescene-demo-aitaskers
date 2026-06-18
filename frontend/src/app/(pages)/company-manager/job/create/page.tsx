import { BoxGroup1 } from "@/app/components/form/BoxGroup1";
import { BoxGroup2 } from "@/app/components/form/BoxGroup2";
import { BoxGroup3 } from "@/app/components/form/BoxGroup3";
import { ButtonGroup1 } from "@/app/components/form/ButtonGroup1";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="py-[60px]">
        <div className="contain">
          <div className="bg-white rounded-[8px] border border-[#DEDEDE] p-[20px]">
            <div className="flex justify-between items-center mb-[20px] gap-[20px] flex-wrap">
              <h1 className="font-[700] text-[20px] text-black">
                Thêm mới công việc
              </h1>
              <Link 
                href={"/company-manager/job/list"}
                className="font-[400] text-[14px] text-[#0088FF] underline"
              >
                Quay lại danh sách
              </Link>
            </div>
            <form action="" className="grid sm:grid-cols-2 gap-x-[20px] gap-y-[15px]">
              <BoxGroup1
                name="name"
                label="Tên công việc *"
                id="name"
                type="text"
                className="sm:col-span-2"
              />
              <BoxGroup1
                name=""
                label="Mức lương tối thiểu ($)"
                id=""
                type="text"
              />
              <BoxGroup1
                name=""
                label="Mức lương tối đa ($)"
                id=""
                type="text"
              />
              <BoxGroup2
                label="Cấp bậc *"
                name=""
                id=""
                options={[
                  {value: "intern", label: "Intern"},
                  {value: "junior", label: "Junior"},
                  {value: "middle", label: "Middle"},
                  {value: "senior", label: "Senior"},
                ]}
              />
              <BoxGroup2
                label="Hình thức làm việc *"
                name=""
                id=""
                options={[
                  {value: "", label: "Tại văn phòng"},
                  {value: "", label: "Từ xa"},
                ]}
              />
              <BoxGroup1
                name=""
                label="Các công nghệ"
                id=""
                type="text"
                className="sm:col-span-2"
              />
              <BoxGroup1
                name=""
                label="Danh sách ảnh *"
                id=""
                type="file"
                className="sm:col-span-2"
              />
              <BoxGroup3
                label="Mô tả chi tiết"
                name="description"
                id="description"
                className="sm:col-span-2"
              />
              <ButtonGroup1 
                className="sm:col-span-2"
                label="Tạo mới"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}