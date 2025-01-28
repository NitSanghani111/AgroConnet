import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  Lock,
  User,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { Card, CardContent } from "../components/ui/card";
import { AnimatedText } from "../components/ui/animated-text";
import axios from "axios";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

        // Successful login animation
        const element = document.getElementById("login-card");
        if (element) {
          element.style.transform = "scale(0.95)";
          element.style.opacity = "0";
          setTimeout(() => navigate("/dashboard"), 300);
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please check your credentials.");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container max-w-lg px-4">
        <div className="text-center mb-8" style={{justifyContent:"center",alignItems:"center"}}>
          <AnimatedText
            text="Welcome Back!"
            className="text-4xl font-bold tracking-tighter mb-4"
          />
          <AnimatedText
            text="Login to access your Agronet account"
            className="text-xl text-muted-foreground"
            delay={3}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            id="login-card"
            className={`w-full transition-all duration-300 ${
              isShaking ? "animate-shake" : ""
            }`}
            style={{justifyContent:"center",alignItems:"center"}}>
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium">
                      Username
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="username"
                        placeholder="Enter your username"
                        type="text"
                        className="pl-10"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className="pl-10"
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
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-md"
                    >
                      <AlertCircle className="h-4 w-4" />
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    <>
                      Login
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>

                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-muted-foreground">
                        or
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-center">
                    <motion.a
                      href="/forgot-password"
                      className="text-sm text-green-600 hover:text-green-700 transition-colors block"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Forgot your password?
                    </motion.a>
                    <div className="text-sm text-muted-foreground">
                      Don&apos;t have an account?{" "}
                      <motion.a
                        href="/register"
                        className="text-green-600 hover:text-green-700 transition-colors font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Register now
                      </motion.a>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

    
    </div>
  );
}
