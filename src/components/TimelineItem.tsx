interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem = ({ year, title, description }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0 group hover:border-primary transition-colors">
      <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform" />
      <div className="space-y-2">
        <span className="text-primary font-bold text-lg">{year}</span>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
