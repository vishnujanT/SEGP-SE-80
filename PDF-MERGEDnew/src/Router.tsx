// Router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParallaxWebsite from "./App";
import App_old from "./App_old";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ParallaxWebsite />} />
      <Route path="/app-old" element={<App_old />} />
    </Routes>
  </BrowserRouter>
);
