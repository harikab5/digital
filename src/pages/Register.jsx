
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import welcomebg from "../assets/welcomebg.jpg";
import welcomebg1 from "../assets/welcomebg1.jpg";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all fields.");
      return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      alert("Email already registered. Please login.");
      navigate("/login");
      return;
    }
    const registeredAt = new Date().toLocaleString();
  users.push({ firstName, lastName, email, password, registeredAt });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Redirecting to login page.");
    navigate("/login");
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
      <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl overflow-hidden flex-row-reverse">
        <div className="flex-1 flex items-center justify-center bg-gray-100">
          <img
            src={welcomebg1}
            alt="Register"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center p-10">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">Create Account</h1>
          <p className="mb-6 text-gray-600">Sign up to get started</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex gap-2">
              <div className="w-1/2">
                <label className="block mb-1 font-semibold text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="First name"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 font-semibold text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Last name"
                />
              </div>
            </div>
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
              Register
            </button>
            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
} 