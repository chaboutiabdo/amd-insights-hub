import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LeaderCard from "@/components/LeaderCard";
import { Card } from "@/components/ui/card";
import { Building2, Users, Sparkles, Factory } from "lucide-react";

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
      bio: "Leading AMD's transformation since 2014, driving innovation in high-performance computing and AI. PhD in Electrical Engineering from MIT."
    },
    {
      name: "Devinder Kumar",
      position: "CFO & Treasurer",
      bio: "Oversees financial strategy, operations, and investor relations with extensive experience in technology finance."
    },
    {
      name: "Mark Papermaster",
      position: "CTO & EVP of Technology",
      bio: "Leads AMD's technology development and product engineering across all business segments."
    }
  ];

  const cultureValues = [
    {
      title: "Innovation-Driven",
      description: "Fostering breakthrough technologies and pushing the boundaries of computing performance and efficiency."
    },
    {
      title: "Customer-Focused",
      description: "Delivering solutions that exceed customer expectations and solve real-world challenges across industries."
    },
    {
      title: "Accountability",
      description: "Taking ownership of results and maintaining the highest standards of execution and integrity."
    },
    {
      title: "Diversity & Inclusion",
      description: "Building teams that reflect global perspectives and creating an environment where everyone can thrive."
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
          <h2 className="text-4xl font-bold mb-6">Executive Leadership</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            AMD's leadership team brings decades of technology industry experience and a proven track record 
            of execution and innovation.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {leaders.map((leader, index) => (
              <LeaderCard key={index} {...leader} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Company Culture</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            AMD's culture is built on core values that guide decision-making, shape employee experience, 
            and define how the company operates globally.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {cultureValues.map((value, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Talent & Development</h2>
          <Card className="p-8 bg-card border-border max-w-4xl">
            <p className="text-muted-foreground mb-4">
              AMD invests significantly in employee development and career growth through:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Professional Development</h4>
                <p className="text-sm text-muted-foreground">
                  Continuous learning programs, technical training, leadership development, and mentorship opportunities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Competitive Benefits</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive health coverage, equity compensation, retirement plans, and flexible work arrangements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Innovation Culture</h4>
                <p className="text-sm text-muted-foreground">
                  Encouraging experimentation, cross-functional collaboration, and recognition of technical excellence.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Global Opportunities</h4>
                <p className="text-sm text-muted-foreground">
                  Career mobility across regions and business units, fostering diverse perspectives and experiences.
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
