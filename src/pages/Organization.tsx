import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard";
import { Card } from "@/components/ui/card";
import { Building2, Users, Sparkles, Factory, Code, Cog, TrendingUp, Target, Shield, Lightbulb, HandHeart, Users2, Leaf, Award } from "lucide-react";

const Organization = () => {
  const divisions = [
    {
      icon: Building2,
      title: "Data Center & AI",
      description: "EPYC processors, Instinct GPUs, and AI accelerators for enterprise and cloud computing workloads."
    },
    {
      icon: Users,
      title: "Client/PC Computing",
      description: "Ryzen processors and APUs for consumer desktops, laptops, and mobile computing devices."
    },
    {
      icon: Sparkles,
      title: "Gaming & Graphics",
      description: "Radeon GPUs, semi-custom gaming chips, and graphics technologies for gaming and content creation."
    },
    {
      icon: Factory,
      title: "Embedded & Adaptive",
      description: "FPGAs, adaptive SoCs, and embedded processors for industrial, automotive, and IoT applications."
    }
  ];

  const leaders = [
    {
      name: "Dr. Lisa Su",
      position: "Chair & CEO",
      bio: "Dr. Lisa Su joined AMD in 2012 and became CEO in 2014, leading one of the most remarkable turnarounds in technology industry history. With a PhD in Electrical Engineering from MIT, she brought deep technical expertise and strategic vision that transformed AMD from near bankruptcy to a global leader in high-performance computing. Under her leadership, AMD's stock price increased over 50×, the company regained significant market share from Intel, and expanded into AI accelerators and data center dominance. Known for her hands-on technical knowledge, execution discipline, and long-term strategic thinking, Dr. Su has been recognized as one of the world's most influential business leaders. Her journey from IBM to Texas Instruments to Freescale and finally AMD demonstrates a career dedicated to semiconductor innovation and excellence."
    },
    {
      name: "Jean Hu",
      position: "CFO",
      bio: "Jean Hu serves as AMD's Chief Financial Officer, leading the company's financial strategy, planning, and operations. She oversees financial reporting, investor relations, treasury, tax, and corporate development functions. With extensive experience in technology finance, Jean ensures AMD's long-term financial stability and strategic capital allocation, supporting the company's aggressive growth initiatives in AI, data centers, and adaptive computing while maintaining strong profitability and shareholder value."
    },
    {
      name: "Rick Bergman",
      position: "EVP & COO",
      bio: "Rick Bergman serves as Executive Vice President and Chief Operating Officer at AMD, overseeing product development, engineering operations, and go-to-market execution across all business segments. With decades of semiconductor industry experience, Rick leads the technical teams responsible for delivering AMD's Ryzen, EPYC, Radeon, and Instinct product lines. His operational leadership ensures AMD consistently executes on ambitious product roadmaps and delivers industry-leading performance to customers worldwide."
    },
    {
      name: "Jack Huynh",
      position: "EVP & GM, Computing and Graphics",
      bio: "Jack Huynh leads AMD's Computing and Graphics Business Group, responsible for the strategy, development, and market execution of Ryzen processors and Radeon graphics products. He oversees AMD's efforts in the consumer PC, gaming, and content creation markets, ensuring the company delivers competitive, high-performance solutions that meet the evolving needs of gamers, creators, and enthusiasts. His leadership drives innovation in CPU and GPU technologies for the consumer and client computing segments."
    },
    {
      name: "Mark Papermaster",
      position: "CTO & EVP of Technology",
      bio: "Mark Papermaster serves as AMD's Chief Technology Officer and Executive Vice President of Technology and Engineering, leading the company's technology strategy, silicon architecture, and advanced product development. With a distinguished career in semiconductor engineering, Mark oversees AMD's long-term technology roadmaps, including Zen CPU architectures, RDNA GPU designs, chiplet innovations, and advanced packaging technologies. His technical leadership ensures AMD remains at the forefront of high-performance computing, driving breakthrough innovations in processor design, 3D stacking, and energy efficiency that define the future of computing for the next 5-10 years."
    }
  ];

  const cultureValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering breakthrough technologies and pushing the boundaries of computing performance and efficiency through continuous R&D investment."
    },
    {
      icon: Target,
      title: "Customer-First",
      description: "Delivering solutions that exceed customer expectations and solve real-world challenges across all industries and market segments."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all business practices, from supply chain management to customer relationships."
    },
    {
      icon: Users2,
      title: "Collaboration",
      description: "Building strong partnerships internally and externally to drive shared success and industry advancement."
    },
    {
      icon: Award,
      title: "Accountability",
      description: "Taking ownership of results and maintaining the highest standards of execution, quality, and performance."
    },
    {
      icon: HandHeart,
      title: "Passion",
      description: "Bringing energy, enthusiasm, and dedication to solving the hardest problems in computing technology."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Hero 
        title="Organization & Leadership" 
        subtitle="Structure, leadership, and culture driving AMD's success"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Business Structure</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            AMD operates through four primary business divisions, each focused on specific market segments 
            and customer needs. The company employs a fabless manufacturing model, partnering with leading 
            foundries like TSMC and Samsung for chip production.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {divisions.map((division, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all hover-scale">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <division.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{division.title}</h3>
                <p className="text-muted-foreground">{division.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Fabless Manufacturing Model</h2>
          <Card className="p-8 bg-card border-border max-w-4xl">
            <p className="text-muted-foreground mb-4">
              AMD focuses on design, development, and marketing while outsourcing manufacturing to specialized 
              semiconductor foundries. This capital-efficient model allows AMD to:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span>Focus resources on innovation and product development rather than fabrication facilities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span>Leverage leading-edge manufacturing processes from partners like TSMC and GlobalFoundries</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span>Maintain flexibility in production capacity and reduce capital expenditure requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span>Access best-in-class manufacturing technology without building and maintaining fabs</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Product Development</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            AMD's engineering teams drive innovation across multiple product lines, developing cutting-edge 
            architectures and technologies that define the future of computing.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">CPU Engineering</h3>
              <p className="text-muted-foreground">Zen architecture development, chiplet design, and x86 processor innovation for consumer and data center markets.</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">GPU Engineering</h3>
              <p className="text-muted-foreground">RDNA architecture, ray tracing technology, and graphics solutions for gaming, professional, and AI workloads.</p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Cog className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Systems Integration</h3>
              <p className="text-muted-foreground">Platform development, software ecosystems (ROCm, drivers, compilers), and advanced R&D for 5-10 year horizon technologies.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Operations & Manufacturing</h2>
          <Card className="p-8 bg-card border-border max-w-4xl">
            <p className="text-muted-foreground mb-6">
              AMD's fabless manufacturing strategy partners with world-class semiconductor foundries to produce 
              cutting-edge chips while focusing internal resources on design and innovation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Foundry Partnerships</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Strategic relationships with TSMC, Samsung, and GlobalFoundries provide access to leading-edge 
                  manufacturing processes (5nm, 3nm, and beyond).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Supply Chain Optimization</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Advanced planning and logistics ensure efficient production, inventory management, and global 
                  distribution to meet customer demand.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Quality Assurance</h4>
                <p className="text-sm text-muted-foreground">
                  Rigorous testing protocols and yield optimization processes maintain the highest product quality 
                  standards across all manufacturing partners.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Capacity Planning</h4>
                <p className="text-sm text-muted-foreground">
                  Strategic allocation of wafer capacity across product lines to maximize revenue and meet market 
                  demand across consumer, enterprise, and embedded segments.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Marketing & Sales</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Consumer Marketing</h3>
              <p className="text-muted-foreground mb-3">
                Building strong brand presence for Ryzen processors and Radeon graphics through digital campaigns, 
                gaming partnerships, and enthusiast community engagement.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Sales</h3>
              <p className="text-muted-foreground mb-3">
                Direct sales teams working with data center customers, cloud providers, and enterprise IT to deploy 
                EPYC processors and Instinct accelerators at scale.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">OEM Partnerships</h3>
              <p className="text-muted-foreground mb-3">
                Strategic relationships with Dell, HP, Lenovo, and other system builders to integrate AMD processors 
                into consumer and commercial PC platforms worldwide.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud Partnerships</h3>
              <p className="text-muted-foreground mb-3">
                Collaboration with AWS, Microsoft Azure, Google Cloud, and other hyperscalers to power cloud 
                infrastructure with AMD EPYC and Instinct technologies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Executive Leadership</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            AMD's leadership team brings decades of technology industry experience and a proven track record 
            of execution and innovation.
          </p>
          
          <Card className="p-8 bg-card border-border mb-12 max-w-4xl">
            <h3 className="text-2xl font-bold mb-4 text-primary">Dr. Lisa Su's Leadership Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dr. Lisa Su's path to AMD's CEO position demonstrates a remarkable career trajectory through the 
                semiconductor industry's most influential companies. After earning her PhD from MIT, she began at 
                IBM where she developed advanced semiconductor technologies, then moved to Texas Instruments and 
                Freescale before joining AMD in 2012.
              </p>
              <p>
                Since becoming CEO in 2014, Dr. Su has orchestrated one of the most impressive turnarounds in 
                technology history. Under her leadership, AMD's stock price increased over 50×, the company regained 
                significant CPU market share from Intel, expanded into AI accelerators and data center dominance, 
                and completed strategic acquisitions including the $49B Xilinx deal.
              </p>
              <p>
                Known for her deep technical knowledge, hands-on leadership style, and long-term strategic vision, 
                Dr. Su has been recognized globally as one of the world's most influential business leaders and a 
                role model for women in technology and engineering.
              </p>
            </div>
          </Card>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">Leadership Team</h3>
            <p className="text-muted-foreground mb-6">Click on any leader to view their full biography.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {leaders.map((leader, index) => (
              <ProfileCard key={index} {...leader} />
            ))}
          </div>

          <Card className="p-8 bg-card border-border max-w-4xl">
            <h3 className="text-2xl font-bold mb-4 text-primary">Leadership Culture</h3>
            <p className="text-muted-foreground mb-4">
              AMD's leadership approach emphasizes collaboration, technical depth, and data-driven decision making. 
              The executive team maintains:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span><strong>Weekly Alignment Meetings:</strong> Regular cross-functional coordination to ensure organizational alignment on priorities and execution</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span><strong>Transparency:</strong> Open communication about strategy, challenges, and performance across the organization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span><strong>Long-term Focus:</strong> Strategic planning horizons of 3-5 years balanced with quarterly execution discipline</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-2 w-2 bg-primary rounded-full mt-2" />
                <span><strong>Technical Depth:</strong> Leaders with deep engineering expertise who understand the products and technologies at a fundamental level</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Company Culture & Values</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            AMD's culture is built on core values that guide decision-making, shape employee experience, 
            and define how the company operates globally.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {cultureValues.map((value, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Social Responsibility & Sustainability</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Carbon Neutrality Goals</h3>
              <p className="text-muted-foreground mb-3">
                Committed to achieving carbon neutrality across all AMD operations by 2030 through energy-efficient 
                product design, renewable energy adoption, and sustainable manufacturing practices.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">30× Energy Efficiency Target</h3>
              <p className="text-muted-foreground mb-3">
                Targeting a 30-fold improvement in energy efficiency of AMD processors and accelerators by 2025, 
                reducing the environmental impact of computing infrastructure globally.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Users2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Diversity & Inclusion</h3>
              <p className="text-muted-foreground mb-3">
                Building an inclusive workplace that celebrates diversity, with specific goals for increased 
                representation of women and underrepresented groups in technical and leadership roles.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">STEM Education</h3>
              <p className="text-muted-foreground mb-3">
                Supporting science, technology, engineering, and mathematics education programs worldwide to inspire 
                the next generation of innovators and technology leaders.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Ethical Supply Chain</h3>
              <p className="text-muted-foreground mb-3">
                Maintaining responsible supply chain practices with strict ethical standards for labor conditions, 
                environmental impact, and materials sourcing throughout the manufacturing ecosystem.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                <HandHeart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Community Impact</h3>
              <p className="text-muted-foreground mb-3">
                Engaging with local communities through volunteer programs, charitable giving, and partnerships 
                that address education, environmental, and social challenges.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Workplace Culture</h2>
          <Card className="p-8 bg-card border-border max-w-4xl">
            <p className="text-muted-foreground mb-6">
              AMD fosters a dynamic, innovative workplace where employees are empowered to do their best work 
              and advance their careers.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Stock Options & Equity</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Broad-based equity compensation programs align employee success with company performance and 
                  long-term value creation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Hybrid Work Flexibility</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Flexible work arrangements supporting work-life balance while maintaining collaborative 
                  innovation and team cohesion.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive training programs, technical certifications, conference attendance, and tuition 
                  reimbursement for ongoing professional development.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Innovation Time</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Dedicated time and resources for employees to explore new ideas, experiment with emerging 
                  technologies, and drive technical innovation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Recognition Programs</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Formal awards and recognition for technical excellence, innovation, collaboration, and 
                  contributions to AMD's success and culture.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Health & Wellness</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive health benefits, mental health support, fitness programs, and wellness initiatives 
                  supporting employee wellbeing.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Talent & Development</h2>
          <Card className="p-8 bg-card border-border max-w-4xl">
            <p className="text-muted-foreground mb-4">
              AMD invests significantly in employee development and career growth through comprehensive programs 
              designed to build technical expertise, leadership capabilities, and career advancement opportunities:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Professional Development</h4>
                <p className="text-sm text-muted-foreground">
                  Continuous learning programs, advanced technical training, leadership development tracks, and 
                  structured mentorship opportunities connecting employees with senior technical and business leaders.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Competitive Benefits</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive health coverage, equity compensation programs, 401(k) retirement plans with matching, 
                  and flexible work arrangements supporting work-life integration.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Innovation Culture</h4>
                <p className="text-sm text-muted-foreground">
                  Encouraging experimentation, supporting calculated risk-taking, fostering cross-functional 
                  collaboration, and formal recognition of technical excellence and breakthrough innovations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Global Opportunities</h4>
                <p className="text-sm text-muted-foreground">
                  Career mobility across geographic regions and business units, international assignment opportunities, 
                  and exposure to diverse perspectives, technologies, and market challenges.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Organization;
