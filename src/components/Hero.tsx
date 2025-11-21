interface HeroProps {
  title: string;
  subtitle: string;
  gradient?: boolean;
}

const Hero = ({ title, subtitle, gradient = true }: HeroProps) => {
  return (
    <section className={`relative pt-32 pb-20 ${gradient ? 'bg-gradient-to-b from-background via-background to-muted/20' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
