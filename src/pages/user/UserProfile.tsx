import { useAuth } from "@/contexts/AuthContext";
import { Mail, MapPin, Calendar } from "lucide-react";

const timeline = [
  { date: "Mar 28", event: "Applied to Senior React Developer", status: "Interview" },
  { date: "Mar 25", event: "Applied to Product Designer", status: "Applied" },
  { date: "Mar 20", event: "Received offer from DataFlow", status: "Offered" },
  { date: "Mar 15", event: "Rejected by CloudBase", status: "Rejected" },
];

const statusDot: Record<string, string> = {
  Interview: "bg-neo-yellow",
  Applied: "bg-neo-blue",
  Offered: "bg-success",
  Rejected: "bg-destructive",
};

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="py-16 bg-polka min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className={`bg-background neo-border-thick neo-shadow-lg p-8 mb-8 card-border-blue`}>
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-neo-purple neo-border-thick flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-neo-purple-foreground">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold font-mono">{user?.name || "User"}</h1>
              <div className="flex flex-wrap gap-4 mt-3 text-sm font-semibold text-muted-foreground">
                <span className="flex items-center gap-1"><Mail className="w-4 h-4" />{user?.email}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />San Francisco, CA</span>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-neo-yellow neo-border text-xs font-bold">React</span>
                <span className="px-3 py-1 bg-neo-blue text-neo-blue-foreground neo-border text-xs font-bold">TypeScript</span>
                <span className="px-3 py-1 bg-neo-purple text-neo-purple-foreground neo-border text-xs font-bold">Node.js</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Application Timeline</h2>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 neo-border ${statusDot[item.status]}`} />
                {i < timeline.length - 1 && <div className="w-[3px] h-16 bg-border" />}
              </div>
              <div className={`bg-background neo-border neo-shadow p-4 flex-1 mb-4 ${
                i % 4 === 0 ? 'card-border-blue' : i % 4 === 1 ? 'card-border-green' : i % 4 === 2 ? 'card-border-purple' : 'card-border-yellow'
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs font-bold text-muted-foreground">{item.date}</span>
                </div>
                <p className="font-bold text-sm">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
