import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth, type UserRole } from "@/contexts/AuthContext";
import { motion } from "framer-motion";

const roles: { value: UserRole; label: string; color: string }[] = [
  { value: "user", label: "Job Seeker", color: "bg-neo-blue" },
  { value: "admin", label: "Admin", color: "bg-neo-yellow" },
  { value: "recruiter", label: "Recruiter", color: "bg-neo-purple" },
];

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("user");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, role);
    const paths: Record<UserRole, string> = {
      user: "/user",
      admin: "/admin",
      recruiter: "/recruiter",
    };
    navigate(paths[role]);
  };

  return (
    <div className="min-h-screen bg-grid flex items-center justify-center p-4 sm:p-6 md:p-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md bg-background neo-border-thick neo-shadow-lg p-6 sm:p-8 md:p-10"
      >
        <Link to="/" className="block text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-2">
            Intervue<span className="bg-neo-yellow px-1">X</span>
          </h1>
        </Link>
        <p className="text-center font-semibold text-muted-foreground mb-6 sm:mb-8 md:mb-10">
          Create your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* Role Selection */}
          <div>
            <label className="block font-bold text-sm mb-2 uppercase tracking-wider">
              I am a
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {roles.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  onClick={() => setRole(r.value)}
                  className={`py-2 px-2 sm:px-3 md:px-4 neo-border text-xs sm:text-sm md:text-base font-bold transition-all neo-hover ${
                    role === r.value
                      ? `${r.color} neo-shadow`
                      : "bg-background"
                  } ${role === r.value && r.value !== "admin" ? "text-primary-foreground" : ""}`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block font-bold text-sm mb-2 uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Doe"
              required
              className="w-full px-3 sm:px-4 md:px-5 py-3 neo-border bg-background font-semibold placeholder:text-muted-foreground focus:outline-none focus:neo-shadow transition-shadow text-sm sm:text-base md:text-lg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-bold text-sm mb-2 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="w-full px-3 sm:px-4 md:px-5 py-3 neo-border bg-background font-semibold placeholder:text-muted-foreground focus:outline-none focus:neo-shadow transition-shadow text-sm sm:text-base md:text-lg"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-bold text-sm mb-2 uppercase tracking-wider">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-3 sm:px-4 md:px-5 py-3 neo-border bg-background font-semibold placeholder:text-muted-foreground focus:outline-none focus:neo-shadow transition-shadow text-sm sm:text-base md:text-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-neo-purple text-neo-purple-foreground neo-border neo-shadow font-bold text-base sm:text-lg md:text-xl uppercase tracking-wider neo-hover"
          >
            Create Account →
          </button>
        </form>

        <p className="mt-6 text-center text-xs sm:text-sm md:text-base font-semibold text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="underline underline-offset-4 font-bold text-foreground">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
