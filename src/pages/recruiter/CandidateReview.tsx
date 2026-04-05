import { useParams } from "react-router-dom";
import { Play, Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const mockAnswers = [
  {
    question: "Tell us about your most challenging project.",
    textAnswer: "I led a team of 5 to rebuild our entire frontend in React, migrating from a legacy jQuery app...",
    aiScore: 88,
    tags: ["Confidence: High", "Clarity: Excellent", "Accuracy: Good"],
  },
  {
    question: "How do you approach debugging?",
    textAnswer: "I follow a systematic approach: reproduce, isolate, identify root cause, fix, and verify...",
    aiScore: 92,
    tags: ["Confidence: High", "Clarity: Good", "Accuracy: Excellent"],
  },
  {
    question: "Describe your team collaboration experience.",
    textAnswer: "I'm a strong advocate for code reviews and pair programming...",
    aiScore: 85,
    tags: ["Confidence: Medium", "Clarity: Good", "Accuracy: Good"],
  },
];

const CandidateReview = () => {
  const { id } = useParams();

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Candidate Header */}
        <div className="neo-border-thick neo-shadow-lg p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-neo-blue neo-border-thick flex items-center justify-center">
              <span className="text-2xl font-bold text-neo-blue-foreground">A</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold font-mono">Candidate #{id}</h1>
              <p className="text-muted-foreground font-semibold">Applied: Senior React Developer</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-neo-yellow neo-border font-mono font-bold text-2xl">88%</div>
            <Badge className="neo-border bg-success text-success-foreground font-bold text-sm px-3 py-1">Passed</Badge>
          </div>
        </div>

        {/* Video Player */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Interview Recording</h2>
          <div className="neo-border-thick neo-shadow-lg bg-primary aspect-video relative flex items-center justify-center">
            <button className="w-20 h-20 bg-neo-yellow neo-border-thick flex items-center justify-center neo-hover">
              <Play className="w-10 h-10 ml-1" />
            </button>
            <div className="absolute bottom-4 left-4 bg-background/90 neo-border px-3 py-1 font-bold text-xs">
              RECORDED INTERVIEW
            </div>
            <div className="absolute bottom-4 right-4 bg-background/90 neo-border px-3 py-1 font-mono font-bold text-xs">
              12:34
            </div>
          </div>
        </div>

        {/* Answer Breakdown */}
        <h2 className="text-2xl font-bold mb-4">Answer Breakdown</h2>
        <div className="space-y-6 mb-10">
          {mockAnswers.map((a, i) => (
            <div key={i} className="neo-border-thick neo-shadow p-6">
              <p className="text-xs font-bold uppercase text-muted-foreground mb-1">Question {i + 1}</p>
              <h3 className="font-bold text-lg mb-3">{a.question}</h3>

              <div className="bg-muted neo-border p-4 mb-4">
                <p className="font-semibold text-sm">{a.textAnswer}</p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex gap-2">
                  {a.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-1 bg-neo-blue/10 neo-border text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-neo-yellow" />
                  <span className="font-mono font-bold text-lg">{a.aiScore}</span>
                </div>
              </div>

              <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 neo-border bg-background text-xs font-bold flex items-center gap-1 neo-hover">
                  <Play className="w-3 h-3" /> Play Audio
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AI Summary */}
        <div className="bg-polka-purple p-8 neo-border-thick">
          <h2 className="text-2xl font-bold text-neo-purple-foreground mb-6">AI Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background neo-border-thick p-6 text-center">
              <p className="text-4xl font-bold font-mono mb-2">88%</p>
              <p className="font-bold text-sm">Overall Score</p>
            </div>
            <div className="bg-background neo-border-thick p-6">
              <div className="flex items-center gap-2 mb-3">
                <ThumbsUp className="w-5 h-5 text-success" />
                <h4 className="font-bold">Strengths</h4>
              </div>
              <ul className="space-y-1 text-sm font-semibold">
                <li className="flex items-center gap-1"><span className="w-2 h-2 bg-success neo-border" /> Strong technical skills</li>
                <li className="flex items-center gap-1"><span className="w-2 h-2 bg-success neo-border" /> Clear communication</li>
                <li className="flex items-center gap-1"><span className="w-2 h-2 bg-success neo-border" /> Leadership experience</li>
              </ul>
            </div>
            <div className="bg-background neo-border-thick p-6">
              <div className="flex items-center gap-2 mb-3">
                <ThumbsDown className="w-5 h-5 text-destructive" />
                <h4 className="font-bold">Areas to Improve</h4>
              </div>
              <ul className="space-y-1 text-sm font-semibold">
                <li className="flex items-center gap-1"><span className="w-2 h-2 bg-destructive neo-border" /> Could elaborate more</li>
                <li className="flex items-center gap-1"><span className="w-2 h-2 bg-destructive neo-border" /> System design depth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateReview;
