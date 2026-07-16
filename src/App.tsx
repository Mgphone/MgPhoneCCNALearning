import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { ccnaData } from "./data/data";
import { labData } from "./data/labdata";
import { LandingPage } from "./components/LandingPage";
import { StudyDashboard } from "./components/StudyDashboard";
import { EUI64Calculator } from "./pages/EUI64Calculator";
import { HandsOnPractice } from "./pages/HandsOnPractice";
import IPv4Calculator from "./pages/IPv4Calculator";
import VlanStpAnalyzer from "./pages/VlanStpAnalyzer";
import MultipleChoiceQuiz from "./pages/MultipleChoiceQuiz";
import NotFound from "./components/NotFound";
import Spin_Wheel_Ccna from "./pages/Hands-On/Spin_Wheel_Ccna";
import QuizHistory from "./pages/QuizHistory";
import { AuthScreen } from "./components/AuthScreen";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { isAuthenticated, userId, username, loading, login, signup, logout } = useAuth();

  if (loading) {
    return <LoadingSpinner message="Signing in..." />;
  }

  if (!isAuthenticated) {
    return <AuthScreen onLogin={login} onSignup={signup} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage username={username} onLogout={logout} />} />
        <Route
          path="/course-notes"
          element={
            <StudyDashboard
              data={ccnaData}
              storageKey="ccna_mastery_progress"
              basePath="/data/LinkHTML/"
              title="Review & Course Notes"
              showCourseCredits={true}
            />
          }
        />
        <Route
          path="/lab-notes"
          element={
            <StudyDashboard
              data={labData}
              storageKey="ccna_lab_progress"
              basePath="/data/LabHTML/"
              title="Interactive Lab Notes"
            />
          }
        />
        <Route path="/hands-on" element={<HandsOnPractice />} />
        <Route path="/hands-on/eui64" element={<EUI64Calculator />} />
        <Route path="/hands-on/ipv4-calculator" element={<IPv4Calculator />} />
        <Route path="/hands-on/vlan-stp" element={<VlanStpAnalyzer />} />
        <Route path="/hands-on/quiz" element={<MultipleChoiceQuiz />} />
        <Route path="/hands-on/ccna-spin-wheel" element={<Spin_Wheel_Ccna />} />
        <Route path="/quiz-history" element={<QuizHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
