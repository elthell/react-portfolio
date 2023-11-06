import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import ProjectList from "./pages/ProjectList";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "ProjectList") {
      return <ProjectList />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main id="main" class="position-absolute">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
