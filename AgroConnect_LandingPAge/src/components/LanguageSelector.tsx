import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "gu", name: "ગુજરાતી" },
  { code: "pa", name: "ਪੰਜਾਬੀ" },
  { code: "mr", name: "मराठी" },
];
export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || "en");
  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
    i18n.changeLanguage(value);
    localStorage.setItem("preferredLanguage", value);
  };
  useEffect(() => {
    const storedLang = localStorage.getItem("selectedLanguage");
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
    }
}, [i18n]);
  return (
    <div className="fixed top-5 right-4 z-50">
      <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[140px] bg-green/100 backdrop-blur-sm">
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}