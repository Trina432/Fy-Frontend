import { Badge } from "@/components/ui/badge";

const applications = [
  { id: 1, job: "Senior React Developer", company: "TechCorp", date: "2026-03-28", status: "Interview" },
  { id: 2, job: "Product Designer", company: "DesignLab", date: "2026-03-25", status: "Applied" },
  { id: 3, job: "Backend Engineer", company: "DataFlow", date: "2026-03-20", status: "Offered" },
  { id: 4, job: "DevOps Lead", company: "CloudBase", date: "2026-03-15", status: "Rejected" },
  { id: 5, job: "ML Engineer", company: "AI Labs", date: "2026-03-10", status: "Applied" },
];

const statusColors: Record<string, string> = {
  Applied: "bg-neo-blue text-neo-blue-foreground",
  Interview: "bg-neo-yellow text-neo-yellow-foreground",
  Offered: "bg-success text-success-foreground",
  Rejected: "bg-destructive text-destructive-foreground",
};

const TrackOpenings = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-mono mb-2">Track Applications</h1>
        <p className="text-muted-foreground font-semibold mb-10">
          Monitor your job application status
        </p>

        <div className="neo-border-thick neo-shadow-lg overflow-hidden card-border-blue">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-[3px] border-border bg-muted">
                  <th className="text-left p-4 font-bold uppercase text-xs tracking-wider">Job Title</th>
                  <th className="text-left p-4 font-bold uppercase text-xs tracking-wider">Company</th>
                  <th className="text-left p-4 font-bold uppercase text-xs tracking-wider">Date</th>
                  <th className="text-left p-4 font-bold uppercase text-xs tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} className={`border-b-[3px] border-border last:border-b-0 neo-hover ${
                    app.id % 4 === 1 ? 'card-border-blue' : app.id % 4 === 2 ? 'card-border-green' : app.id % 4 === 3 ? 'card-border-purple' : 'card-border-yellow'
                  }`}>
                    <td className="p-4 font-bold">{app.job}</td>
                    <td className="p-4 font-semibold text-muted-foreground">{app.company}</td>
                    <td className="p-4 font-semibold text-sm">{app.date}</td>
                    <td className="p-4">
                      <Badge className={`neo-border font-bold ${statusColors[app.status]}`}>
                        {app.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOpenings;
