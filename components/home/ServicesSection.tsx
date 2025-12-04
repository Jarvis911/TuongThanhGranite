// components/home/Services.tsx
import { Hammer, Ruler, Gem, Truck } from "lucide-react";

const services = [
  {
    icon: <Gem className="h-8 w-8" />,
    title: "Cung cấp đá tấm",
    desc: "Nhập khẩu trực tiếp Marble, Granite từ các mỏ đá danh tiếng thế giới."
  },
  {
    icon: <Ruler className="h-8 w-8" />,
    title: "Gia công theo yêu cầu",
    desc: "Cắt đá CNC, bo cạnh, đánh bóng với độ chính xác tuyệt đối."
  },
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Thi công ốp lát",
    desc: "Đội ngũ thợ lành nghề, thi công cầu thang, bàn bếp, mặt tiền."
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Vận chuyển tận nơi",
    desc: "Đóng gói an toàn, vận chuyển chuyên nghiệp đến tận công trình."
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dịch Vụ Toàn Diện</h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div key={index} className="group p-6 bg-white border border-stone-100 hover:shadow-xl transition-all duration-300 text-center">
              <div className="mb-6 inline-flex p-4 rounded-full bg-stone-100 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}