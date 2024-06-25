import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout";
import Mission from "./pages/Mission";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Vision from "./pages/Vision";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <main className="flex h-screen">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/language" element={<Home />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
