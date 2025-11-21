import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MetricCard from "@/components/MetricCard";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Lightbulb, Users2, DollarSign, LineChart, AlertTriangle, Trophy, Rocket, Shield } from "lucide-react";

const Economics = () => {
  const financialMetrics = [
    { label: "Annual Revenue (2023)", value: "$22.7B", change: 4 },
    { label: "Market Cap (2024)", value: "$220-290B", change: 45 },
    { label: "Data Center Revenue", value: "$6.5B", change: 38 },
    { label: "R&D Investment", value: "$5B+", change: 15 }
  ];

  const strategies = [
    {
      icon: Target,
      title: "AI & Data Center Expansion",
      description: "Aggressive investment in Instinct AI accelerators and EPYC processors targeting hyperscale cloud providers, enterprises, and AI infrastructure with industry-leading performance and efficiency."
    },
    {
      icon: TrendingUp,
      title: "Market Share Growth",
      description: "Continued gains in server CPU market share through competitive performance, superior TCO advantages, and strategic ecosystem partnerships with major cloud service providers globally."
    },
    {
      icon: Lightbulb,
      title: "Adaptive Computing Integration",
      description: "Leveraging the $49B Xilinx acquisition to deliver comprehensive solutions combining CPUs, GPUs, FPGAs, and adaptive SoCs for diverse applications across automotive, aerospace, and industrial markets."
    },
    {
      icon: Users2,
      title: "Strategic Partnerships & Acquisitions",
      description: "Expanding relationships with OEMs, cloud providers, and technology partners while pursuing selective acquisitions (ZT Systems $4.9B) to accelerate product adoption and market penetration."
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
          <h2 className="text-4xl font-bold mb-6">Key Financial Metrics</h2>
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
          <h2 className="text-4xl font-bold mb-6">Historical Financial Journey</h2>
          <div className="max-w-4xl space-y-6">
            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4 mb-4">
                <Rocket className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Early Years (1969-2000)</h3>
                  <p className="text-muted-foreground mb-4">
                    AMD's early decades established the company as a significant player in the semiconductor industry 
                    through strategic growth and product innovation.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground ml-12">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>1972:</strong> Initial Public Offering (IPO) providing capital for expansion</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>1980s:</strong> Reached $1B+ annual revenue through memory and logic chip sales</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>1996:</strong> K5 processor launch marked peak of early CPU efforts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>2000:</strong> Revenue reached $4.6B driven by Athlon processor success</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Challenges:</strong> High fab costs, intense price competition with Intel</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Difficult Years (2007-2015)</h3>
                  <p className="text-muted-foreground mb-4">
                    AMD faced existential challenges during this period, struggling with execution, market share 
                    losses, and financial strain that threatened the company's survival.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground ml-12">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>2006:</strong> ATI Graphics acquisition for $5.4B added significant debt burden</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>2008-2009:</strong> Financial crisis and CPU market share collapse to single digits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>2012-2015:</strong> Operating in survival mode with multiple unprofitable quarters</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>Lifeline:</strong> Semi-custom console chip wins (PlayStation 4, Xbox One) provided critical revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>Stock Price:</strong> Fell to as low as $1.80 per share in early 2016</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4 mb-4">
                <Trophy className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">The Turnaround (2017-2020)</h3>
                  <p className="text-muted-foreground mb-4">
                    Under Dr. Lisa Su's leadership, AMD executed one of the most remarkable corporate turnarounds 
                    in technology history through the Ryzen and EPYC product launches.
                  </p>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground ml-12">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>March 2017:</strong> Ryzen launch re-established AMD's CPU competitiveness</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>June 2017:</strong> EPYC data center processors began attacking Intel's server monopoly</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>2017-2019:</strong> Return to sustained profitability with improving gross margins</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>2019-2020:</strong> Zen 2 and Zen 3 established performance leadership over Intel</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Stock Performance:</strong> Share price increased from $10 (2017) to $90+ (2020)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Market Cap:</strong> Exceeded $100B valuation in 2020</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4 mb-4">
                <LineChart className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Recent Financials (2021-2024)</h3>
                  <p className="text-muted-foreground mb-4">
                    AMD's recent financial performance demonstrates continued growth in data center and AI segments, 
                    with strong margins and significant R&D investment for future innovation.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-12">
                <div>
                  <h4 className="font-semibold mb-2">Revenue Trajectory</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>2021: $16.4B (+68% YoY)</li>
                    <li>2022: $23.6B (+44% YoY)</li>
                    <li>2023: $22.7B (-3% YoY due to PC market softness)</li>
                    <li>2024: Projected recovery with AI accelerator growth</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Profitability Metrics</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Gross Margin: 50%+ (industry-leading for fabless)</li>
                    <li>Operating Margin: Improving toward 20%+</li>
                    <li>R&D Investment: $5B+ annually (22% of revenue)</li>
                    <li>Strong balance sheet with minimal debt</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 ml-12">
                <h4 className="font-semibold mb-3">Segment Performance</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Data Center has become AMD's largest and fastest-growing segment, overtaking Client revenue 
                  and demonstrating the success of EPYC processors in enterprise and cloud deployments.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Stock Performance</h2>
          <Card className="p-8 bg-card border-border max-w-4xl">
            <p className="text-muted-foreground mb-6">
              AMD's stock has delivered extraordinary returns for investors who maintained conviction through 
              the turnaround period, becoming one of the best-performing stocks of the past decade.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Long-Term Performance</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>2015:</strong> $1.80 per share (near bankruptcy)</li>
                  <li><strong>2020:</strong> $90 per share (50× return)</li>
                  <li><strong>2024:</strong> $140-180 per share range</li>
                  <li><strong>10-Year Return:</strong> 10,000%+ for early investors</li>
                </ul>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold mb-2">Milestone Achievements</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Joined S&P 500 index in 2017</li>
                  <li>Market cap exceeded $100B in 2020</li>
                  <li>Peak valuation of $290B+ in 2024</li>
                  <li>Consistently outperformed semiconductor peers</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Capital Structure & Profitability</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Market Capitalization</h3>
              <p className="text-muted-foreground mb-3">
                AMD's market cap ranges between $220B-$290B depending on market conditions, making it one of the 
                most valuable semiconductor companies globally.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Strong Balance Sheet</h3>
              <p className="text-muted-foreground mb-3">
                Minimal debt, strong cash position, and healthy free cash flow generation provide financial 
                flexibility for R&D investment and strategic acquisitions.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">No Dividend Policy</h3>
              <p className="text-muted-foreground mb-3">
                AMD maintains a growth-focused capital allocation strategy, reinvesting profits into R&D, 
                engineering talent, and strategic initiatives rather than paying dividends.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fabless Advantages</h3>
              <p className="text-muted-foreground mb-3">
                Fabless model eliminates massive capital expenditure requirements for semiconductor fabs, 
                enabling focus on design innovation and higher profitability.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Trump Administration Impact</h2>
          <Card className="p-8 bg-card border-border max-w-4xl">
            <p className="text-muted-foreground mb-6">
              Various policy initiatives and geopolitical factors during the Trump administration period had 
              mixed impacts on AMD's business operations and competitive positioning.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">CHIPS Act Benefits:</strong>
                  <span className="text-muted-foreground"> Bipartisan CHIPS and Science Act provides incentives 
                  for domestic semiconductor manufacturing, potentially benefiting AMD's US operations</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Low Tariff Impact:</strong>
                  <span className="text-muted-foreground"> AMD's fabless model with TSMC manufacturing reduces 
                  direct exposure to tariff policies compared to vertically integrated competitors</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Export Controls on AI Chips:</strong>
                  <span className="text-muted-foreground"> US restrictions on AI accelerator exports to China 
                  create both challenges (market access) and opportunities (reduced competition in key markets)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-foreground">Competitive Opportunities:</strong>
                  <span className="text-muted-foreground"> Restrictions on NVIDIA sales to China could provide 
                  AMD with opportunities in compliant AI accelerator markets</span>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Growth Strategy</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            AMD's strategic initiatives focus on expanding market presence in high-growth segments and 
            delivering comprehensive solutions for next-generation computing workloads.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
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

          <Card className="p-8 bg-card border-border max-w-4xl">
            <h3 className="text-2xl font-bold mb-4 text-primary">Technology Roadmap (3-5 Years)</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span><strong>Zen Architecture Evolution:</strong> Continued annual improvements in Zen 5, Zen 6 
                architectures with sustained IPC gains and efficiency improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span><strong>Process Node Advancement:</strong> Migration to 3nm (2024-2025) and 2nm (2026-2027) 
                manufacturing processes with TSMC partnership</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span><strong>3D Stacking Innovation:</strong> Advanced packaging technologies including expanded 
                3D V-Cache applications and chiplet integration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span><strong>AI Integration:</strong> NPU (Neural Processing Unit) integration across consumer 
                and enterprise products for edge AI capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span><strong>Chiplet Reuse:</strong> Modular design enabling cost-effective scaling across 
                consumer, workstation, and data center segments</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span><strong>ROCm Ecosystem:</strong> Continued investment in open-source GPU software stack 
                to compete with NVIDIA's CUDA platform</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Competitive Positioning</h2>
          <div className="max-w-4xl space-y-6">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">vs. Intel</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">CPU Leadership:</strong> AMD offers more cores, better 
                  multi-threaded performance, and superior energy efficiency in most market segments from consumer 
                  to data center.
                </p>
                <p>
                  <strong className="text-foreground">Market Share Trajectory:</strong> Consistent quarterly gains 
                  in both consumer and server markets from 2017-2024, reaching 20%+ server share and 30%+ consumer share.
                </p>
                <p>
                  <strong className="text-foreground">Manufacturing Advantage:</strong> TSMC partnership provides 
                  process node leadership while Intel struggles with internal manufacturing transitions.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">vs. NVIDIA</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong className="text-foreground">GPU Competition:</strong> Radeon competes in gaming and 
                  professional graphics with competitive price/performance, though NVIDIA maintains leadership 
                  in ray tracing and high-end segments.
                </p>
                <p>
                  <strong className="text-foreground">AI Accelerators:</strong> Instinct MI300X series provides 
                  credible alternative to NVIDIA H100/H200 with strong memory capacity advantages for large AI models.
                </p>
                <p>
                  <strong className="text-foreground">Software Gap:</strong> NVIDIA's CUDA ecosystem remains 
                  entrenched; AMD's ROCm is improving but requires continued investment and developer adoption.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Strategic Advantages</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Open Standards:</strong> Commitment to industry standards and open-source software 
                  creates ecosystem goodwill and reduces vendor lock-in concerns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Comprehensive Portfolio:</strong> Unique combination of high-performance CPUs, 
                  GPUs, FPGAs, and adaptive computing from Xilinx integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Premium Brand Evolution:</strong> Successfully elevated brand perception from 
                  "budget alternative" to premium performance leader</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Competitors & Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-3 text-primary">Key Competitors</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Intel:</strong> x86 CPU competitor with massive scale and resources</li>
                <li><strong>NVIDIA:</strong> GPU and AI accelerator market leader</li>
                <li><strong>ARM Ecosystem:</strong> Growing competitive threat in data center</li>
                <li><strong>Chinese State-Backed:</strong> Emerging domestic competitors in China</li>
                <li><strong>AI Chip Startups:</strong> Specialized competitors targeting AI inference</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold mb-3 text-primary">Strategic Challenges</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>R&D Cost Escalation:</strong> Advanced nodes require increasing investment</li>
                <li><strong>Dual Product Lines:</strong> Must excel in both CPUs and GPUs simultaneously</li>
                <li><strong>AI Software Ecosystem:</strong> Closing gap with NVIDIA's CUDA platform</li>
                <li><strong>Supply Constraints:</strong> TSMC capacity allocation during shortages</li>
                <li><strong>Talent Competition:</strong> Intense competition for semiconductor engineers</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Future Plans (3-5 Years)</h2>
          <div className="max-w-4xl space-y-6">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Product Roadmap Execution</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>MI400 Series AI Accelerators (2025-2026):</strong> Next-generation Instinct products 
                  targeting leadership in AI training and inference performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>AI PCs:</strong> Integration of NPUs across Ryzen consumer and mobile processors 
                  for edge AI capabilities and differentiated user experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Data Center Dominance:</strong> Target 30%+ server CPU market share through 
                  continued EPYC innovation and cloud provider partnerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Automotive Expansion:</strong> Leveraging Xilinx adaptive SoCs for ADAS, autonomous 
                  driving, and in-vehicle computing platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>CHIPS Act Facilities:</strong> Potential US-based manufacturing or assembly facilities 
                  supported by government incentives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                  <span><strong>Selective Acquisitions:</strong> Strategic M&A targeting AI software, networking, 
                  or specialized computing capabilities</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Future Challenges</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>NVIDIA AI Dominance:</strong> Overcoming NVIDIA's entrenched position in AI accelerators 
                  and CUDA software ecosystem requires sustained execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>Intel Resurgence Risk:</strong> Intel's massive resources and potential manufacturing 
                  recovery could restore competitive pressure</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>PC Market Maturity:</strong> Slowing PC sales growth requires diversification into 
                  data center and AI to maintain revenue growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>Geopolitical Tensions:</strong> US-China technology competition and TSMC dependency 
                  create supply chain and market access risks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>Talent Wars:</strong> Competing with big tech and AI startups for world-class 
                  semiconductor engineers and AI researchers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2" />
                  <span><strong>R&D Cost Inflation:</strong> Leading-edge node development costs escalating rapidly, 
                  requiring sustained profitability and investment</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Segment Performance</h2>
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
    </div>
  );
};

export default Economics;
