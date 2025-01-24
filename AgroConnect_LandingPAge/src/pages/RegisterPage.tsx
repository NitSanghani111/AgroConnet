import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/Select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: string;
  password: string;
  username: string;
  country: string;
  state: string;
  documentNo: string;
  proofDocument: File | null;
  profilePhoto: File | null;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userType: "",
    password: "",
    username: "",
    country: "",
    state: "",
    documentNo: "",
    proofDocument: null,
    profilePhoto: null,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleUserTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, userType: value }));
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof FormData
  ) => {
    const files = e.target?.files;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [field]: files[0] }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate if required fields are present
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || !formData.username || !formData.userType) {
      alert("Please fill out all required fields.");
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      const value = formData[key as keyof FormData];
      if (value) {
        data.append(key, value as string | Blob);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("Registration successful!");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Registration error:", error);
        alert(`Registration failed: ${error.response?.data?.message || 'Please try again later.'}`);
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="container flex items-center justify-center min-h-screen py-10">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>
            Enter your details to register a new account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* User Type */}
            <div>
              <Label htmlFor="userType">User Type</Label>
              <Select onValueChange={handleUserTypeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">Farmer</SelectItem>
                  <SelectItem value="buyer">Buyer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Username and Password */}
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>

            {/* Country and State */}
            <div>
              <Label htmlFor="country">Country</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            {/* Document Uploads */}
            <div>
              <Label htmlFor="documentNo">Document Number</Label>
              <Input
                id="documentNo"
                value={formData.documentNo}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="proofDocument">Upload Proof Document</Label>
              <Input
                id="proofDocument"
                type="file"
                onChange={(e) => handleFileChange(e, "proofDocument")}
              />
            </div>
            <div>
              <Label htmlFor="profilePhoto">Upload Profile Photo</Label>
              <Input
                id="profilePhoto"
                type="file"
                onChange={(e) => handleFileChange(e, "profilePhoto")}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Register
            </Button>
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
