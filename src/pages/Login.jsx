
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import welcomebg from "../assets/welcomebg.jpg";
import welcomebg1 from "../assets/welcomebg1.jpg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@enkonix.in" && password === "admin123") {
      // Store admin details in localStorage
      const adminUser = {
        name: "Admin",
        email: "admin@enkonix.in",
        password: "admin123",
        registeredAt: "N/A"
      };
      localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
      navigate("/admin");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      // Store the full user object in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      let loginHistory = JSON.parse(localStorage.getItem("loginHistory")) || [];
      loginHistory.push({
        email: user.email,
        name: user.name,
        loginTime: new Date().toLocaleString(),
      });
      localStorage.setItem("loginHistory", JSON.stringify(loginHistory));
      navigate("/home1");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${welcomebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden">
        <div className="flex-1 flex flex-col justify-center p-10">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">Welcome Back</h1>
          <p className="mb-6 text-gray-600">Login to your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-[#b57edc] via-[#a259c6] to-[#6c3483] text-white rounded font-semibold transition"
            >
              Login
            </button>
            <p className="mt-4 text-center text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
        <div className="flex-1 hidden md:flex items-center justify-center bg-gray-100">
          <img
            src={welcomebg1}
            alt="Welcome"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
} 