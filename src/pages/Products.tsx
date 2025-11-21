import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Card } from "@/components/ui/card";
import { Cpu, Server, Gamepad2, Microchip, Code, Zap, Globe, TrendingUp, Users, AlertCircle, Target, Trophy, Shield } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: Cpu,
      title: "Processors (CPUs)",
      description: "High-performance processors for consumer and professional computing",
      products: [
        "Ryzen: Consumer desktop and laptop processors",
        "Threadripper: High-end workstation CPUs",
        "EPYC: Data center and server processors",
        "Chiplet architecture with Infinity Fabric"
      ]
    },
    {
      icon: Server,
      title: "Data Center/Server",
      description: "Enterprise-grade solutions for modern data centers",
      products: [
        "EPYC Processors (up to 96 cores per socket)",
        "AMD Instinct AI Accelerators (MI300X series)",
        "Pensando AI NICs & DPUs",
        "Infinity Architecture for scalability"
      ]
    },
    {
      icon: Gamepad2,
      title: "Graphics (GPUs)",
      description: "Cutting-edge graphics solutions for gaming and creation",
      products: [
        "Radeon RX: Gaming GPUs with RDNA architecture",
        "Radeon PRO: Professional workstation graphics",
        "Ray tracing and FidelityFX technologies",
        "APU integrated graphics solutions"
      ]
    },
    {
      icon: Microchip,
      title: "Embedded/Adaptive Computing",
      description: "Flexible computing for specialized applications",
      products: [
        "Xilinx FPGAs (Versal, Kintex, Artix)",
        "Adaptive SoCs for automotive and aerospace",
        "Embedded Ryzen processors",
        "Long-lifecycle industrial IoT solutions"
      ]
    }
  ];

  const ryzenEvolution = [
    { gen: "Zen (2017)", highlight: "Launch: 52% IPC improvement over previous gen" },
    { gen: "Zen+ (2018)", highlight: "12nm process, refined architecture" },
    { gen: "Zen 2 (2019)", highlight: "7nm, chiplet design, PCIe 4.0" },
    { gen: "Zen 3 (2020)", highlight: "19% IPC gain, unified cache" },
    { gen: "Zen 4 (2022)", highlight: "5nm, DDR5, AM5 platform" },
    { gen: "Zen 5 (2024)", highlight: "Next-gen performance and efficiency" }
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
          <h2 className="text-4xl font-bold mb-6">How Ryzen Was Built</h2>
          <Card className="p-8 bg-card border-border max-w-4xl">
            <p className="text-muted-foreground mb-6">
              The Ryzen revolution began in 2012 when AMD assembled a team to create a completely new CPU architecture. 
              This ambitious 5-year engineering effort would transform AMD's fortunes and reshape the entire processor market.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">2012-2017: Engineering Transformation</h4>
                <p className="text-sm text-muted-foreground">
                  AMD brought in legendary chip architect Jim Keller to lead the Zen architecture development. The team 
                  started from scratch, designing a modular chiplet-based architecture connected by Infinity Fabric.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">52% IPC Improvement</h4>
                <p className="text-sm text-muted-foreground">
                  The first Zen architecture delivered a massive 52% improvement in instructions-per-clock (IPC) compared 
                  to AMD's previous generation, putting AMD back in competition with Intel's best processors.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">TSMC Partnership</h4>
                <p className="text-sm text-muted-foreground">
                  Strategic partnership with TSMC enabled AMD to leverage leading-edge manufacturing processes (14nm, then 
                  7nm, 5nm, and beyond) without the capital burden of owning fabs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Chiplet Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  The revolutionary chiplet design allowed AMD to scale from 4-core consumer chips to 96-core data center 
                  processors using the same core building blocks, dramatically reducing costs and time-to-market.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ryzen Evolution</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            AMD's Zen architecture has evolved through multiple generations, each delivering consistent IPC improvements 
            and performance leadership across consumer and enterprise segments.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl">
            {ryzenEvolution.map((item, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h4 className="font-bold text-primary mb-2">{item.gen}</h4>
                <p className="text-sm text-muted-foreground">{item.highlight}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Data Center Expansion</h2>
          <Card className="p-8 bg-card border-border max-w-4xl">
            <p className="text-muted-foreground mb-6">
              AMD EPYC processors have achieved remarkable success in the data center market, gaining significant 
              market share from Intel through superior performance, efficiency, and total cost of ownership.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Cloud Provider Adoption</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Major hyperscalers including AWS, Microsoft Azure, Google Cloud, and Oracle Cloud have deployed 
                  EPYC-powered instances, citing performance and cost advantages.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">96-Core Leadership</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  EPYC Genoa and Bergamo processors offer up to 96 cores per socket, delivering industry-leading 
                  performance for virtualization, databases, and HPC workloads.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Instinct AI Accelerators</h4>
                <p className="text-sm text-muted-foreground">
                  The MI300X series delivers breakthrough performance for AI training and inference, competing directly 
                  with NVIDIA's H100 in the rapidly growing AI infrastructure market.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Market Share Gains</h4>
                <p className="text-sm text-muted-foreground">
                  AMD's server CPU market share has grown from low single digits in 2017 to over 20% in 2024, with 
                  continued momentum across enterprise and cloud segments.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Gaming Consoles</h2>
          <div className="max-w-4xl space-y-6">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Custom AMD Chips Power Leading Consoles</h3>
              <p className="text-muted-foreground mb-4">
                AMD's semi-custom chip business provides the processors and graphics for the latest generation 
                of gaming consoles, cementing AMD's position in the gaming ecosystem.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Xbox Series X/S</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom Zen 2 CPU + RDNA 2 GPU architecture delivering 4K gaming and ray tracing capabilities
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">PlayStation 5</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom AMD APU with 8-core Zen 2 CPU and RDNA 2 graphics, supporting 4K/120Hz gaming
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">Steam Deck</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom AMD APU enabling portable PC gaming with AAA game compatibility
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2">100M+ Units Shipped</h4>
                  <p className="text-sm text-muted-foreground">
                    Over 100 million gaming consoles powered by AMD technology have been shipped worldwide
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Embedded & Adaptive Computing</h2>
          <Card className="p-8 bg-card border-border max-w-4xl">
            <p className="text-muted-foreground mb-6">
              The 2022 acquisition of Xilinx for $49 billion expanded AMD's capabilities into FPGAs, adaptive SoCs, 
              and specialized embedded processors for demanding applications.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Versal Adaptive SoCs:</strong>
                  <span className="text-muted-foreground"> Next-generation adaptive computing platforms combining 
                  programmable logic, processors, and AI engines for aerospace, defense, and communications</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Automotive Solutions:</strong>
                  <span className="text-muted-foreground"> ADAS, autonomous driving, and in-vehicle infotainment 
                  systems leveraging AMD's processing and graphics capabilities</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Industrial IoT:</strong>
                  <span className="text-muted-foreground"> Long-lifecycle embedded processors for factory automation, 
                  robotics, medical devices, and industrial control systems</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">5G Infrastructure:</strong>
                  <span className="text-muted-foreground"> Adaptive computing solutions for wireless base stations, 
                  network equipment, and telecommunications infrastructure</span>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Market Impact & Strategy</h2>
          <div className="max-w-4xl space-y-6">
            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">How AMD Won</h3>
                  <p className="text-muted-foreground">
                    AMD's resurgence from 2017-2024 represents one of the greatest turnarounds in technology history. 
                    The strategy combined technical excellence, strategic execution, and market timing:
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground ml-12">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>2012-2016:</strong> Complete architectural reset with Zen development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>2017:</strong> Ryzen and EPYC breakthrough, regaining credibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>2019-2022:</strong> Market share gains, data center dominance, Xilinx acquisition</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Execution:</strong> Consistent delivery on roadmap commitments and performance targets</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Pricing:</strong> Aggressive but sustainable pricing strategy forcing Intel to compete</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4 mb-4">
                <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Hypothetical: If AMD Disappeared</h3>
                  <p className="text-muted-foreground mb-4">
                    The absence of AMD from the computing industry would have severe consequences for technology 
                    progress and market competition:
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 ml-12">
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive">Intel Monopoly</h4>
                  <p className="text-sm text-muted-foreground">
                    Near-complete CPU market control with reduced innovation pressure and higher pricing power
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive">NVIDIA GPU Dominance</h4>
                  <p className="text-sm text-muted-foreground">
                    Unchallenged leadership in graphics and AI accelerators, limiting consumer choice
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive">Higher Data Center Costs</h4>
                  <p className="text-sm text-muted-foreground">
                    Cloud providers and enterprises facing reduced negotiating leverage and increased infrastructure costs
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive">Slower Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduced competitive pressure leading to longer product cycles and incremental improvements
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Why the World Needs AMD</h3>
                  <p className="text-muted-foreground mb-4">
                    AMD's role extends beyond being an alternative supplier – the company drives fundamental 
                    improvements in computing through competition and innovation:
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground ml-12">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Competition Drives Innovation:</strong> AMD's technical achievements force competitors 
                  to accelerate their own development and reduce complacency</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Affordable Performance:</strong> AMD's competitive pricing makes high-performance 
                  computing accessible to more users, businesses, and researchers worldwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Open Standards:</strong> AMD's commitment to open-source software (ROCm) and 
                  industry standards benefits the entire ecosystem</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Economic Efficiency:</strong> Competition from AMD creates billions in cost savings 
                  for consumers, enterprises, and cloud providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Technology Democratization:</strong> Making cutting-edge computing technology 
                  accessible regardless of budget constraints or market segment</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4 mb-4">
                <Target className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Market Strategy</h3>
                  <p className="text-muted-foreground mb-4">
                    AMD's go-to-market strategy follows a proven pattern of technological leadership followed 
                    by market expansion:
                  </p>
                </div>
              </div>
              <div className="space-y-4 ml-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Lead with Technology</h4>
                    <p className="text-sm text-muted-foreground">Develop industry-leading products that establish technical credibility</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enter Consumer Market</h4>
                    <p className="text-sm text-muted-foreground">Build brand awareness and market share with enthusiasts and gamers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Scale to Enterprise</h4>
                    <p className="text-sm text-muted-foreground">Leverage consumer success to win data center and cloud deployments</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Build Partnerships</h4>
                    <p className="text-sm text-muted-foreground">Establish ecosystem relationships with OEMs, cloud providers, and software vendors</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Strategic Acquisitions</h4>
                    <p className="text-sm text-muted-foreground">Expand capabilities through targeted acquisitions (ATI, Xilinx, ZT Systems)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Ecosystem Development</h4>
                    <p className="text-sm text-muted-foreground">Invest in software, developer tools, and open standards to maximize platform value</p>
                  </div>
                </div>
              </div>
            </Card>
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
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-scale">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">ROCm Software Platform</h3>
              <p className="text-muted-foreground">
                Open-source platform for GPU computing, AI training, and HPC workloads with support for PyTorch, 
                TensorFlow, and industry-standard frameworks.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-scale">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">3D V-Cache Technology</h3>
              <p className="text-muted-foreground">
                Innovative stacked cache design delivering exceptional gaming and computational performance through 
                massive increases in L3 cache capacity.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-scale">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Chiplet Architecture</h3>
              <p className="text-muted-foreground">
                Modular design approach enabling scalable, cost-effective processors with optimized power and 
                performance characteristics across product lines.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
