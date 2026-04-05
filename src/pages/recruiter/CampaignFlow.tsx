import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Video, Award, Send } from "lucide-react";

const mockCandidates = [
  { id: 1, name: "Alice Johnson", interviewScore: 85, aiRating: 92, video: true, status: "Passed" },
  { id: 2, name: "Bob Smith", interviewScore: 72, aiRating: 78, video: true, status: "Passed" },
  { id: 3, name: "Carol Davis", interviewScore: 65, aiRating: 60, video: false, status: "Failed" },
  { id: 4, name: "Dan Wilson", interviewScore: 91, aiRating: 95, video: true, status: "Passed" },
  { id: 5, name: "Eva Brown", interviewScore: 55, aiRating: 48, video: true, status: "Failed" },
];

const CampaignFlow = () => {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState("scoreboard");
  const [showOfferModal, setShowOfferModal] = useState(false);

  const sections = ["description", "scoreboard", "interview", "merit", "verification", "offer"];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-mono mb-2">Campaign #{id}</h1>
        <p className="text-muted-foreground font-semibold mb-8">Manage the full hiring pipeline</p>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSection(s)}
              className={`px-4 py-2 neo-border font-bold text-sm uppercase neo-hover ${
                activeSection === s ? "bg-neo-yellow neo-shadow" : "bg-background"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Description */}
        {activeSection === "description" && (
          <div className="neo-border-thick neo-shadow-lg p-6 max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Campaign Description</h3>
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-sm mb-1 uppercase">Title</label>
                <input className="w-full px-4 py-3 neo-border bg-background font-semibold" defaultValue="Senior React Developer" />
              </div>
              <div>
                <label className="block font-bold text-sm mb-1 uppercase">Description</label>
                <textarea className="w-full px-4 py-3 neo-border bg-background font-semibold h-32" defaultValue="Looking for an experienced React developer..." />
              </div>
              <button className="px-6 py-2 bg-primary text-primary-foreground neo-border neo-shadow font-bold uppercase neo-hover">Save</button>
            </div>
          </div>
        )}

        {/* Scoreboard */}
        {activeSection === "scoreboard" && (
          <div className="neo-border-thick neo-shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b-[3px] border-border bg-muted">
                  <th className="text-left p-4 font-bold text-xs uppercase">Candidate</th>
                  <th className="text-left p-4 font-bold text-xs uppercase">Interview Score</th>
                  <th className="text-left p-4 font-bold text-xs uppercase">AI Rating</th>
                  <th className="text-left p-4 font-bold text-xs uppercase">Video</th>
                  <th className="text-left p-4 font-bold text-xs uppercase">Status</th>
                  <th className="text-left p-4 font-bold text-xs uppercase">Review</th>
                </tr>
              </thead>
              <tbody>
                {mockCandidates.map((c) => (
                  <tr
                    key={c.id}
                    className={`border-b-[3px] border-border last:border-b-0 ${
                      c.interviewScore >= 70 ? "" : "opacity-60"
                    }`}
                  >
                    <td className="p-4 font-bold">{c.name}</td>
                    <td className="p-4">
                      <span className={`font-mono font-bold px-2 py-0.5 neo-border ${
                        c.interviewScore >= 70 ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"
                      }`}>
                        {c.interviewScore}
                      </span>
                    </td>
                    <td className="p-4 font-mono font-bold">{c.aiRating}</td>
                    <td className="p-4">
                      {c.video && <Video className="w-5 h-5 text-neo-blue" />}
                    </td>
                    <td className="p-4">
                      <Badge className={`neo-border font-bold ${
                        c.status === "Passed" ? "bg-success text-success-foreground" : "bg-destructive text-destructive-foreground"
                      }`}>
                        {c.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Link
                        to={`/recruiter/candidate/${c.id}`}
                        className="px-3 py-1 bg-neo-purple text-neo-purple-foreground neo-border font-bold text-xs uppercase neo-hover"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* AI Interview Section */}
        {activeSection === "interview" && (
          <div className="bg-polka-purple p-8 neo-border-thick">
            <h3 className="text-2xl font-bold text-neo-purple-foreground mb-4">AI Interview Configuration</h3>
            <p className="text-neo-purple-foreground/80 font-semibold mb-6">Configure automated interview questions</p>
            <div className="bg-background neo-border-thick p-6 max-w-2xl">
              <p className="font-bold mb-2">Questions configured: 5</p>
              <p className="text-sm text-muted-foreground font-semibold mb-4">Candidates will have 2 min per question</p>
              <button className="px-6 py-2 bg-neo-purple text-neo-purple-foreground neo-border neo-shadow font-bold uppercase neo-hover">
                Edit Questions
              </button>
            </div>
          </div>
        )}

        {/* Merit List */}
        {activeSection === "merit" && (
          <div className="bg-polka-purple p-8 neo-border-thick">
            <h3 className="text-2xl font-bold text-neo-purple-foreground mb-6">Final Merit List</h3>
            <div className="space-y-3">
              {mockCandidates
                .filter((c) => c.interviewScore >= 70)
                .sort((a, b) => b.aiRating - a.aiRating)
                .map((c, i) => (
                  <div key={c.id} className="bg-background neo-border-thick p-4 flex items-center justify-between neo-hover">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-neo-yellow neo-border flex items-center justify-center">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold">#{i + 1} {c.name}</p>
                        <p className="text-xs font-semibold text-muted-foreground">AI Score: {c.aiRating}</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-lg">{c.aiRating}%</span>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Verification */}
        {activeSection === "verification" && (
          <div className="neo-border-thick neo-shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Document Verification</h3>
            <p className="text-muted-foreground font-semibold">Verify candidate documents before sending offers.</p>
          </div>
        )}

        {/* Offer */}
        {activeSection === "offer" && (
          <div className="neo-border-thick neo-shadow-lg p-6">
            <h3 className="font-bold text-lg mb-4">Send Offer Letters</h3>
            <div className="space-y-3">
              {mockCandidates.filter((c) => c.status === "Passed").map((c) => (
                <div key={c.id} className="neo-border p-4 flex items-center justify-between neo-hover">
                  <span className="font-bold">{c.name}</span>
                  <button
                    onClick={() => setShowOfferModal(true)}
                    className="px-4 py-2 bg-success text-success-foreground neo-border neo-shadow font-bold text-xs uppercase neo-hover flex items-center gap-2"
                  >
                    <Send className="w-3 h-3" /> Send Offer
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Offer Modal */}
        {showOfferModal && (
          <div className="fixed inset-0 bg-foreground/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background neo-border-thick neo-shadow-lg p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold font-mono mb-4">Send Offer Letter</h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-bold text-sm mb-1 uppercase">Position</label>
                  <input className="w-full px-4 py-2 neo-border font-semibold" defaultValue="Senior React Developer" />
                </div>
                <div>
                  <label className="block font-bold text-sm mb-1 uppercase">Salary</label>
                  <input className="w-full px-4 py-2 neo-border font-semibold" defaultValue="$140,000" />
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-success text-success-foreground neo-border neo-shadow font-bold uppercase neo-hover">
                    Confirm
                  </button>
                  <button onClick={() => setShowOfferModal(false)} className="flex-1 py-2 bg-muted neo-border font-bold uppercase neo-hover">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignFlow;
