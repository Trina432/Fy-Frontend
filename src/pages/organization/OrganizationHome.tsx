import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Megaphone, Users, TrendingUp, CheckCircle, Brain, Target } from "lucide-react";

const OrganizationHome = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-grid py-20 pb-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-mono mb-6"
            >
              Recruit{" "}
              <span className="bg-neo-purple text-neo-purple-foreground px-2 neo-border neo-shadow inline-block">
                Smarter
              </span>
            </motion.h1>
            <p className="text-lg md:text-xl lg:text-xl font-semibold text-muted-foreground mb-8 md:mb-10 lg:mb-12 max-w-xl mx-auto md:mx-0">
              AI-powered campaigns. Real candidates. Zero guesswork. Let our 3D intelligence engine handle your hiring.
            </p>
            <Link
              to="/organization/campaign/new"
              className="inline-flex items-center gap-2 px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-neo-purple text-neo-purple-foreground neo-border-thick neo-shadow-lg font-bold text-base md:text-lg lg:text-xl uppercase neo-hover"
            >
              <Plus className="w-5 h-5" />
              Create Campaign
            </Link>
          </div>

          <div className="flex-1 flex justify-center items-center h-64 md:h-96 w-full py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-sm group"
            >
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="absolute inset-0 bg-neo-yellow translate-x-4 translate-y-4 neo-border-thick transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                <div className="absolute inset-0 bg-neo-blue translate-x-2 translate-y-2 neo-border-thick transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
                <img 
                  src="/hiring_infographic.png" 
                  alt="Hiring Infographic" 
                  className="relative z-20 w-full h-auto object-cover neo-border-thick bg-background transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2 filter hover:brightness-105"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-polka py-16" style={{ borderTop: "4px solid hsl(var(--border))", borderBottom: "4px solid hsl(var(--border))" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              { icon: Megaphone, label: "Active Campaigns", value: "8", color: "bg-destructive" },
              { icon: Users, label: "Candidates", value: "342", color: "bg-neo-blue" },
              { icon: TrendingUp, label: "Hire Rate", value: "67%", color: "bg-success" },
            ].map((s, i) => (
              <div key={i} className={`bg-background neo-border-thick neo-shadow-lg p-6 neo-hover ${
                s.color === 'bg-destructive' ? 'dark:card-border-red' :
                s.color === 'bg-neo-blue' ? 'dark:card-border-blue' :
                'dark:card-border-success'
              }`}>
                <div className={`w-12 h-12 ${s.color} neo-border flex items-center justify-center mb-4`}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-3xl font-bold font-mono">{s.value}</p>
                <p className="text-sm font-semibold text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">Built For Scale</h2>
            <p className="text-lg font-semibold text-muted-foreground">Minimalistic. Brutal. Highly effective. Our AI engine cuts the noise and finds the signal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="neo-border-thick neo-shadow-lg bg-neo-yellow p-8">
              <h3 className="text-3xl font-bold font-mono mb-4 text-black">Precision Targeting</h3>
              <p className="text-black font-semibold mb-6">Stop wasting time on manual resume screening. Our AI evaluates candidates based on real skills, instantly filtering out noise and presenting you with top-tier talent ready to interview.</p>
              <div className="h-40 bg-white neo-border flex items-center justify-center p-4">
                 <div className="w-full flex justify-between items-end h-full gap-2 opacity-50">
                   <div className="w-full bg-black h-1/4 neo-border transition-all duration-500 hover:h-2/4" />
                   <div className="w-full bg-black h-2/4 neo-border transition-all duration-500 hover:h-3/4" />
                   <div className="w-full bg-black h-3/4 neo-border transition-all duration-500 hover:h-full" />
                   <div className="w-full bg-black h-full neo-border" />
                 </div>
              </div>
            </div>

            <div className="neo-border-thick neo-shadow-lg bg-neo-blue p-8">
              <h3 className="text-3xl font-bold font-mono mb-4 text-black">Interactive Intelligence</h3>
              <p className="text-black font-semibold mb-6">Our automated AI video interviewer acts as your advanced technical screener. It asks dynamic questions tailored to the candidate's resume and scores them in real-time.</p>
              <ul className="space-y-4 font-bold text-black border-l-4 border-black pl-4">
                <li>Automated Scheduling</li>
                <li>Dynamic Question Generation</li>
                <li>Real-time Bias Checking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OrganizationHome;
