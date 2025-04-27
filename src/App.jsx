import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroScroll from "./Main/HeroScroll";
import ArticleSection from "./Main/MainArticlesSection"; // yangilangan
import FeaturesSection from "./Main/FeaturesSection";
import Newsletter from "./Main/NewsletterSection";
import StatsSection from "./Main/StatsSection";
import FloatingSuperBlog from "./Components/FloatingSuperBlog";
import Contact from "./Main/Contact";
import CurrentTechnologies from "./Pages/CurrentTechnologies"; 

function App() {
  return (
    <Router>
      {/* <FloatingSuperBlog /> */}
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
      </Routes>
    </Router>
  );
}

export default App;
