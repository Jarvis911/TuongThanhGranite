// components/home/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image với lớp phủ tối */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-6">
        <span className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 animate-fade-in-up">
          Kiệt tác từ thiên nhiên
        </span>
        <h1 className="text-5xl md:text-7xl font-medium leading-tight animate-fade-in-up delay-100">
          Nâng Tầm Không Gian Sống Với Đá Hoa Cương Đẳng Cấp
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light animate-fade-in-up delay-200">
          Chuyên cung cấp và thi công đá Marble, Granite nhập khẩu Ý, Tây Ban
          Nha, Brazil. Tinh tế trong từng đường vân.
        </p>

        <div className="flex gap-4 justify-center pt-4 animate-fade-in-up delay-300">
          <Button
            size="lg"
            className="bg-white text-black border-white border hover:bg-white/60 rounded-none px-8 font-semibold"
          >
            Xem Bộ Sưu Tập
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-black border-white hover:bg-white/60 rounded-none px-8"
          >
            Liên Hệ Báo Giá <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
