import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Card } from "@/components/ui/card";
import { Cpu, Server, Gamepad2, Microchip, Code, Zap, Globe } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Cpu,
      title: "Consumer/Client",
      description: "High-performance processors for personal computing",
      products: [
        "Ryzen Desktop Processors (3000-7000 Series)",
        "Ryzen Mobile Processors",
        "Ryzen APUs (Accelerated Processing Units)",
        "Athlon Budget Processors"
      ]
    },
    {
      icon: Server,
      title: "Data Center/Server",
      description: "Enterprise-grade solutions for modern data centers",
      products: [
        "EPYC Server Processors (Genoa, Bergamo)",
        "AMD Instinct AI Accelerators (MI300X)",
        "Pensando AI NICs & DPUs",
        "Infinity Architecture for scalability"
      ]
    },
    {
      icon: Gamepad2,
      title: "Gaming/Graphics",
      description: "Cutting-edge graphics solutions for gaming and creation",
      products: [
        "Radeon RX 7000 Series GPUs",
        "AMD FidelityFX Technology",
        "Semi-Custom SoCs (PlayStation 5, Xbox Series X/S)",
        "RDNA 3 Architecture"
      ]
    },
    {
      icon: Microchip,
      title: "Embedded/Adaptive",
      description: "Flexible computing for specialized applications",
      products: [
        "Xilinx FPGAs (Versal, Kintex, Artix)",
        "Adaptive SoCs",
        "Embedded Processors (Ryzen Embedded)",
        "Industrial IoT Solutions"
      ]
    }
  ];

  const technologies = [
    {
      icon: Code,
      title: "ROCm Software Platform",
      description: "Open-source platform for GPU computing, AI training, and HPC workloads with support for PyTorch, TensorFlow, and more."
    },
    {
      icon: Zap,
      title: "3D V-Cache Technology",
      description: "Innovative stacked cache design delivering exceptional gaming and computational performance through increased L3 cache capacity."
    },
    {
      icon: Globe,
      title: "Chiplet Architecture",
      description: "Modular design approach enabling scalable, efficient processors with optimized power and performance characteristics."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero 
        title="Products & Services" 
        subtitle="Comprehensive portfolio of high-performance computing solutions"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Product Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Key Technologies</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            AMD's innovation extends beyond hardware to encompass comprehensive software ecosystems 
            and breakthrough technologies that define the future of computing.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-scale">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <tech.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Market Impact</h2>
          <div className="max-w-4xl space-y-6">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Data Centers & Cloud Computing</h3>
              <p className="text-muted-foreground mb-4">
                AMD EPYC processors have gained significant traction in enterprise data centers, powering 
                cloud infrastructure for major providers including Microsoft Azure, AWS, and Google Cloud. 
                The processors deliver superior performance-per-watt and total cost of ownership advantages.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Gaming & Entertainment</h3>
              <p className="text-muted-foreground mb-4">
                AMD technology powers the latest generation of gaming consoles (PlayStation 5, Xbox Series X/S) 
                and provides high-performance Radeon graphics solutions for PC gaming enthusiasts worldwide, 
                supporting ray tracing and advanced rendering technologies.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Artificial Intelligence & HPC</h3>
              <p className="text-muted-foreground mb-4">
                AMD Instinct accelerators and ROCm software platform enable cutting-edge AI research and 
                high-performance computing applications. The MI300X series delivers industry-leading performance 
                for large language models and generative AI workloads.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Strategic Partnerships</h3>
              <p className="text-muted-foreground">
                Key acquisitions including Xilinx (2022, $49B) and ZT Systems (2024, $4.9B) have expanded 
                AMD's capabilities in adaptive computing, AI infrastructure, and data center design. These 
                strategic moves position AMD as a comprehensive solutions provider for next-generation computing.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
