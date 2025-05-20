import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroScroll from "./Main/HeroScroll";
import ArticleSection from "./Main/MainArticlesSection"; // yangilangan
import FeaturesSection from "./Main/FeaturesSection";
import Newsletter from "./Main/NewsletterSection";
import StatsSection from "./Main/StatsSection";
import Contact from "./Main/Contact";
//Pages
import CurrentTechnologies from "./Pages/CurrentTechnologies";
import MedicalRevolution from "./Pages/MedicalRevolution";
import YearJobs from "./Pages/YearJobs";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroScroll />
              <ArticleSection />
              <FeaturesSection />
              <StatsSection />
              <Newsletter />
              <Contact />
            </>
          }
        />
        <Route path="/current-technologies" element={<CurrentTechnologies />} />
        <Route path="/medical-revolution" element={<MedicalRevolution />} />
        <Route path="/2025-year-jobs" element={<YearJobs />} />
      </Routes>
    </Router>
  );
}

export default App;
