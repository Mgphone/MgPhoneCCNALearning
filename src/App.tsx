import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ccnaData } from "./data/data";
import { labData } from "./data/labdata";
import { LandingPage } from "./components/LandingPage";
import { StudyDashboard } from "./components/StudyDashboard";
import { EUI64Calculator } from "./components/EUI64Calculator";
import { HandsOnPractice } from "./components/HandsOnPractice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
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
      </Routes>
    </Router>
  );
}

export default App;
