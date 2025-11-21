import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MetricCard from "@/components/MetricCard";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Lightbulb, Users2 } from "lucide-react";

const Economics = () => {
  const financialMetrics = [
    { label: "Annual Revenue (2023)", value: "$22.7B", change: 4 },
    { label: "Operating Income", value: "$1.3B", change: -46 },
    { label: "Data Center Revenue", value: "$6.5B", change: 38 },
    { label: "Client Segment Revenue", value: "$4.6B", change: -25 }
  ];

  const strategies = [
    {
      icon: Target,
      title: "AI & Data Center Expansion",
      description: "Aggressive investment in AI accelerators and data center solutions, targeting hyperscale cloud providers and enterprise customers with EPYC and Instinct products."
    },
    {
      icon: TrendingUp,
      title: "Market Share Growth",
      description: "Continued gains in server CPU market share through competitive performance, TCO advantages, and ecosystem partnerships with major cloud service providers."
    },
    {
      icon: Lightbulb,
      title: "Adaptive Computing Integration",
      description: "Leveraging Xilinx acquisition to deliver comprehensive solutions combining CPUs, GPUs, FPGAs, and adaptive SoCs for diverse applications."
    },
    {
      icon: Users2,
      title: "Strategic Partnerships",
      description: "Expanding relationships with OEMs, cloud providers, and technology partners to accelerate product adoption and market penetration."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero 
        title="Economic Analysis" 
        subtitle="Financial performance, growth strategies, and future outlook"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Financial Performance</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            AMD's financial results reflect the company's strong position in high-growth markets including 
            data centers, AI, and gaming, balanced against cyclical PC market dynamics.
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {financialMetrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Segment Performance</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-primary">Data Center Segment</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><span className="font-semibold text-foreground">Revenue:</span> $6.5B (+38% YoY)</p>
                <p><span className="font-semibold text-foreground">Drivers:</span> EPYC processor adoption in cloud and enterprise</p>
                <p><span className="font-semibold text-foreground">Products:</span> EPYC Genoa, Bergamo, Instinct MI300 series</p>
                <p className="text-sm">Strong growth driven by market share gains and AI accelerator demand</p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-primary">Client Segment</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><span className="font-semibold text-foreground">Revenue:</span> $4.6B (-25% YoY)</p>
                <p><span className="font-semibold text-foreground">Drivers:</span> PC market softness, inventory corrections</p>
                <p><span className="font-semibold text-foreground">Products:</span> Ryzen 7000 series, mobile processors</p>
                <p className="text-sm">Cyclical headwinds offset by premium product mix and market share</p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-primary">Gaming Segment</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><span className="font-semibold text-foreground">Revenue:</span> $6.2B (-9% YoY)</p>
                <p><span className="font-semibold text-foreground">Drivers:</span> Semi-custom console chips, Radeon GPUs</p>
                <p><span className="font-semibold text-foreground">Products:</span> PlayStation 5, Xbox chips, RX 7000 series</p>
                <p className="text-sm">Stable semi-custom revenue with GPU competition from NVIDIA</p>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-4 text-primary">Embedded Segment</h3>
              <div className="space-y-3 text-muted-foreground">
                <p><span className="font-semibold text-foreground">Revenue:</span> $5.4B (+16% YoY)</p>
                <p><span className="font-semibold text-foreground">Drivers:</span> Xilinx FPGA and adaptive SoC solutions</p>
                <p><span className="font-semibold text-foreground">Products:</span> Versal, Kintex, Artix FPGAs</p>
                <p className="text-sm">Strong performance in aerospace, defense, and industrial applications</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Growth Strategies</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            AMD's strategic initiatives focus on expanding market presence in high-growth segments and 
            delivering comprehensive solutions for next-generation computing workloads.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {strategies.map((strategy, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-scale">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <strategy.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{strategy.title}</h3>
                <p className="text-muted-foreground">{strategy.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Future Directions</h2>
          <div className="max-w-4xl space-y-6">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Product Roadmap</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>2024-2025:</strong> Launch of Zen 5 architecture, EPYC Turin processors, Instinct MI350 AI accelerators</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Data Center:</strong> Continued innovation in chiplet design, advanced packaging, and energy efficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>AI & ML:</strong> Enhanced ROCm software stack, purpose-built AI silicon, comprehensive AI solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Adaptive Computing:</strong> Next-generation Versal devices, automotive-grade adaptive SoCs</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Market Opportunities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Artificial Intelligence</h4>
                  <p className="text-sm text-muted-foreground">
                    TAM expanding to $400B+ by 2027 for AI infrastructure, creating significant opportunity 
                    for Instinct accelerators and EPYC platforms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Edge Computing</h4>
                  <p className="text-sm text-muted-foreground">
                    Growing demand for embedded and adaptive solutions in automotive, industrial IoT, 
                    telecommunications, and smart infrastructure.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cloud Gaming</h4>
                  <p className="text-sm text-muted-foreground">
                    Emerging market for cloud-based gaming services requiring high-performance GPUs 
                    and low-latency processing capabilities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">HPC & Research</h4>
                  <p className="text-sm text-muted-foreground">
                    Supercomputing installations, scientific research, and simulation workloads 
                    leveraging AMD's compute and accelerator technologies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Challenges & Risks</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Competition:</strong> Intense rivalry with Intel, NVIDIA, and emerging AI chip startups</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Supply Chain:</strong> Dependence on external foundries (TSMC) and potential capacity constraints</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Market Cycles:</strong> Exposure to PC and gaming market volatility affecting revenue predictability</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Execution Risk:</strong> Need to deliver on ambitious roadmap timelines and performance targets</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Sustainability Commitments</h3>
              <p className="text-muted-foreground mb-4">
                AMD has established ambitious environmental and social responsibility goals:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span>30x improvement in energy efficiency of AMD processors and accelerators by 2025</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span>Carbon neutrality across AMD operations by 2030</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span>Increased representation of women and underrepresented groups in leadership</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span>Responsible supply chain practices and ethical sourcing of materials</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Economics;
