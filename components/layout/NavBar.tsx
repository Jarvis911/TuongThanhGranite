"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone, ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Sản phẩm", href: "/#products" }, 
  { name: "Dịch vụ", href: "/#services" },
  { name: "Dự án", href: "/projects" },
  { name: "Liên hệ", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Hiệu ứng bắt sự kiện cuộn trang để đổi màu Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-sm border-gray-200 text-black"
          : "bg-transparent py-5 border-transparent text-white" // Mặc định text trắng cho nền tối
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className={cn("font-light text-xl tracking-wide", 
            isScrolled ? "text-black" : "text-white"
          )}>
            TƯỜNG THANH <span className={!isScrolled ? "text-white" : "text-[#c0a062]"}>GRANITE</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-light uppercase tracking-wider hover:text-[#c0a062] transition-colors relative group",
                isScrolled ? "text-gray-800" : "text-white/90"
              )}
            >
              {link.name}
              {/* Hiệu ứng gạch chân khi hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c0a062] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className={isScrolled ? "text-black" : "text-white"}>
            <Search className="h-5 w-5" />
          </Button>
          <Button 
            className={cn(
              "rounded-lg font-semibold px-6 bg-transparent",
              !isScrolled 
                ? "bg-transparent text-white hover:scale-100" 
                : "text-black hover:bg-gray-200"
            )}
          >
            <Phone className="mr-2 h-4 w-4" /> Báo giá
          </Button>
        </div>

        {/* MOBILE MENU (SHEET) */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-black" : "text-white"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                <div className="font-serif text-2xl font-bold border-b pb-4">Menu</div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium hover:text-[#c0a062] transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button className="w-full rounded-none bg-black text-white" size="lg">
                    Liên hệ ngay
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}