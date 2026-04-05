import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain,
  Target,
  Shield,
  Zap,
  Briefcase,
  Clock,
  UserCheck,
  FileText,
  Video,
  Award,
  ArrowRight,
  Sun,
  Moon,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

const features = [
  { icon: Brain, title: "AI-Powered Interviews", desc: "Smart questions adapted in real-time to your skills and experience." },
  { icon: Target, title: "Precision Matching", desc: "Our algorithm matches you to roles where you'll actually thrive." },
  { icon: Shield, title: "Bias-Free Hiring", desc: "Standardized AI evaluation ensures fair treatment for everyone." },
  { icon: Zap, title: "Instant Feedback", desc: "Get scores, strengths, and improvement areas immediately after." },
];

const steps = [
  { num: "01", icon: FileText, title: "Upload Resume", desc: "Drop your resume and let AI parse your skills instantly.", color: "bg-neo-yellow" },
  { num: "02", icon: Video, title: "AI Interview", desc: "Face an adaptive AI interview with camera, audio, or text.", color: "bg-neo-blue" },
  { num: "03", icon: UserCheck, title: "Get Evaluated", desc: "AI scores your answers on clarity, confidence, and accuracy.", color: "bg-neo-purple" },
  { num: "04", icon: Award, title: "Land the Job", desc: "Top scorers get matched to recruiters and receive offers.", color: "bg-neo-yellow" },
];

const mockJobs = [
  { id: 1, title: "Senior React Developer", company: "TechCorp", type: "Remote", salary: "$120k–$160k" },
  { id: 2, title: "Product Designer", company: "DesignLab", type: "Hybrid", salary: "$90k–$130k" },
  { id: 3, title: "Backend Engineer", company: "DataFlow", type: "On-site", salary: "$110k–$150k" },
  { id: 4, title: "DevOps Lead", company: "CloudBase", type: "Remote", salary: "$130k–$170k" },
  { id: 5, title: "ML Engineer", company: "AI Labs", type: "Remote", salary: "$140k–$180k" },
  { id: 6, title: "Full Stack Dev", company: "StartupX", type: "Hybrid", salary: "$100k–$140k" },
];

