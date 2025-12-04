import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/NavBar"; // <--- Import Navbar

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}