import React, { useState } from "react";
import Button from "./ui/Button";
import { Earth, Eye, EyeOff, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      console.log("Login attempt with:", { email, password });
      setLoginMessage("Signing in...");

      setTimeout(() => {
        setLoginMessage("Redirecting...");
      }, 3000);

      setTimeout(() => {
        setLoginMessage(null);
      }, 5000);
    } else {
      setLoginMessage("Please enter valid credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 animate-fadeIn">
        <div className="flex flex-row items-center justify-center mb-5 gap-2">
          <Earth className="text-purple-600" />
          <p className="text-purple-600 font-bold">Flowva</p>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold  mb-2">Welcome back</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {loginMessage && (
            <div className="text-[10px] bg-[#EDF7ED] rounded-md text-[#4CAF87] mb-4 p-3">
              {loginMessage}
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-purple-600 hover:text-purple-700"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder="••••••••"
              required
            />
            <div className="flex justify-end mt-1">
              <button
                type="button"
                className="text-sm text-purple-600 hover:text-purple-700"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <Button type="submit" fullWidth>
            <LogIn className="inline mr-2" />
            Sign in
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <img
              src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700">Google</span>
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-purple-600 hover:text-purple-700 font-medium"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