const Landing = () => {
  const { isDark, toggle } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-background flex items-center justify-between px-4 md:px-6 py-4" style={{ borderBottom: "3px solid hsl(var(--border))" }}>
        <span className="text-xl md:text-2xl font-bold font-mono">
          Intervue<span className="bg-neo-yellow px-1">X</span>
        </span>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="font-bold text-sm uppercase tracking-wider hover:underline underline-offset-4 decoration-[3px]">How It Works</a>
          <a href="#features" className="font-bold text-sm uppercase tracking-wider hover:underline underline-offset-4 decoration-[3px]">Features</a>
          <a href="#jobs" className="font-bold text-sm uppercase tracking-wider hover:underline underline-offset-4 decoration-[3px]">Jobs</a>
        </div>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-10 h-10 neo-border flex items-center justify-center neo-hover bg-background"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <Link
            to="/login"
            className="px-5 py-2 neo-border neo-shadow font-bold text-sm uppercase tracking-wider neo-hover bg-primary text-primary-foreground"
          >
            Login
          </Link>
        </div>
        
        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 neo-border flex items-center justify-center neo-hover bg-background"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-9 h-9 neo-border flex items-center justify-center neo-hover bg-background"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Mobile Sidebar */}
          <div className="fixed left-0 top-0 h-full w-72 bg-background neo-border-r border-r-[4px] border-border z-50 md:hidden">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b-[3px] border-border">
                <span className="text-xl font-bold font-mono">
                  Intervue<span className="bg-neo-yellow px-1">X</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 neo-border neo-shadow neo-hover bg-background flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Navigation */}
              <nav className="flex-1 p-4">
                <div className="space-y-2">
                  <a
                    href="#how-it-works"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 font-semibold transition-all neo-hover rounded hover:bg-muted"
                  >
                    How It Works
                  </a>
                  <a
                    href="#features"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 font-semibold transition-all neo-hover rounded hover:bg-muted"
                  >
                    Features
                  </a>
                  <a
                    href="#jobs"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 font-semibold transition-all neo-hover rounded hover:bg-muted"
                  >
                    Jobs
                  </a>
                </div>
              </nav>
              
              {/* Login Button */}
              <div className="p-4 border-t-[3px] border-border">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-2 bg-primary text-primary-foreground neo-border neo-shadow font-bold text-sm uppercase tracking-wider neo-hover text-center"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* HERO */}
      <section className="bg-grid py-16 md:py-24 lg:py-36 xl:py-44">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-block mb-6 px-4 py-1 neo-border bg-neo-yellow font-bold text-sm uppercase tracking-widest"
          >
            The Future of Hiring
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-mono mb-6 leading-[1.05]"
          >
            Hire Smarter with {" "}
            <span className="bg-neo-purple text-neo-purple-foreground px-3 inline-block neo-border neo-shadow">
            AI Interviews
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl font-semibold text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 lg:mb-12"
          >
            AI-driven interviews. Zero bias. Real feedback. The smartest way to hire and get hired.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/signup"
              className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-primary text-primary-foreground neo-border-thick neo-shadow-lg font-bold text-base md:text-lg lg:text-xl uppercase tracking-wider neo-hover inline-flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#how-it-works"
              className="px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 bg-neo-yellow text-neo-yellow-foreground neo-border-thick neo-shadow-lg font-bold text-base md:text-lg lg:text-xl uppercase tracking-wider neo-hover inline-flex items-center justify-center"
            >
              How It Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-polka py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-center mb-4 dark:text-white light:text-gray-900">
            How It Works
          </h2>
          <p className="text-center font-semibold mb-14 max-w-lg mx-auto dark:text-white light:text-gray-700">
            Four simple steps from application to offer letter.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-background neo-border-thick neo-shadow-lg p-6 neo-hover relative ${
                  i % 4 === 0 ? 'card-border-blue' : i % 4 === 1 ? 'card-border-green' : i % 4 === 2 ? 'card-border-purple' : 'card-border-pink'
                }`}
              >
                <span className={`inline-block ${step.color} neo-border px-3 py-1 font-mono font-bold text-lg mb-4 ${step.color === "bg-neo-blue" || step.color === "bg-neo-purple" ? "dark:text-primary-foreground light:text-primary-foreground" : "dark:text-white light:text-gray-900"}`}>
                  {step.num}
                </span>
                <step.icon className={`w-8 h-8 mb-3 ${
                  i % 4 === 0 ? 'text-blue-600' : i % 4 === 1 ? 'text-green-600' : i % 4 === 2 ? 'text-purple-600' : 'text-pink-600'
                }`} />
                <h3 className={`font-bold text-lg mb-2 dark:text-white light:text-black ${
                  i % 4 === 0 ? 'dark:text-blue-400 light:text-blue-600' : i % 4 === 1 ? 'dark:text-green-400 light:text-green-600' : i % 4 === 2 ? 'dark:text-purple-400 light:text-purple-600' : 'dark:text-pink-400 light:text-pink-600'
                }`}>{step.title}</h3>
                <p className={`text-sm font-semibold dark:text-white light:text-black ${
                  i % 4 === 0 ? 'dark:text-blue-400 light:text-blue-600' : i % 4 === 1 ? 'dark:text-green-400 light:text-green-600' : i % 4 === 2 ? 'dark:text-purple-400 light:text-purple-600' : 'dark:text-pink-400 light:text-pink-600'
                }`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-polka-purple py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-center mb-4 dark:text-black light:text-gray-900">
            Why IntervueX?
          </h2>
          <p className="text-center font-semibold mb-14 max-w-lg mx-auto dark:text-black light:text-gray-700">
            Built for candidates and recruiters who value fairness and speed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`bg-background neo-border-thick neo-shadow-lg p-8 neo-hover flex gap-5 ${
                  i % 4 === 0 ? 'card-border-blue' : i % 4 === 1 ? 'card-border-green' : i % 4 === 2 ? 'card-border-yellow' : 'card-border-pink'
                }`}
              >
                <div className={`shrink-0 w-14 h-14 neo-border flex items-center justify-center ${
                  i % 4 === 0 ? 'bg-neo-blue' : i % 4 === 1 ? 'bg-success' : i % 4 === 2 ? 'bg-destructive' : 'bg-pink-500'
                }`}>
                  <f.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 dark:text-visible-light light:text-visible-dark`}>{f.title}</h3>
                  <p className={`text-sm font-semibold dark:text-visible-light light:text-visible-dark`}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section id="jobs" className="bg-polka py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-center mb-4">
            Open Positions
          </h2>
          <p className="text-center text-muted-foreground font-semibold mb-14 max-w-lg mx-auto">
            Hot roles from top companies. Sign up to apply.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockJobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: -2, y: -2 }}
                className={`bg-card neo-border neo-shadow p-6 ${
                  i % 3 === 0 ? 'card-border-pink-900' : i % 3 === 1 ? 'card-border-purple' : 'card-border-yellow'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-bold text-lg mb-1 ${
                    i % 3 === 0 ? 'text-blue-600' : i % 3 === 1 ? 'text-pink-600' : 'text-green-600'
                  }`}>{job.title}</h3>
                  <span className={`px-2 py-0.5 neo-border text-xs font-bold shrink-0 dark:text-black light:text-black-on-light ${
                    job.type === 'Remote' ? 'bg-success' : 
                    job.type === 'Hybrid' ? 'bg-neo-yellow' : 
                    'bg-pink-500'
                  }`}>
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4" />
                  <span className={`font-semibold text-sm dark:text-white light:text-black ${
                    i % 3 === 0 ? 'dark:text-blue-400 light:text-blue-600' : i % 3 === 1 ? 'dark:text-pink-400 light:text-pink-600' : 'dark:text-green-400 light:text-green-600'
                  }`}>{job.company}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className={`font-semibold text-sm dark:text-white light:text-black ${
                    i % 3 === 0 ? 'dark:text-blue-400 light:text-blue-600' : i % 3 === 1 ? 'dark:text-pink-400 light:text-pink-600' : 'dark:text-green-400 light:text-green-600'
                  }`}>{job.salary}</span>
                </div>
                <Link
                  to="/signup"
                  className="block text-center py-2 bg-primary text-primary-foreground neo-border font-bold text-sm uppercase neo-hover apply-now-btn"
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-grid py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-6">
            Ready to{" "}
            <span className="bg-neo-blue text-neo-blue-foreground px-2 neo-border neo-shadow inline-block">
              Start?
            </span>
          </h2>
          <p className="text-muted-foreground font-semibold mb-8 max-w-md mx-auto">
            Join thousands of candidates and recruiters already using IntervueX.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center gap-2 px-10 py-4 bg-neo-purple text-neo-purple-foreground neo-border-thick neo-shadow-lg font-bold text-lg uppercase tracking-wider neo-hover"
          >
            Create Account <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-polka py-14" style={{ borderTop: "3px solid hsl(var(--border))" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <span className="text-2xl font-bold font-mono">
                Intervue<span className="bg-neo-yellow px-1">X</span>
              </span>
              <p className="text-sm font-semibold text-muted-foreground mt-3 max-w-xs">
                AI-powered recruitment platform. Fair, fast, and built for the future of hiring.
              </p>
            </div>
            {/* Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-sm font-semibold text-muted-foreground hover:text-foreground">How It Works</a></li>
                <li><a href="#features" className="text-sm font-semibold text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#jobs" className="text-sm font-semibold text-muted-foreground hover:text-foreground">Jobs</a></li>
                <li><Link to="/login" className="text-sm font-semibold text-muted-foreground hover:text-foreground">Login</Link></li>
              </ul>
            </div>
            {/* Social */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Github, label: "GitHub" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Mail, label: "Email" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-10 h-10 neo-border flex items-center justify-center neo-hover bg-background"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-6" style={{ borderTop: "2px solid hsl(var(--border))" }}>
            <p className="text-center text-sm font-semibold text-muted-foreground">
              © 2026 IntervueX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
