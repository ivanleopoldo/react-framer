import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ErrorPage, ConfirmationPage, LandingPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
