import { useState, type ChangeEvent, FormEvent } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff, Loader2, ChevronRight, ChevronLeft, Tractor, Store, Upload, CheckCircle } from "lucide-react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Card, CardContent } from "../components/ui/card"
import { AnimatedText } from "../components/ui/animated-text"
import axios from "axios"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  userType: string
  password: string
  username: string
  country: string
  state: string
  documentNo: string
  proofDocument: File | null
  profilePhoto: File | null
}

// User Type Selection Component
function UserTypeSelection({ selectedType, onSelect }: { selectedType: string; onSelect: (type: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Choose Your Role</h2>
        <p className="text-muted-foreground">Select whether you want to register as a farmer or a buyer</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Card
            className={`cursor-pointer transition-colors ${
              selectedType === "farmer" ? "border-green-600 bg-green-50" : "hover:border-green-200"
            }`}
            onClick={() => onSelect("farmer")}
          >
            <CardContent className="p-6 text-center">
              <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Tractor className={`h-8 w-8 ${selectedType === "farmer" ? "text-green-600" : "text-green-400"}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Farmer</h3>
              <p className="text-sm text-muted-foreground">
                Register as a farmer to sell your produce directly to buyers
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Card
            className={`cursor-pointer transition-colors ${
              selectedType === "buyer" ? "border-green-600 bg-green-50" : "hover:border-green-200"
            }`}
            onClick={() => onSelect("buyer")}
          >
            <CardContent className="p-6 text-center">
              <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Store className={`h-8 w-8 ${selectedType === "buyer" ? "text-green-600" : "text-green-400"}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Buyer</h3>
              <p className="text-sm text-muted-foreground">
                Register as a buyer to purchase quality produce from farmers
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

// Personal Info Component
function PersonalInfo({ data, onChange }: { data: FormData; onChange: (data: Partial<FormData>) => void }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
        <p className="text-muted-foreground">Tell us a bit about yourself</p>
      </div>

      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={data.firstName}
              onChange={(e) => onChange({ firstName: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={data.lastName}
              onChange={(e) => onChange({ lastName: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={data.username}
            onChange={(e) => onChange({ username: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={data.password}
              onChange={(e) => onChange({ password: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Contact Info Component
function ContactInfo({ data, onChange }: { data: FormData; onChange: (data: Partial<FormData>) => void }) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
        <p className="text-muted-foreground">How can we reach you?</p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input id="country" value={data.country} onChange={(e) => onChange({ country: e.target.value })} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" value={data.state} onChange={(e) => onChange({ state: e.target.value })} required />
          </div>
        </div>
      </div>
    </div>
  )
}

// Document Upload Component
function DocumentUpload({ data, onChange }: { data: FormData; onChange: (data: Partial<FormData>) => void }) {
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof Pick<FormData, "proofDocument" | "profilePhoto">,
  ) => {
    const files = e.target.files
    if (files && files.length > 0) {
      onChange({ [field]: files[0] })
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Document Upload</h2>
        <p className="text-muted-foreground">Please provide the required documents</p>
      </div>

      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="documentNo">Document Number</Label>
          <Input
            id="documentNo"
            value={data.documentNo}
            onChange={(e) => onChange({ documentNo: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="proofDocument">Proof Document</Label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md hover:border-green-400 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="proofDocument"
                  className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                >
                  <span>Upload a file</span>
                  <Input
                    id="proofDocument"
                    type="file"
                    className="sr-only"
                    onChange={(e) => handleFileChange(e, "proofDocument")}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="profilePhoto">Profile Photo</Label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md hover:border-green-400 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="profilePhoto"
                  className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                >
                  <span>Upload a file</span>
                  <Input
                    id="profilePhoto"
                    type="file"
                    className="sr-only"
                    onChange={(e) => handleFileChange(e, "profilePhoto")}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Registration Complete Component
function RegistrationComplete({ userType }: { userType: string }) {
  return (
    <div className="text-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
      </motion.div>

      <h2 className="text-2xl font-bold mb-4">Registration Complete!</h2>
      <p className="text-muted-foreground mb-8">
        {userType === "farmer"
          ? "Welcome to Agronet! You can now start listing your products and connecting with buyers."
          : "Welcome to Agronet! You can now start browsing products and connecting with farmers."}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/marketplace">{userType === "farmer" ? "List Products" : "Browse Products"}</Link>
        </Button>
      </div>
    </div>
  )
}

// Main Register Page Component
export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
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
  })

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    const data = new FormData()

    for (const key in formData) {
      const value = formData[key as keyof FormData]
      if (value) {
        data.append(key, value as string | Blob)
      }
    }

    try {
      await axios.post("http://localhost:5000/api/user/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      setStep(5) // Move to completion step
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`Registration failed: ${error.response?.data?.message || "Please try again later."}`)
      } else {
        alert("An unexpected error occurred.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => setStep((s) => Math.min(s + 1, 5))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20">
      <div className="container max-w-6xl">
        <div className="text-center mb-10">
          <AnimatedText text="Create Your Account" className="text-4xl font-bold tracking-tighter mb-4" />
          <AnimatedText
            text="Join our community and start your journey with Agronet"
            className="text-xl text-muted-foreground"
            delay={3}
          />
        </div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex justify-between">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center" style={{ width: i === 4 ? "auto" : "33%" }}>
                <div
                  className={`rounded-full h-10 w-10 flex items-center justify-center border-2 ${
                    step >= i ? "border-green-600 bg-green-600 text-white" : "border-gray-300 bg-white"
                  }`}
                >
                  {i}
                </div>
                {i < 4 && <div className={`flex-1 h-1 ${step > i ? "bg-green-600" : "bg-gray-300"}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <UserTypeSelection
                    selectedType={formData.userType}
                    onSelect={(type) => updateFormData({ userType: type })}
                  />
                )}
                {step === 2 && <PersonalInfo data={formData} onChange={updateFormData} />}
                {step === 3 && <ContactInfo data={formData} onChange={updateFormData} />}
                {step === 4 && <DocumentUpload data={formData} onChange={updateFormData} />}
                {step === 5 && <RegistrationComplete userType={formData.userType} />}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            {step < 5 && (
              <div className="flex justify-between mt-8">
                {step > 1 ? (
                  <Button variant="outline" onClick={prevStep} className="gap-2">
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </Button>
                ) : (
                  <div />
                )}
                {step < 4 ? (
                  <Button
                    onClick={nextStep}
                    className="bg-green-600 hover:bg-green-700 gap-2"
                    disabled={(step === 1 && !formData.userType) || isSubmitting}
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-green-600 hover:bg-green-700 gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Complete Registration
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

