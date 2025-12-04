// app/page.tsx
import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection"; // Đảm bảo bạn đã tạo file này
import { StoneCard } from "@/components/StoneCard"; // Đảm bảo bạn đã tạo file này
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Dữ liệu mẫu (Giả lập database)
const featuredProducts = [
  {
    id: "volakas-white",
    name: "Volakas White",
    type: "Marble" as const,
    price: "2.100.000₫/m²",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "black-forest",
    name: "Black Forest",
    type: "Granite" as const,
    price: "1.850.000₫/m²",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: "statuario-italy",
    name: "Statuario Italy",
    type: "Marble" as const,
    price: "Liên hệ",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2500&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "onyx-light",
    name: "Onyx Xuyên Sáng",
    type: "Onyx" as const,
    price: "5.500.000₫/m²",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2700&auto=format&fit=crop",
    isNew: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      {/* Lưu ý: Bạn cần sửa lại đường dẫn ảnh trong file HeroSection.tsx thành ảnh online để test */}
      {/* Ví dụ ảnh nền: https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop */}
      <HeroSection />

      {/* 2. FEATURED PRODUCTS (SẢN PHẨM NỔI BẬT) */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Bộ Sưu Tập Mới</h2>
            <p className="text-muted-foreground">Những mẫu đá được tuyển chọn kỹ lưỡng nhất tháng này.</p>
          </div>
          <Button variant="link" className="hidden md:inline-flex text-lg">
            Xem tất cả <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((stone) => (
            // Wrap thẻ Link để click vào xem chi tiết
            <Link key={stone.id} href={`/products/${stone.id}`}>
              <StoneCard
                name={stone.name}
                type={stone.type}
                price={stone.price}
                image={stone.image}
                isNew={stone.isNew}
              />
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">Xem tất cả sản phẩm</Button>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <ServicesSection />

      {/* 4. CALL TO ACTION (CTA) - Phần chốt đơn cuối trang */}
      <section className="py-24 bg-[#1a1a1a] text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Bạn đã sẵn sàng kiến tạo không gian?
          </h2>
          <p className="text-white/70 text-lg mb-10 font-light">
            Liên hệ ngay với đội ngũ kỹ sư của chúng tôi để được khảo sát và lên phương án thi công miễn phí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-none">
              Tư vấn Zalo: 09xx.xxx.xxx
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-none">
              Gửi yêu cầu báo giá
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}