import { motion } from "framer-motion";
import { Users, Briefcase, UserCheck, FileText, TrendingUp, Activity } from "lucide-react";

const stats = [
  { label: "Total Users", value: "2,847", icon: Users, color: "bg-neo-blue" },
  { label: "Active Jobs", value: "156", icon: Briefcase, color: "bg-neo-yellow" },
  { label: "Recruiters", value: "89", icon: UserCheck, color: "bg-neo-purple" },
  { label: "Applications", value: "4,231", icon: FileText, color: "bg-success" },
];

const AdminDashboard = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-mono mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground font-semibold mb-10">Platform overview & management</p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`neo-border-thick neo-shadow-lg neo-hover p-6 ${
                s.color === 'bg-neo-blue' ? 'dark:card-border-blue' :
                s.color === 'bg-neo-yellow' ? 'dark:card-border-yellow' :
                s.color === 'bg-neo-purple' ? 'dark:card-border-purple' :
                'dark:card-border-success'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${s.color} neo-border flex items-center justify-center`}>
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <p className="text-3xl font-bold font-mono">{s.value}</p>
              <p className="text-sm font-semibold text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart containers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="neo-border-thick neo-shadow-lg p-6 dark:card-border-purple">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5" />
              <h3 className="font-bold text-lg">Applications Over Time</h3>
            </div>
            <div className="h-48 bg-muted neo-border flex items-center justify-center">
              <p className="font-bold text-muted-foreground">Chart Placeholder</p>
            </div>
          </div>
          <div className="neo-border-thick neo-shadow-lg p-6 dark:card-border-yellow">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5" />
              <h3 className="font-bold text-lg">Hiring Funnel</h3>
            </div>
            <div className="h-48 bg-muted neo-border flex items-center justify-center">
              <p className="font-bold text-muted-foreground">Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
