import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import RHAdministration from "./pages/RHAdministration";
import ServicesPage from "./pages/ServicesPage";
import ProcessusPage from "./pages/ProcessusPage";
import ContactPage from "./pages/ContactPage";
import AdminDashboard from "./pages/AdminDashboard";

// Composant Layout pour regrouper les pages publiques avec Navbar et Footer
function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* C'est ici que s'afficheront les pages enfants (Services, Contact, etc.) */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes publiques : Elles héritent toutes de la Navbar et du Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<RHAdministration />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/processus" element={<ProcessusPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Route Admin : Isolée, elle n'a ni Navbar ni Footer globaux */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;