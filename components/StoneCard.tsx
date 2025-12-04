// components/StoneCard.tsx
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface StoneProps {
  name: string;
  type: "Marble" | "Granite" | "Onyx";
  price: string;
  image: string;
  isNew?: boolean;
}

export function StoneCard({ name, type, price, image, isNew }: StoneProps) {
  return (
    <Card className="group overflow-hidden rounded-none border-none shadow-none bg-transparent">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        {isNew && (
          <Badge className="absolute top-4 left-4 z-10 bg-black text-white hover:bg-black rounded-none">
            Mới nhập
          </Badge>
        )}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Quick Action Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" className="rounded-none">Xem chi tiết</Button>
        </div>
      </div>
      
      <CardContent className="pt-6 px-2 text-center space-y-1">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{type}</p>
        <h3 className="font-serif text-xl font-medium text-foreground">{name}</h3>
      </CardContent>
      
      <CardFooter className="flex justify-center pb-2 px-2">
        <span className="text-sm font-semibold text-primary">{price}</span>
      </CardFooter>
    </Card>
  );
}