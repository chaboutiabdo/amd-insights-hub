import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "lucide-react";

interface ProfileCardProps {
  name: string;
  position: string;
  bio: string;
  image?: string;
}

const ProfileCard = ({ name, position, bio, image }: ProfileCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-scale cursor-pointer">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              {image ? (
                <img src={image} alt={name} className="h-full w-full object-cover" />
              ) : (
                <User className="h-12 w-12 text-primary" />
              )}
            </div>
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{name}</DialogTitle>
          <DialogDescription className="text-base text-primary font-semibold pt-1">
            {position}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-muted-foreground leading-relaxed">{bio}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileCard;
