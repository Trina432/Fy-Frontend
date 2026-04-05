import { BarChart3, Users, CheckCircle, Clock } from "lucide-react";

const campaigns = [
  { id: 1, title: "Senior React Dev", applicants: 45, interviews: 12, offers: 3, status: "Active" },
  { id: 2, title: "Product Designer", applicants: 38, interviews: 8, offers: 2, status: "Active" },
  { id: 3, title: "Backend Engineer", applicants: 62, interviews: 15, offers: 5, status: "Closed" },
];

const RecruiterDashboard = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono mb-2">Campaign Dashboard</h1>
        <p className="text-muted-foreground font-semibold mb-8 md:mb-10 lg:mb-12">Monitor your hiring campaigns</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-8 md:mb-10 lg:mb-12">
          {[
            { label: "Total Applicants", val: "145", icon: Users, bg: "bg-neo-blue" },
            { label: "Interviews Done", val: "35", icon: BarChart3, bg: "bg-neo-purple" },
            { label: "Offers Made", val: "10", icon: CheckCircle, bg: "bg-success" },
            { label: "Avg Time to Hire", val: "12d", icon: Clock, bg: "bg-neo-yellow" },
          ].map((m, i) => (
            <div key={i} className={`neo-border neo-shadow p-4 ${
              m.bg === 'bg-neo-blue' ? 'dark:card-border-blue' :
              m.bg === 'bg-neo-purple' ? 'dark:card-border-purple' :
              m.bg === 'bg-success' ? 'dark:card-border-success' :
              'dark:card-border-yellow'
            }`}>
              <div className={`w-8 h-8 ${m.bg} neo-border flex items-center justify-center mb-2`}>
                <m.icon className="w-4 h-4 text-primary-foreground" />
              </div>
              <p className="text-2xl font-bold font-mono">{m.val}</p>
              <p className="text-xs font-semibold text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Campaigns Table */}
        <div className="neo-border-thick neo-shadow-lg overflow-hidden dark:card-border-purple">
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
