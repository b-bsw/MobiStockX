"use client";

import { useState } from "react";

export default function AddProductPage() {

  const [name, setName] = useState("");

  return (

    /* สีพื้นหลังสีฟ้า */
    <div className="min-h-screen bg-[#dae8ff] p-6">

      {/* กรอบสีขาวหลัก */}
      <div className="max-h-[calc(100vh-48px)] min-h-[calc(100vh-64px)] overflow-y-auto rounded-[20px] bg-white shadow-md">

        {/* หัวข้อด้านบน */}
        <div className="flex items-center justify-between border-b border-[#EBEBEB] px-10 py-5">

          <div>
            <h1 className="text-[24px] font-medium text-gray-900">
              เพิ่มสินค้าใหม่
            </h1>

            <p className="text-[14px] text-gray-600">
              เพิ่มโทรศัพท์มือถือเข้าสู่ระบบคลังสินค้า
            </p>
          </div>

          <button className="rounded-full border border-[#D1D5DB] px-7 py-2 text-[18px] text-gray-600">
            ← กลับรายการสินค้า
          </button>

        </div>


        {/* เนื้อหาด้านใน */}
        <div className="space-y-5 p-5">


          {/* ช่องกรอกข้อมูลสินค้า */}
          <div className="rounded-[20px] border border-[#E5E7EB] p-7">

            <h2 className="mb-5 text-[20px] font-medium text-gray-900">
              ข้อมูลสินค้า
            </h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">

              {/* ชื่อสินค้า */}
              <div className="col-span-2">

                <label className="mb-2 block text-[15px] text-gray-600">
                  ชื่อสินค้า *
                </label>

                <input
                  type="text"
                  placeholder="กรอกชื่อสินค้า"
                  value={name}
                  onChange={(e) => setName(e.target.value)}   
                  className="h-[52px] w-full rounded-full border border-[#E5E7EB] px-6 text-[16px] outline-none focus:border-[#7FBFFF]"
                />

              </div>


              {/* แบรนด์ */}
              <div>

                <label className="mb-2 block text-[15px] text-gray-600">
                  แบรนด์ *
                </label>

                <input
                  type="text"
                  placeholder="กรอกแบรนด์"
                  className="h-[52px] w-full rounded-full border border-[#E5E7EB] px-6 text-[16px] outline-none focus:border-[#7FBFFF]"
                />

              </div>


              {/* รุ่น / สี / ความจุ */}
              <div>

                <label className="mb-2 block text-[15px] text-gray-600">
                  รุ่น / สี / ความจุ *
                </label>

                <input
                  type="text"
                  placeholder="กรอกรุ่น / สี / ความจุ"
                  className="h-[52px] w-full rounded-full border border-[#E5E7EB] px-6 text-[16px] outline-none focus:border-[#7FBFFF]"
                />

              </div>


              {/* SKU */}
              <div>

                <label className="mb-2 block text-[15px] text-gray-600">
                  รหัส SKU *
                </label>

                <input
                  type="text"
                  placeholder="กรอกรหัส SKU"
                  className="h-[52px] w-full rounded-full border border-[#E5E7EB] px-6 text-[16px] outline-none focus:border-[#7FBFFF]"
                />

              </div>


              {/* หมวดหมู่ */}
              <div>

                <label className="mb-2 block text-[15px] text-gray-600">
                  หมวดหมู่ *
                </label>

                <select
                  className="h-[52px] w-full rounded-full border border-[#E5E7EB] bg-white px-6 text-[16px] text-gray-500 outline-none focus:border-[#7FBFFF]"
                >
                  <option value="">เลือกหมวดหมู่</option>
                  <option value="Flagship">Flagship</option>
                  <option value="Mid-Range">Mid-Range</option>
                  <option value="Budget">Budget</option>
                </select>

              </div>

            </div>

          </div>


          {/* ช่องกรอกาคา */}
          <div className="rounded-[20px] border border-[#E5E7EB] p-7">

            <h2 className="mb-5 text-[20px] font-medium text-gray-900">
              ราคา
            </h2>

            <div className="grid grid-cols-2 gap-6">

              {/* ราคาขาย */}
              <div>

                <label className="mb-2 block text-[15px] text-gray-600">
                  ราคาขาย *
                </label>

                <input
                  type="number"
                  placeholder="0.00"
                  className="h-[52px] w-full rounded-full border border-[#E5E7EB] px-6 text-[16px] outline-none focus:border-[#7FBFFF]"
                />

              </div>


              {/* ราคาต้นทุน */}
              <div>

                <label className="mb-2 block text-[15px] text-gray-600">
                  ราคาต้นทุน *
                </label>

                <input
                  type="number"
                  placeholder="0.00"
                  className="h-[52px] w-full rounded-full border border-[#E5E7EB] px-6 text-[16px] outline-none focus:border-[#7FBFFF]"
                />

              </div>

            </div>

          </div>


          {/* ช่องกรอกการจัดการสต๊อก */}
          <div className="rounded-[20px] border border-[#E5E7EB] p-7">

            <h2 className="mb-5 text-[20px] font-medium text-gray-900">
              การจัดการสต๊อก
            </h2>

            <div className="grid grid-cols-2 gap-6">

              {/* จำนวนสต๊อกเริ่มต้น */}
              <div>

                <label className="mb-2 block text-[15px] text-gray-600">
                  จำนวนสต๊อกเริ่มต้น *
                </label>

                <input
                  type="number"
                  placeholder="กรอกจำนวนสต๊อก"
                  className="h-[52px] w-full rounded-full border border-[#E5E7EB] px-6 text-[16px] outline-none focus:border-[#7FBFFF]"
                />

              </div>


              {/* จำนวนขั้นต่ำที่แจ้งเตือน */}
              <div>

                <label className="mb-2 block text-[15px] text-gray-600">
                  จำนวนขั้นต่ำที่แจ้งเตือน *
                </label>

                <input
                  type="number"
                  placeholder="กรอกจำนวนขั้นต่ำ"
                  className="h-[52px] w-full rounded-full border border-[#E5E7EB] px-6 text-[16px] outline-none focus:border-[#7FBFFF]"
                />

              </div>

            </div>

          </div>


          {/* ปุ่มด้านล่าง */}
          <div className="flex justify-end gap-4 pb-2">

            <button className="rounded-full border border-[#D1D5DB] px-8 py-2 text-[18px] text-gray-600">
              ยกเลิก
            </button>

            <button className="rounded-full bg-[#7FBFFF] px-8 py-2 text-[18px] text-white">
              เพิ่มสินค้า
            </button>

          </div>


        </div>

      </div>

    </div>
  );
}