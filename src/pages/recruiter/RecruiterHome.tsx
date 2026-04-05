import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Megaphone, Users, TrendingUp } from "lucide-react";

const RecruiterHome = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-grid py-20">
        <div className="container mx-auto px-4 text-center">
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
          <p className="text-lg md:text-xl lg:text-xl font-semibold text-muted-foreground mb-8 md:mb-10 lg:mb-12 max-w-xl mx-auto">
            AI-powered campaigns. Real candidates. Zero guesswork.
          </p>
          <Link
            to="/recruiter/campaign/new"
            className="inline-flex items-center gap-2 px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-neo-purple text-neo-purple-foreground neo-border-thick neo-shadow-lg font-bold text-base md:text-lg lg:text-xl uppercase neo-hover"
          >
            <Plus className="w-5 h-5" />
            Create Campaign
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-polka py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              { icon: Megaphone, label: "Active Campaigns", value: "8", color: "bg-neo-pink-900" },
              { icon: Users, label: "Candidates", value: "342", color: "bg-neo-blue" },
              { icon: TrendingUp, label: "Hire Rate", value: "67%", color: "bg-success" },
            ].map((s, i) => (
              <div key={i} className={`bg-background neo-border-thick neo-shadow-lg p-6 neo-hover ${
                s.color === 'bg-neo-pink-900' ? 'dark:card-border-pink-900' :
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
    </div>
  );
};

export default RecruiterHome;
