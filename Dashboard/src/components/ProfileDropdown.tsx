import { useState } from "react";
import { User, LogOut, Settings, Globe } from "lucide-react";

interface ProfileDropdownProps {
  userName: string;
  userEmail: string;
}

export function ProfileDropdown({ userName, userEmail }: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-full bg-agro-primary/10 px-3 py-2 hover:bg-agro-primary/20 transition-colors"
      >
        <div className="h-8 w-8 rounded-full bg-agro-primary/20 flex items-center justify-center">
          <User className="h-4 w-4 text-agro-primary" />
        </div>
        <span className="hidden md:inline text-sm font-medium text-agro-primary">
          {userName}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-lg border bg-white shadow-lg animate-fade-in">
          <div className="p-4 border-b">
            <div className="font-medium text-agro-text">{userName}</div>
            <div className="text-sm text-agro-muted">{userEmail}</div>
          </div>

          <div className="p-2">
            <button className="w-full flex items-center space-x-2 rounded-md px-3 py-2 text-sm text-agro-text hover:bg-agro-background transition-colors">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>

            <div className="relative px-3 py-2">
              <div className="flex items-center space-x-2 text-sm text-agro-text">
                <Globe className="h-4 w-4" />
                <span>Language</span>
              </div>
              <select className="mt-1 w-full rounded-md border-gray-200 text-sm">
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <button className="w-full flex items-center space-x-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}