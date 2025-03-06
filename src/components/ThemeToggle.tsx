import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { t } = useLanguage();

  const getThemeIcon = () => {
    if (theme === "system") return <Monitor className="h-5 w-5" />;
    if (theme === "dark") return <Moon className="h-5 w-5" />;
    return <Sun className="h-5 w-5" />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-600 hover:text-green-700 dark:text-gray-300 dark:hover:text-green-400"
          title={t("theme")}
        >
          {getThemeIcon()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`${theme === "light" ? "bg-green-50 dark:bg-green-900/20" : ""} cursor-pointer dark:text-white flex items-center gap-2`}
        >
          <Sun className="h-4 w-4" />
          {t("light_mode")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`${theme === "dark" ? "bg-green-50 dark:bg-green-900/20" : ""} cursor-pointer dark:text-white flex items-center gap-2`}
        >
          <Moon className="h-4 w-4" />
          {t("dark_mode")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`${theme === "system" ? "bg-green-50 dark:bg-green-900/20" : ""} cursor-pointer dark:text-white flex items-center gap-2`}
        >
          <Monitor className="h-4 w-4" />
          {t("system_mode")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
