import {
  Brain,
  Target,
  Shield,
  Zap,
  Briefcase,
  UserCheck,
  FileText,
  Video,
  Award,
  Users
} from "lucide-react";

export const features = [
  { icon: Brain, title: "AI-Powered Interviews", desc: "Smart questions adapted in real-time to your skills and experience." },
  { icon: Target, title: "Precision Matching", desc: "Our algorithm matches you to roles where you'll actually thrive." },
  { icon: Shield, title: "Bias-Free Hiring", desc: "Standardized AI evaluation ensures fair treatment for everyone." },
  { icon: Zap, title: "Instant Feedback", desc: "Get scores, strengths, and improvement areas immediately after." },
];

export const steps = [
  { num: "01", icon: FileText, title: "Upload Resume", desc: "Drop your resume and let AI parse your skills instantly.", color: "bg-neo-yellow" },
  { num: "02", icon: Video, title: "AI Interview", desc: "Face an adaptive AI interview with camera, audio, or text.", color: "bg-neo-blue" },
  { num: "03", icon: UserCheck, title: "Get Evaluated", desc: "AI scores your answers on clarity, confidence, and accuracy.", color: "bg-neo-purple" },
  { num: "04", icon: Award, title: "Land the Job", desc: "Top scorers get matched to organizations and receive offers.", color: "bg-neo-yellow" },
];

export const mockJobs = [
  { id: 1, title: "Senior React Developer", company: "TechCorp", type: "Remote", salary: "$120k–$160k" },
  { id: 2, title: "Product Designer", company: "DesignLab", type: "Hybrid", salary: "$90k–$130k" },
  { id: 3, title: "Backend Engineer", company: "DataFlow", type: "On-site", salary: "$110k–$150k" },
  { id: 4, title: "DevOps Lead", company: "CloudBase", type: "Remote", salary: "$130k–$170k" },
  { id: 5, title: "ML Engineer", company: "AI Labs", type: "Remote", salary: "$140k–$180k" },
  { id: 6, title: "Full Stack Dev", company: "StartupX", type: "Hybrid", salary: "$100k–$140k" },
];

export const stats = [
  { label: "Total Users", value: "2,847", icon: Users, color: "bg-neo-blue" },
  { label: "Active Jobs", value: "156", icon: Briefcase, color: "bg-neo-yellow" },
  { label: "Recruiters", value: "89", icon: UserCheck, color: "bg-neo-purple" },
  { label: "Applications", value: "4,231", icon: FileText, color: "bg-success" },
];

export const mockUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@mail.com", role: "User", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@mail.com", role: "User", status: "Active" },
  { id: 3, name: "Carol Davis", email: "carol@mail.com", role: "User", status: "Suspended" },
  { id: 4, name: "Dan Wilson", email: "dan@mail.com", role: "User", status: "Active" },
  { id: 5, name: "Eva Brown", email: "eva@mail.com", role: "User", status: "Active" },
];

export const organizations = [
  { id: 1, name: "Sarah Chen", company: "TechCorp", campaigns: 5, hired: 23 },
  { id: 2, name: "Mike Ross", company: "DesignLab", campaigns: 3, hired: 12 },
  { id: 3, name: "Lena Park", company: "DataFlow", campaigns: 8, hired: 45 },
  { id: 4, name: "James Lee", company: "CloudBase", campaigns: 2, hired: 8 },
];

export const applications = [
  { id: 1, job: "Senior React Developer", company: "TechCorp", date: "2026-03-28", status: "Interview" },
  { id: 2, job: "Product Designer", company: "DesignLab", date: "2026-03-25", status: "Applied" },
  { id: 3, job: "Backend Engineer", company: "DataFlow", date: "2026-03-20", status: "Offered" },
  { id: 4, job: "DevOps Lead", company: "CloudBase", date: "2026-03-15", status: "Rejected" },
  { id: 5, job: "ML Engineer", company: "AI Labs", date: "2026-03-10", status: "Applied" },
];

export const mockQuestions = [
  "Tell us about your most challenging project and how you overcame the obstacles.",
  "How do you approach debugging a complex production issue?",
  "Describe your experience with team collaboration and code reviews.",
  "What's your approach to learning new technologies?",
  "Where do you see yourself contributing most to our team?",
];

export const candidates = ["Alice Johnson", "Bob Smith", "Carol Davis", "Dan Wilson", "Eva Brown"];

export const mockAnswers = [
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

export const mockCandidates = [
  { id: 1, name: "Alice Johnson", interviewScore: 85, aiRating: 92, video: true, status: "Passed" },
  { id: 2, name: "Bob Smith", interviewScore: 72, aiRating: 78, video: true, status: "Passed" },
  { id: 3, name: "Carol Davis", interviewScore: 65, aiRating: 60, video: false, status: "Failed" },
  { id: 4, name: "Dan Wilson", interviewScore: 91, aiRating: 95, video: true, status: "Passed" },
  { id: 5, name: "Eva Brown", interviewScore: 55, aiRating: 48, video: true, status: "Failed" },
];
