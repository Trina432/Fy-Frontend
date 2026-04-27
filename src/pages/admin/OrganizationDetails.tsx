import { Users, Briefcase, BarChart3 } from "lucide-react";

const organizations = [
  { id: 1, name: "Sarah Chen", company: "TechCorp", campaigns: 5, hired: 23 },
  { id: 2, name: "Mike Ross", company: "DesignLab", campaigns: 3, hired: 12 },
  { id: 3, name: "Lena Park", company: "DataFlow", campaigns: 8, hired: 45 },
  { id: 4, name: "James Lee", company: "CloudBase", campaigns: 2, hired: 8 },
];

const OrganizationDetails = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-mono mb-2">Organization Details</h1>
        <p className="text-muted-foreground font-semibold mb-10">Overview of all organizations</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organizations.map((r) => (
            <div key={r.id} className="bg-card neo-border-thick neo-shadow-lg p-6 neo-hover dark:card-border-purple">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-neo-purple neo-border-thick flex items-center justify-center">
                  <span className="text-xl font-bold text-neo-purple-foreground">{r.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">{r.name}</h3>
                  <p className="text-sm font-semibold text-muted-foreground">{r.company}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-muted neo-border p-3 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  <div>
                    <p className="text-lg font-bold font-mono">{r.campaigns}</p>
                    <p className="text-xs font-semibold text-muted-foreground">Campaigns</p>
                  </div>
                </div>
                <div className="bg-muted neo-border p-3 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <div>
                    <p className="text-lg font-bold font-mono">{r.hired}</p>
                    <p className="text-xs font-semibold text-muted-foreground">Hired</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizationDetails;
