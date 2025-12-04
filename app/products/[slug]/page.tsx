"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, Phone, Ruler, Truck, ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Mock Data (Thực tế bạn sẽ fetch từ API/Database dựa trên slug)
const product = {
  name: "Volakas White Marble",
  origin: "Hy Lạp (Greece)",
  type: "Marble Tự Nhiên",
  price: "Liên hệ",
  description:
    "Đá Marble Volakas (trắng vân mây) nổi tiếng với nền trắng tinh khiết kết hợp cùng những đường vân xám nhẹ nhàng, sang trọng. Đây là lựa chọn hàng đầu cho các hạng mục ốp lát phòng khách, vách tivi, và sảnh khách sạn 5 sao.",
  specs: [
    { label: "Độ dày", value: "18mm - 20mm" },
    { label: "Kích thước khổ", value: "2800mm x 1600mm (Max)" },
    { label: "Bề mặt", value: "Polished (Bóng) / Honed (Mờ)" },
    { label: "Độ cứng (Mohs)", value: "3-4" },
    { label: "Độ hút nước", value: "0.18%" },
  ],
  images: [
    "/images/volakas-1.jpg", // Ảnh chính
    "/images/volakas-zoom.jpg", // Ảnh zoom vân
    "/images/volakas-living-room.jpg", // Ảnh phối cảnh
  ],
};

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-white pb-20 pt-24"> {/* Padding top cho Navbar */}
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb đơn giản */}
        <nav className="flex items-center text-sm text-muted-foreground mb-8">
          <span className="hover:text-black cursor-pointer">Trang chủ</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="hover:text-black cursor-pointer">Sản phẩm</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-black font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: GALLERY */}
          <div className="lg:col-span-7 space-y-4">
            {/* Ảnh lớn */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover transition-all duration-500 hover:scale-105 cursor-zoom-in"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-white/90 text-black hover:bg-white rounded-none uppercase tracking-widest text-xs">
                  Best Seller
                </Badge>
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? "border-black opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: INFO */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="sticky top-24"> {/* Sticky để cuộn theo ảnh */}
              
              <div className="mb-2 text-sm uppercase tracking-widest text-gray-500 font-semibold">
                {product.type} — {product.origin}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-medium text-black">{product.price}</span>
                <span className="text-sm text-gray-500">(Giá chưa bao gồm thi công)</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 font-light text-lg">
                {product.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="flex-1 rounded-none bg-black hover:bg-gray-800 text-white h-14 text-base">
                  <Phone className="mr-2 h-4 w-4" /> Liên hệ tư vấn ngay
                </Button>
                <Button size="lg" variant="outline" className="flex-1 rounded-none border-black hover:bg-gray-50 h-14 text-base">
                  <Download className="mr-2 h-4 w-4" /> Tải Catalogue
                </Button>
              </div>

              <Separator className="my-6" />

              {/* Thông số kỹ thuật & Chính sách (Dùng Accordion) */}
              <Accordion type="single" collapsible className="w-full" defaultValue="specs">
                <AccordionItem value="specs" className="border-b-gray-200">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Thông số kỹ thuật
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex justify-between text-base">
                          <span className="text-gray-500">{spec.label}</span>
                          <span className="font-medium text-gray-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="shipping" className="border-b-gray-200">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Vận chuyển & Thi công
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 space-y-2">
                    <p className="flex items-center gap-2"><Truck className="h-4 w-4"/> Miễn phí vận chuyển nội thành cho đơn {'>'} 50m².</p>
                    <p className="flex items-center gap-2"><Ruler className="h-4 w-4"/> Khảo sát, đo đạc tận nơi miễn phí trong 24h.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="warranty" className="border-b-0">
                  <AccordionTrigger className="font-serif text-lg hover:no-underline">
                    Bảo hành
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    <p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Bảo hành độ bóng 05 năm. Bảo trì trọn đời.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}