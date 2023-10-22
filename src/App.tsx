import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile.tsx";
import NotFound from "./pages/404.tsx";
import Repos from "./pages/Repos.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Profile usn="luthpai" />} />
        <Route path="/repos" element={<Repos usn="luthpai" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
