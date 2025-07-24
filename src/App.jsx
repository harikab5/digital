import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import IndexSplash from "./pages/IndexSplash";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexSplash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
