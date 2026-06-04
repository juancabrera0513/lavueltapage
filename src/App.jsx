import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { copy } from "./data/copy";

import Header from "./components/Header";
import Footer from "./components/Footer";

import BibleGamePage from "./pages/BibleGamePage";
import Home from "./pages/Home";
import StopPage from "./pages/StopPage";
import PrivacyBibleGame from "./pages/PrivacyBibleGame";
import PrivacyStop from "./pages/PrivacyStop";
import TermsStop from "./pages/TermsStop";
import SupportStop from "./pages/SupportStop";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="site-shell">
      <Header lang={lang} setLang={setLang} t={t} />

      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/stop" element={<StopPage t={t} />} />
          <Route path="/quien-soy-biblia" element={<BibleGamePage t={t} />} />
          <Route path="/privacy/quien-soy-biblia" element={<PrivacyBibleGame t={t} />} />
          <Route path="/privacy/bible-game" element={<PrivacyBibleGame t={t} />} />
          <Route path="/privacidad/juego-biblia" element={<PrivacyBibleGame t={t} />} />
          <Route path="/privacy/stop" element={<PrivacyStop t={t} />} />
          <Route path="/terms/stop" element={<TermsStop t={t} />} />
          <Route path="/support/stop" element={<SupportStop t={t} />} />
          <Route path="/contact" element={<Contact t={t} />} />
          <Route path="*" element={<NotFound t={t} />} />
        </Routes>
      </main>

      <Footer t={t} />
    </div>
  );
}
