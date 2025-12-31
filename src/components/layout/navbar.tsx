"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createSupabaseBrowser } from "../../../lib/supabase/client";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import LogoutSuccessfulPopUp from "../ui/LogoutSuccessful";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
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

            {/* Right: Navigation Links + Auth Button */}
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
          </div>
        </div>
      </nav>
    </>
  );
}