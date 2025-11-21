import { Card } from "@/components/ui/card";

interface LeaderCardProps {
  name: string;
  position: string;
  bio: string;
}

const LeaderCard = ({ name, position, bio }: LeaderCardProps) => {
  return (
    <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-scale">
      <div className="space-y-3">
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-primary-foreground">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-primary text-sm">{position}</p>
        </div>
        <p className="text-muted-foreground text-sm">{bio}</p>
      </div>
    </Card>
  );
};

export default LeaderCard;
