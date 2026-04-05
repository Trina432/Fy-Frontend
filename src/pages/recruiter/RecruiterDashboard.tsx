import { BarChart3, Users, CheckCircle, Clock } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const campaigns = [
  { id: 1, title: "Senior React Dev", applicants: 45, interviews: 12, offers: 3, status: "Active" },
  { id: 2, title: "Product Designer", applicants: 38, interviews: 8, offers: 2, status: "Active" },
  { id: 3, title: "Backend Engineer", applicants: 62, interviews: 15, offers: 5, status: "Closed" },
  { id: 4, title: "ML Researcher", applicants: 25, interviews: 5, offers: 1, status: "Active" },
];

const chartData = campaigns.map(c => ({
  name: c.title.split(' ')[0], 
  applicants: c.applicants,
  interviews: c.interviews,
  offers: c.offers
}));

const RecruiterDashboard = () => {
  return (
    <div className="py-16 bg-polka min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-2">Campaign Dashboard</h1>
        <p className="text-muted-foreground font-semibold mb-8 md:mb-10 lg:mb-12">Monitor your hiring campaigns</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-10 lg:mb-12">
          {[
            { label: "Total Applicants", val: "170", icon: Users, bg: "bg-neo-blue" },
            { label: "Interviews Done", val: "40", icon: BarChart3, bg: "bg-neo-purple" },
            { label: "Offers Made", val: "11", icon: CheckCircle, bg: "bg-success" },
            { label: "Avg Time to Hire", val: "12d", icon: Clock, bg: "bg-neo-yellow" },
          ].map((m, i) => (
            <div key={i} className={`neo-border neo-shadow p-6 bg-background ${
              m.bg === 'bg-neo-blue' ? 'dark:card-border-blue' :
              m.bg === 'bg-neo-purple' ? 'dark:card-border-purple' :
              m.bg === 'bg-success' ? 'dark:card-border-success' :
              'dark:card-border-yellow'
            }`}>
              <div className={`w-10 h-10 ${m.bg} neo-border flex items-center justify-center mb-4`}>
                <m.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-3xl font-bold font-mono">{m.val}</p>
              <p className="text-sm font-semibold text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 neo-border-thick neo-shadow-lg p-6 bg-background dark:card-border-purple">
             <h3 className="text-xl font-bold font-mono mb-6">Funnel Overview</h3>
             <div className="h-72 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="name" tick={{fontFamily: 'monospace', fontWeight: 'bold'}} stroke="hsl(var(--foreground))" />
                    <YAxis tick={{fontFamily: 'monospace', fontWeight: 'bold'}} stroke="hsl(var(--foreground))" />
                    <Tooltip cursor={{fill: 'hsl(var(--muted))'}} contentStyle={{backgroundColor: 'hsl(var(--background))', border: '3px solid hsl(var(--border))', borderRadius: 0, fontWeight: 'bold'}} />
                    <Legend wrapperStyle={{fontWeight: 'bold', paddingTop: '10px'}} />
                    <Bar dataKey="applicants" fill="hsl(var(--neo-blue))" stroke="hsl(var(--border))" strokeWidth={3} name="Applicants" />
                    <Bar dataKey="interviews" fill="hsl(var(--neo-yellow))" stroke="hsl(var(--border))" strokeWidth={3} name="Interviews" />
                    <Bar dataKey="offers" fill="hsl(var(--success))" stroke="hsl(var(--border))" strokeWidth={3} name="Offers" />
                  </BarChart>
               </ResponsiveContainer>
             </div>
          </div>
          
          <div className="neo-border-thick neo-shadow-lg p-6 bg-neo-yellow dark:card-border-yellow flex flex-col justify-center text-center">
             <h3 className="text-2xl font-bold font-mono text-black mb-4">Conversion Rate</h3>
             <p className="text-7xl font-bold font-mono text-black neo-shadow-text mb-4">23%</p>
             <p className="text-black font-semibold">Of applicants make it to the interview stage. Better than industry average!</p>
          </div>
        </div>

        {/* Campaigns Table */}
        <div className="neo-border-thick neo-shadow-lg overflow-hidden bg-background">
          <div className="p-4 border-b-[3px] border-border bg-neo-purple">
            <h3 className="font-bold text-xl text-primary-foreground font-mono inline-block">Active Campaigns</h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b-[3px] border-border bg-muted">
                <th className="text-left p-4 font-bold text-xs uppercase tracking-wider">Campaign</th>
                <th className="text-left p-4 font-bold text-xs uppercase tracking-wider">Applicants</th>
                <th className="text-left p-4 font-bold text-xs uppercase tracking-wider">Interviews</th>
                <th className="text-left p-4 font-bold text-xs uppercase tracking-wider">Offers</th>
                <th className="text-left p-4 font-bold text-xs uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id} className="border-b-[3px] border-border last:border-b-0 neo-hover">
                  <td className="p-4 font-bold">{c.title}</td>
                  <td className="p-4 font-mono font-bold">{c.applicants}</td>
                  <td className="p-4 font-mono font-bold">{c.interviews}</td>
                  <td className="p-4 font-mono font-bold">{c.offers}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 neo-border font-bold text-xs ${
                      c.status === "Active" ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
