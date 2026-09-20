//โยย่า

"use client";

import { useState } from "react";

export default function Page() {

  /* ตัวเก็บข้อมูลการเลือกหมวดหมู่ */
  const [activeCategory, setActiveCategory] = useState("ทั้งหมด");

  /* ตัวเก็บข้อมูลการพิมพ์ช่องค้นหา */
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      model: "A3293",
      sku: "APL-IP15PM-256",
      category: "Flagship",
      price: 1199,
      cost: 980,
      stock: 12,
    },
    {
      id: 2,
      name: "Google Pixel 8 Pro",
      brand: "Google",
      model: "GP4BC",
      sku: "GGL-P8P-128",
      category: "Flagship",
      price: 999,
      cost: 780,
      stock: 12,
    },
    {
      id: 3,
      name: "OnePlus 12",
      brand: "OnePlus",
      model: "CPH2581",
      sku: "OP-12-256",
      category: "Mid-Range",
      price: 999,
      cost: 780,
      stock: 12,
    },
    {
      id: 4,
      name: "Realme GT6",
      brand: "Realme",
      model: "RMX3851",
      sku: "RLM-GT6-256",
      category: "Budget",
      price: 349,
      cost: 260,
      stock: 12,
    },
    {
      id: 5,
      name: "OnePlus 12",
      brand: "OnePlus",
      model: "CPH2581",
      sku: "OP-12-256",
      category: "Mid-Range",
      price: 999,
      cost: 780,
      stock: 12,
    },
    {
      id: 6,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      model: "A3293",
      sku: "APL-IP15PM-256",
      category: "Flagship",
      price: 1199,
      cost: 980,
      stock: 12,
    },
    {
      id: 7,
      name: "Google Pixel 8 Pro",
      brand: "Google",
      model: "GP4BC",
      sku: "GGL-P8P-128",
      category: "Flagship",
      price: 999,
      cost: 780,
      stock: 12,
    },
    {
      id: 8,
      name: "Realme GT6",
      brand: "Realme",
      model: "RMX3851",
      sku: "RLM-GT6-256",
      category: "Budget",
      price: 349,
      cost: 260,
      stock: 12,
    },
  ];

  /* ตัวกรองสินค้า */
  const filteredProducts = products.filter((product) => {
  const matchSearch =
    product.name.toLowerCase().includes(search.toLowerCase());

  /* ตรวจหมวดหมู่ */
  const matchCategory =
    activeCategory === "ทั้งหมด" ||
    product.category === activeCategory;

  return matchSearch && matchCategory;

  });

    return (
    
    /* สีพื้นหลัง */
    <div className="min-h-screen bg-[#dae8ff] p-6">

      {/* กรอบสีขาวหลัก */}
      <div className="min-h-[calc(100vh-48px)] rounded-[20px] bg-white shadow-md">
        
        {/* หัวข้อด้านบน */}
        <div className="flex items-center justify-between border-b border-[#EBEBEB] px-10 py-5">

          <div>
            <h1 className="text-[24px] font-medium text-gray-900">
              สินค้า
            </h1>
            <p className="text-[14px] text-gray-600">
              มีสินค้าทั้งหมด {products.length} รายการ
            </p>
          </div>
          
          {/* ปุ่มเพิ่มสินค้า */}
          <button className="rounded-full bg-[#7FBFFF] px-7 py-2 text-[20px] text-white">
            + เพิ่มสินค้า
          </button>

        </div>

        {/* ส่วนค้นหาและส่วนประเภท */}
        <div className="flex items-center gap-5 px-10 py-4">

          {/* ค้นหา */}
          <div className="flex h-[45px] flex-1 items-center rounded-full border border-[#EBEBEB] px-6">
            <span className="text-[20px] text-gray-500">
              🔍
            </span>

            <input
              type="text"
              placeholder="ค้นหาสินค้า"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-4 flex-1 bg-transparent text-[16px] outline-none placeholder:text-gray-300"
            />
          </div>

          {/* ปุ่มกดเลือกประเภท */}
          <div className="flex h-[45px] items-center rounded-full border border-[#E5E7EB] px-2">

            <button
              onClick={() => setActiveCategory("ทั้งหมด")}
              className={`rounded-full px-8 py-1 text-[18px] transition-all duration-300 ${
              activeCategory === "ทั้งหมด"
              ? "bg-[#78B8F2] text-white"
              : "text-gray-500 hover:bg-gray-100"
              }`}
            >
                ทั้งหมด
            </button>

            <button
              onClick={() => setActiveCategory("Flagship")}
              className={`rounded-full px-8 py-1 text-[18px] transition-all duration-300 ${
              activeCategory === "Flagship"
              ? "bg-[#78B8F2] text-white"
              : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Flagship
            </button>

            <button
              onClick={() => setActiveCategory("Mid-Range")}
              className={`rounded-full px-8 py-1 text-[18px] transition-all duration-300 ${
              activeCategory === "Mid-Range"
              ? "bg-[#78B8F2] text-white"
              : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              Mid-Range
            </button>

            <button
              onClick={() => setActiveCategory("Budget")}
              className={`rounded-full px-8 py-1 text-[18px] transition-all duration-300 ${
              activeCategory === "Budget"
              ? "bg-[#78B8F2] text-white"
              : "text-gray-500 hover:bg-gray-100"
              }`}
              >
                Budget
            </button>

          </div>

        </div>

        {/* ตารางสินค้า */}
        <div className="mx-6 overflow-hidden rounded-[20px] border border-[#E5E7EB]">
          <div className="max-h-[495px] overflow-y-auto">

            {/* หัวข้อ */}
            <div className="grid grid-cols-[2fr_1.5fr_1.2fr_0.8fr_0.8fr_0.8fr_1.3fr] items-center border-b bg-[#F8FAFC] px-7 py-4 text-[16px] font-medium text-gray-800">
              <span>สินค้า</span>
              <span>รหัส SKU</span>
              <span>หมวดหมู่</span>
              <span>ราคาขาย</span>
              <span>ต้นทุน</span>
              <span>สต๊อก</span>
              <span className="text-center">จัดการ</span>
            </div>

            {/* ข้อมูล */}
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-[2fr_1.5fr_1.2fr_0.8fr_0.8fr_0.8fr_1.3fr] items-center border-b border-[#E5E7EB] px-7 py-4"
                  >

                    <div>
                      <p className="text-[16px] text-gray-900">
                        {product.name}
                      </p>

                      <p className="text-[14px] text-gray-500">
                        {product.brand} · {product.model}
                      </p>
                    </div>

                    <span className="text-[16px] text-gray-500">
                      {product.sku}
                    </span>

                    <span className="w-fit rounded-full bg-[#DCEEFF] px-5 py-1 text-[14px] text-[#2580D9]">
                      {product.category}
                    </span>

                    <span className="text-[16px] text-gray-700">฿{product.price}</span>

                    <span className="text-[16px] text-gray-700">฿{product.cost}</span>

                    <span className="w-fit rounded-full bg-[#DDF6E2] px-5 py-1 text-[14px] text-[#249447]">
                      {product.stock}
                    </span>

                    <div className="flex gap-2">
                      <button className="rounded-full bg-[#DCEEFF] px-5 py-1 text-[14px] text-[#2580D9]">
                        แก้ไข
                      </button>

                      <button className="rounded-full bg-[#FFE4E4] px-5 py-1 text-[14px] text-[#E53935]">
                        ลบ
                      </button>
                    </div>

                  </div>
                ))
              ) : (
                <div className="flex h-[200px] items-center justify-center text-[16px] text-gray-500">
                  {search.trim() !== ""
                    ? "🔍 ไม่พบสินค้าที่ค้นหา"
                    : "ไม่พบสินค้าในหมวดหมู่นี้"}
                </div>
              )
            }

          </div>
        </div>

      </div>

    </div>
  );
}
