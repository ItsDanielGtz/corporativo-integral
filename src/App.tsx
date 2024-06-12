import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout";
import Mission from "./pages/Mission";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="flex h-screen">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/mission" element={<Mission />} />
              <Route path="/vision" element={<Home />} />
              <Route path="/aboutUs" element={<Home />} />
              <Route path="/services" element={<Home />} />
              <Route path="/language" element={<Home />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
