"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createSupabaseBrowser } from "../../../lib/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut, Menu, X } from "lucide-react";
import LogoutSuccessfulPopUp from "../ui/LogoutSuccessful";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const supabase = createSupabaseBrowser();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if user is logged in
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setShowLogoutPopup(true);
    setMobileMenuOpen(false);
    
    // Redirect after 2 seconds
    setTimeout(() => {
      router.push("/signin");
      router.refresh();
    }, 2000);
  };

  return (
    <>
      {showLogoutPopup && (
        <LogoutSuccessfulPopUp onClose={() => setShowLogoutPopup(false)} />
      )}

      <nav className={`sticky top-0 z-50 bg-white backdrop-blur-sm bg-white/95 transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Name */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              {/* Logo */}
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TC</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">TU Codes</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                About
              </Link>
              <Link
                href="/events"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Events
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Projects
              </Link>
              
              {/* Conditional Button: Join Us or Logout */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all hover:shadow-lg hover:scale-105"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              ) : (
                <Link
                  href="/signin"
                  className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105"
                >
                  Join Us
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-colors px-4 py-2"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-colors px-4 py-2"
                >
                  About
                </Link>
                <Link
                  href="/events"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-colors px-4 py-2"
                >
                  Events
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-colors px-4 py-2"
                >
                  Projects
                </Link>
                
                {/* Mobile Auth Button */}
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all mx-4"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/signin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-gradient-to-r from-blue-400 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold text-center hover:bg-blue-700 transition-all mx-4"
                  >
                    Join Us
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}