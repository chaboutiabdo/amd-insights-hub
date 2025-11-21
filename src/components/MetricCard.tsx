import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  label: string;
  value: string;
  change?: number;
  subtitle?: string;
}

const MetricCard = ({ label, value, change, subtitle }: MetricCardProps) => {
  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-3xl font-bold text-foreground">{value}</h3>
          {change !== undefined && (
            <div className={`flex items-center gap-1 text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span>{Math.abs(change)}%</span>
            </div>
          )}
        </div>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
    </Card>
  );
};

export default MetricCard;
