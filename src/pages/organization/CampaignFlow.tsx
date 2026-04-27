import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Video, Award, Send, Loader2 } from "lucide-react";
import { campaignApi, Campaign, CampaignCreate } from "@/lib/campaign-api";
import { toast } from "sonner";

const mockCandidates = [
  { id: 1, name: "Alice Johnson", interviewScore: 85, aiRating: 92, video: true, status: "Passed" },
  { id: 2, name: "Bob Smith", interviewScore: 72, aiRating: 78, video: true, status: "Passed" },
  { id: 3, name: "Carol Davis", interviewScore: 65, aiRating: 60, video: false, status: "Failed" },
  { id: 4, name: "Dan Wilson", interviewScore: 91, aiRating: 95, video: true, status: "Passed" },
  { id: 5, name: "Eva Brown", interviewScore: 55, aiRating: 48, video: true, status: "Failed" },
];

const CampaignFlow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === "new";
  
  const [activeSection, setActiveSection] = useState("description");
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [isLoading, setIsLoading] = useState(!isNew);
  const [isSaving, setIsSaving] = useState(false);
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [skillsInput, setSkillsInput] = useState("");
  
  const [formData, setFormData] = useState<CampaignCreate>({
    title: "",
    description: "",
    location: "",
    is_remote: false,
    min_experience_years: 0,
    max_experience_years: 0,
    salary_range_min: 0,
    salary_range_max: 0,
    required_skills: [],
  });

  const sections = ["description", "scoreboard", "interview", "merit", "verification", "offer"];

  useEffect(() => {
    if (!isNew && id) {
      setIsLoading(true);
      campaignApi.getCampaign(id)
        .then(data => {
          setCampaign(data);
          setFormData({
            title: data.title,
            description: data.description || "",
            location: data.location || "",
            is_remote: data.is_remote || false,
            min_experience_years: data.min_experience_years || 0,
            max_experience_years: data.max_experience_years || 0,
            salary_range_min: data.salary_range_min || 0,
            salary_range_max: data.salary_range_max || 0,
            required_skills: data.required_skills || [],
          });
          setSkillsInput((data.required_skills || []).join(", "));
        })
        .catch(err => {
          console.error("Failed to load campaign", err);
          toast.error("Failed to load campaign");
          navigate("/organization/dashboard");
        })
        .finally(() => setIsLoading(false));
    }
  }, [id, isNew, navigate]);

  const handleSave = async () => {
    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }
    
    setIsSaving(true);
    try {
      if (isNew) {
        const newCampaign = await campaignApi.createCampaign(formData);
        toast.success("Campaign created successfully!");
        navigate(`/organization/campaign/${newCampaign.id}`);
      } else if (id) {
        const updated = await campaignApi.updateCampaign(id, formData);
        setCampaign(updated);
        toast.success("Campaign updated successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to save campaign");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="py-16 min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-neo-blue" />
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-mono mb-2">
          {isNew ? "Create New Campaign" : `Campaign: ${campaign?.title}`}
        </h1>
        <p className="text-muted-foreground font-semibold mb-8">Manage the full hiring pipeline</p>

        {/* Section Tabs */}
        {!isNew && (
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
        )}

        {/* Description */}
        {activeSection === "description" && (
          <div className="neo-border-thick neo-shadow-lg p-6 max-w-2xl">
            <h3 className="font-bold text-lg mb-4">Campaign Description</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-bold text-sm mb-1 uppercase">Title *</label>
                  <input 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-3 neo-border bg-background font-semibold focus:outline-none focus:neo-shadow transition-all" 
                    placeholder="e.g. Senior React Developer" 
                  />
                </div>
                <div>
                  <label className="block font-bold text-sm mb-1 uppercase">Location</label>
                  <input 
                    value={formData.location || ""}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 neo-border bg-background font-semibold focus:outline-none focus:neo-shadow transition-all" 
                    placeholder="e.g. New York, NY" 
                  />
                </div>
                <div className="flex items-center gap-2 mt-8">
                  <input 
                    type="checkbox" 
                    checked={formData.is_remote || false}
                    onChange={(e) => setFormData({...formData, is_remote: e.target.checked})}
                    className="w-5 h-5 neo-border bg-background" 
                    id="is_remote"
                  />
                  <label htmlFor="is_remote" className="font-bold text-sm uppercase cursor-pointer">Remote Role</label>
                </div>
                <div>
                  <label className="block font-bold text-sm mb-1 uppercase">Min Experience (Years)</label>
                  <input 
                    type="number"
                    value={formData.min_experience_years ?? ""}
                    onChange={(e) => setFormData({...formData, min_experience_years: e.target.value === "" ? 0 : parseInt(e.target.value, 10)})}
                    className="w-full px-4 py-3 neo-border bg-background font-semibold focus:outline-none focus:neo-shadow transition-all" 
                  />
                </div>
                <div>
                  <label className="block font-bold text-sm mb-1 uppercase">Max Experience (Years)</label>
                  <input 
                    type="number"
                    value={formData.max_experience_years ?? ""}
                    onChange={(e) => setFormData({...formData, max_experience_years: e.target.value === "" ? null : parseInt(e.target.value, 10)})}
                    className="w-full px-4 py-3 neo-border bg-background font-semibold focus:outline-none focus:neo-shadow transition-all" 
                  />
                </div>
                <div>
                  <label className="block font-bold text-sm mb-1 uppercase">Min Salary ($)</label>
                  <input 
                    type="number"
                    value={formData.salary_range_min ?? ""}
                    onChange={(e) => setFormData({...formData, salary_range_min: e.target.value === "" ? null : parseInt(e.target.value, 10)})}
                    className="w-full px-4 py-3 neo-border bg-background font-semibold focus:outline-none focus:neo-shadow transition-all" 
                  />
                </div>
                <div>
                  <label className="block font-bold text-sm mb-1 uppercase">Max Salary ($)</label>
                  <input 
                    type="number"
                    value={formData.salary_range_max ?? ""}
                    onChange={(e) => setFormData({...formData, salary_range_max: e.target.value === "" ? null : parseInt(e.target.value, 10)})}
                    className="w-full px-4 py-3 neo-border bg-background font-semibold focus:outline-none focus:neo-shadow transition-all" 
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-bold text-sm mb-1 uppercase">Required Skills (Comma separated)</label>
                  <input 
                    value={skillsInput}
                    onChange={(e) => {
                      setSkillsInput(e.target.value);
                      setFormData({...formData, required_skills: e.target.value.split(",").map(s => s.trim()).filter(Boolean)});
                    }}
                    className="w-full px-4 py-3 neo-border bg-background font-semibold focus:outline-none focus:neo-shadow transition-all" 
                    placeholder="React, TypeScript, Python" 
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block font-bold text-sm mb-1 uppercase">Description</label>
                  <textarea 
                    value={formData.description || ""}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-3 neo-border bg-background font-semibold h-32 focus:outline-none focus:neo-shadow transition-all" 
                    placeholder="Looking for an experienced React developer..." 
                  />
                </div>
              </div>
              <button 
                onClick={handleSave}
                disabled={isSaving}
                className="px-6 py-2 bg-primary text-primary-foreground neo-border neo-shadow font-bold uppercase neo-hover flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving && <Loader2 className="w-4 h-4 animate-spin" />}
                {isNew ? "Create Campaign" : "Save Changes"}
              </button>
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
                        to={`/organization/candidate/${c.id}`}
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
