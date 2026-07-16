"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold transition-opacity hover:opacity-80"
        >
          AutoFlow AI
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>

          <Link
            href="#workflow"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Workflow
          </Link>

          <Link
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost">Login</Button>

          <Button className="rounded-full px-6">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}