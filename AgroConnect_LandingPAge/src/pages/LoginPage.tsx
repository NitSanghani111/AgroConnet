import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import axios from "axios";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(""); // Corrected: renamed username state
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Store error messages
  const navigate = useNavigate(); // Navigate to another page after successful login

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login", 
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );
      
      // Check for successful login response
      if (response.data.token) {
        // Store the JWT token, you can store it in localStorage or state if needed
        localStorage.setItem("token", response.data.token);
        
        // Redirect to the dashboard or another page after successful login
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-10">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Enter your username and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Corrected: use setUsername instead of setusername
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error */}
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <a href="/forgot-password" className="text-green-600 hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-green-600 hover:underline">
              Register
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
