import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AppLayout } from "@/components/layout/AppLayout";

import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import UserHome from "./pages/user/UserHome";
import ResumeUpload from "./pages/user/ResumeUpload";
import TrackOpenings from "./pages/user/TrackOpenings";
import UserProfile from "./pages/user/UserProfile";
import AIInterview from "./pages/user/AIInterview";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import RecruiterDetails from "./pages/admin/RecruiterDetails";
import RecruiterHome from "./pages/recruiter/RecruiterHome";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import CampaignFlow from "./pages/recruiter/CampaignFlow";
import CandidateReview from "./pages/recruiter/CandidateReview";
import RecDashboard from "./pages/recruiter/RecDashboard";
import RecCalendar from "./pages/recruiter/RecCalendar";
import RecSchedule from "./pages/recruiter/RecSchedule";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <AppLayout />;
};

const AppRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to={`/${user?.role === "user" ? "user" : user?.role}`} /> : <Landing />}
      />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to={`/${user?.role === "user" ? "user" : user?.role}`} /> : <Login />}
      />
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to={`/${user?.role === "user" ? "user" : user?.role}`} /> : <Signup />}
      />

      {/* User Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/user" element={<UserHome />} />
        <Route path="/user/resume" element={<ResumeUpload />} />
        <Route path="/user/track" element={<TrackOpenings />} />
        <Route path="/user/profile" element={<UserProfile />} />
      </Route>

      {/* Interview - no layout (full screen) */}
      <Route path="/user/interview/:id" element={<AIInterview />} />

      {/* Admin Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/recruiters" element={<RecruiterDetails />} />
      </Route>

      {/* Recruiter Routes */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/recruiter" element={<RecruiterHome />} />
        <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
        <Route path="/recruiter/campaign/:id" element={<CampaignFlow />} />
        <Route path="/recruiter/candidate/:id" element={<CandidateReview />} />
        <Route path="/recruiter/rec" element={<RecDashboard />} />
        <Route path="/recruiter/rec/calendar" element={<RecCalendar />} />
        <Route path="/recruiter/rec/schedule" element={<RecSchedule />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
