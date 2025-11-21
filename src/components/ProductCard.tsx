import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  products: string[];
}

const ProductCard = ({ icon: Icon, title, description, products }: ProductCardProps) => {
  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all group hover-scale">
      <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {products.map((product, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <div className="h-1.5 w-1.5 bg-primary rounded-full" />
            <span>{product}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProductCard;
