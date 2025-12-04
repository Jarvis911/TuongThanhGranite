"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* UPPER SECTION: Đổi thành 5 cột để Map có không gian rộng hơn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* CỘT 1: THƯƠNG HIỆU & GIỚI THIỆU (Giữ nguyên) */}
          <div className="space-y-6 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-light text-2xl tracking-wide text-white">
                TUONG THANH<span className="text-[#c0a062]"> GRANITE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Đơn vị tiên phong trong lĩnh vực cung cấp và thi công đá hoa cương
              tự nhiên tại Gia Lai. Kiến tạo vẻ đẹp vĩnh cửu cho ngôi nhà của
              bạn.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c0a062] hover:text-black transition-all"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c0a062] hover:text-black transition-all"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* CỘT 2: LIÊN KẾT NHANH (Giữ nguyên) */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-light mb-6 text-white">Sản Phẩm</h3>
            <ul className="space-y-4">
              {[
                "Đá Marble Tự Nhiên",
                "Đá Granite Cao Cấp",
                "Đá Onyx Xuyên Sáng",
                "Đá Nhân Tạo",
                "Dịch Vụ Thi Công",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#c0a062] transition-colors flex items-center gap-2 text-sm group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-600 group-hover:bg-[#c0a062] transition-colors" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: THÔNG TIN LIÊN HỆ (Giữ nguyên) */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-light mb-6 text-white">Liên Hệ</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#c0a062] shrink-0 mt-1" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Thôn An Sơn 1, Xã Tuy Phước 1, <br /> Tỉnh Gia Lai.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#c0a062] shrink-0" />
                <a
                  href="tel:0905340052"
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  0905.340.052
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#c0a062] shrink-0" />
                <a
                  href="mailto:kieuphuoc.411@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  kieuphuoc.411@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* CỘT 4: BẢN ĐỒ (Đã sửa LỚN HƠN GẤP ĐÔI) */}
          {/* Thay đổi: lg:col-span-2 (chiếm 2 cột) và min-h-[450px] (cao hơn) */}
          <div className="lg:col-span-2 h-full min-h-[450px] rounded-lg overflow-hidden border border-white/10 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.4440268083476!2d109.1160040744108!3d13.812355195890044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f15c3b415f0d5%3A0x3a8d597db4a2e753!2zVMaw4budbmcgVGhhbmggxJHDoSBncmFuaXRl!5e0!3m2!1svi!2sus!4v1764836786554!5m2!1svi!2sus" // Nhớ thay link chuẩn vào đây
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

        </div>

        <Separator className="bg-white/10 my-8" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Tường Thanh Granite. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}