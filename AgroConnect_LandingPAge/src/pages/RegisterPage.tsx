import { useState, useEffect, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Loader2, ChevronRight, ChevronLeft, Tractor, Store, Upload, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent } from "../components/ui/card";
import { registerSchema, type RegisterFormData } from "../lib/validations/register";
import axios from "axios";
import { Country, State, IState } from "country-state-city";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// User Type Selection Component
function UserTypeSelection({ selectedType, onSelect }: { selectedType: string; onSelect: (type: string) => void }) {
  const { t } = useTranslation();
  return (
    <div className="space-y-6 mt-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{t("userType.title")}</h2>
        <p className="text-muted-foreground">{t("userType.subtitle")}</p>
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
              <h3 className="text-xl font-semibold mb-2">{t("userType.farmer.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("userType.farmer.description")}
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
              <h3 className="text-xl font-semibold mb-2">{t("userType.buyer.title")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("userType.buyer.description")}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

// Personal Info Component
function PersonalInfo({ form }: { form: ReturnType<typeof useForm<RegisterFormData>> }) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const { register, formState: { errors } } = form;
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{t("personalInfo.title")}</h2>
        <p className="text-muted-foreground">{t("personalInfo.subtitle")}</p>
      </div>
      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">{t("personalInfo.firstName")}</Label>
            <Input
              id="firstName"
              {...register("firstName")}
              className={errors.firstName ? "border-red-500" : ""}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">{t("personalInfo.lastName")}</Label>
            <Input
              id="lastName"
              {...register("lastName")}
              className={errors.lastName ? "border-red-500" : ""}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">{t("personalInfo.username")}</Label>
          <Input
            id="username"
            {...register("username")}
            className={errors.username ? "border-red-500" : ""}
          />
          {errors.username && (
            <p className="text-sm text-red-500">{errors.username.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">{t("personalInfo.password")}</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className={errors.password ? "border-red-500" : ""}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Contact Info Component
function ContactInfo({ form }: { form: ReturnType<typeof useForm<RegisterFormData>> }) {
  const { t } = useTranslation();
  const { register, formState: { errors }, setValue, watch } = form;
  const [states, setStates] = useState<IState[]>([]);
  const selectedCountry = watch("country");

  useEffect(() => {
    if (selectedCountry) {
      const countryStates = State.getStatesOfCountry(selectedCountry);
      setStates(countryStates);
      setValue("state", "");
    } else {
      setStates([]);
    }
  }, [selectedCountry, setValue]);

  const countries = Country.getAllCountries();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{t("contactInfo.title")}</h2>
        <p className="text-muted-foreground">{t("contactInfo.subtitle")}</p>
      </div>
      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">{t("contactInfo.email")}</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t("contactInfo.phone")}</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country">{t("contactInfo.country")}</Label>
            <Select value={selectedCountry || ""} onValueChange={(value) => setValue("country", value)}>
              <SelectTrigger className={errors.country ? "border-red-500" : ""}>
                <SelectValue placeholder={t("contactInfo.selectCountry")} />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom" align="start" className="max-h-[200px] overflow-y-auto">
                {countries.map((country) => (
                  <SelectItem key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">{t("contactInfo.state")}</Label>
            <Select value={watch("state") || ""} onValueChange={(value) => setValue("state", value)} disabled={!selectedCountry}>
              <SelectTrigger className={errors.state ? "border-red-500" : ""}>
                <SelectValue placeholder={t("contactInfo.selectState")} />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom" align="start" className="max-h-[200px] overflow-y-auto">
                {states.length > 0 ? (
                  states.map((state) => (
                    <SelectItem key={state.isoCode} value={state.isoCode}>
                      {state.name}
                    </SelectItem>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 px-2 py-1">{t("contactInfo.noStates")}</p>
                )}
              </SelectContent>
            </Select>
            {errors.state && <p className="text-sm text-red-500">{errors.state.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

// Document Upload Component
function DocumentUpload({ form }: { form: ReturnType<typeof useForm<RegisterFormData>> }) {
  const { t } = useTranslation();
  const { register, formState: { errors }, setValue } = form;
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: "proofDocument" | "profilePhoto"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue(field, file);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">{t("documentUpload.title")}</h2>
        <p className="text-muted-foreground">{t("documentUpload.subtitle")}</p>
      </div>
      <div className="grid gap-6">
        <div className="space-y-2">
          <Label htmlFor="documentNo">{t("documentUpload.documentNo")}</Label>
          <Input
            id="documentNo"
            {...register("documentNo")}
            className={errors.documentNo ? "border-red-500" : ""}
          />
          {errors.documentNo && (
            <p className="text-sm text-red-500">{errors.documentNo.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="proofDocument">{t("documentUpload.proofDocument")}</Label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md hover:border-green-400 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="proofDocument"
                  className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                >
                  <span>{t("documentUpload.uploadText")}</span>
                  <Input
                    id="proofDocument"
                    type="file"
                    className="sr-only"
                    onChange={(e) => handleFileChange(e, "proofDocument")}
                  />
                </label>
                <p className="pl-1">{t("documentUpload.dragDropText")}</p>
              </div>
              <p className="text-xs text-gray-500">{t("documentUpload.fileSize.document")}</p>
            </div>
          </div>
          {errors.proofDocument && (
            <p className="text-sm text-red-500">{errors.proofDocument.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="profilePhoto">{t("documentUpload.profilePhoto")}</Label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md hover:border-green-400 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="profilePhoto"
                  className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                >
                  <span>{t("documentUpload.uploadText")}</span>
                  <Input
                    id="profilePhoto"
                    type="file"
                    className="sr-only"
                    onChange={(e) => handleFileChange(e, "profilePhoto")}
                  />
                </label>
                <p className="pl-1">{t("documentUpload.dragDropText")}</p>
              </div>
              <p className="text-xs text-gray-500">{t("documentUpload.fileSize.photo")}</p>
            </div>
          </div>
          {errors.profilePhoto && (
            <p className="text-sm text-red-500">{errors.profilePhoto.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Registration Complete Component
function RegistrationComplete({ userType }: { userType: string }) {
  const { t } = useTranslation();
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
      <h2 className="text-2xl font-bold mb-4">{t("complete.title")}</h2>
      <p className="text-muted-foreground mb-8">
        {userType === "farmer" ? t("complete.farmerMessage") : t("complete.buyerMessage")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link to="/dashboard">{t("complete.dashboard")}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="//Product">
            {userType === "farmer"
              ? t("complete.Product.farmer")
              : t("complete.Product.buyer")}
          </Link>
        </Button>
      </div>
    </div>
  );
}

// Main RegisterPage Component
export default function RegisterPage() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      userType: "",
    }
  });

  const { handleSubmit, trigger, watch, setValue } = form;
  const userType = watch("userType");

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, String(value));
        }
      }
    });
    
    try {
      await axios.post("http://localhost:5000/api/user/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      form.reset();
      setStep(5);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`Registration failed: ${error.response?.data?.message || "Please try again later."}`);
      } else {
        alert("An unexpected error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepFields = (currentStep: number): Array<keyof RegisterFormData> => {
    switch (currentStep) {
      case 1:
        return ["userType"];
      case 2:
        return ["firstName", "lastName", "username", "password"];
      case 3:
        return ["email", "phone", "country", "state"];
      case 4:
        return ["documentNo", "proofDocument", "profilePhoto"];
      default:
        return [];
    }
  };

  const nextStep = async () => {
    const fields = getStepFields(step);
    const isValid = await trigger(fields);
    if (isValid) {
      setStep((s) => Math.min(s + 1, 5));
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-gradient-to-b from-green-50 to-white py-20">
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
                  selectedType={userType}
                  onSelect={(type) => setValue("userType", type)}
                />
              )}
              {step === 2 && <PersonalInfo form={form} />}
              {step === 3 && <ContactInfo form={form} />}
              {step === 4 && <DocumentUpload form={form} />}
              {step === 5 && <RegistrationComplete userType={userType} />}
            </motion.div>
          </AnimatePresence>

          {step < 5 && (
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep} className="gap-2">
                  <ChevronLeft className="h-4 w-4" /> {t("navigation.previous")}
                </Button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-green-600 hover:bg-green-700 gap-2"
                  disabled={step === 1 && !userType}
                >
                  {t("navigation.next")} <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t("navigation.submitting")}
                    </>
                  ) : (
                    <>
                      {t("navigation.submit")}
                      <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </form>
  );
}