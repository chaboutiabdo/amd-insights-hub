import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TimelineItem from "@/components/TimelineItem";
import { Card } from "@/components/ui/card";
import { Shield, Target, Heart } from "lucide-react";

const Index = () => {
  const timeline = [
    {
      year: "1969",
      title: "AMD Founded",
      description: "Jerry Sanders and seven co-founders establish Advanced Micro Devices in Sunnyvale, California."
    },
    {
      year: "1970s-80s",
      title: "Early Growth",
      description: "AMD begins manufacturing logic chips and memory products, establishing itself in the semiconductor industry."
    },
    {
      year: "1990s-2000s",
      title: "CPU Innovation",
      description: "Launch of AMD Athlon processors, competing directly with Intel in the consumer CPU market."
    },
    {
      year: "2014",
      title: "Dr. Lisa Su Becomes CEO",
      description: "Leadership transformation marks the beginning of AMD's resurgence in the technology industry."
    },
    {
      year: "2017",
      title: "Ryzen Revolution",
      description: "Launch of Ryzen processors based on Zen architecture, regaining market share in consumer and enterprise segments."
    },
    {
      year: "2022",
      title: "Xilinx Acquisition",
      description: "AMD completes $49 billion acquisition of Xilinx, expanding into adaptive computing and FPGA markets."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Vision",
      description: "High-performance and adaptive computing that transforms lives and industries worldwide."
    },
    {
      icon: Shield,
      title: "Mission",
      description: "Build great products that push the boundaries of what is possible in next-generation computing."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Committed to sustainability, diversity, inclusion, and ethical innovation in everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero 
        title="Advanced Micro Devices" 
        subtitle="High-Performance and Adaptive Computing Leader"
      />

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">About AMD</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Advanced Micro Devices (AMD) is a global leader in high-performance and adaptive computing solutions. 
                Headquartered in Santa Clara, California, AMD designs and manufactures cutting-edge processors, graphics 
                cards, and adaptive computing solutions that power millions of devices worldwide.
              </p>
              <p className="text-lg text-muted-foreground">
                With a tagline of "Together We Advance," AMD is committed to driving innovation in computing technology, 
                from personal computers and gaming consoles to data centers and artificial intelligence applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Company History</h2>
          <div className="max-w-3xl">
            {timeline.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Vision, Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-scale">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-6">Corporate Responsibility</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">Sustainability</h3>
                <p className="text-muted-foreground">
                  Committed to reducing environmental impact through energy-efficient products and sustainable 
                  manufacturing practices.
                </p>
              </Card>
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">Inclusion & Diversity</h3>
                <p className="text-muted-foreground">
                  Building an inclusive workplace that celebrates diversity and empowers employees to innovate 
                  and succeed.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
