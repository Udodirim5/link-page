import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import process from "process";

const isProduction = process.env.NODE_ENV === "production";
const base = isProduction ? "/link-page" : "";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path={`${base}/`} element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
