"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect,useState } from "react";


export const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return (
        <Button variant="outline" size="icon" className="relative">
            <Sun className="h-5 w-5" />
        </Button>
    );
}
  return (
    <Button 
        variant="outline" 
        size="icon" 
        onClick={toggleTheme}
        className="relative"
    >
        {theme === "dark" ? (
            <Moon className="h-5 w-5" />
        ) : (
            <Sun className="h-5 w-5" />
        )}
    </Button>
  );
}