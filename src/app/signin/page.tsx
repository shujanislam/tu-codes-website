"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { createSupabaseBrowser } from "../../../lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SignInSuccessfulPopUp from "../../components/ui/SignInSuccessful";

function SignInPage() {
  const supabase = createSupabaseBrowser();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
      setIsLoading(false);
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <SignInSuccessfulPopUp />

      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-5xl rounded-3xl border border-gray-100 bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - TU CODES Branding */}
          <div className="hidden md:flex md:basis-1/2 bg-gray-50 border-r border-gray-100 p-10 relative">
            <div className="w-full flex flex-col justify-between">
              <div>
                {/* Decorative dots (Hero vibe) */}
                <div className="flex gap-2 mb-6">
                  <span className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  Welcome to{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    TU Codes
                  </span>
                </h1>

                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                  Learn, build, and grow together with workshops, hackathons, and projects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Sign In Form */}
          <div className="basis-full md:basis-1/2 p-6 sm:p-10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your account</p>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                handleSignIn();
              }}
            >
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-800 font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 rounded-xl"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-800 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-12 pr-12 rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 transition-colors"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>

                <a href="#" className="text-sm text-blue-700 font-semibold hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Sign In Button */}
              <Button
                type="submit"
                className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-[1.01]"
                disabled={isLoading}
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-blue-700 font-semibold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>

            {/* Mobile-only dots to keep brand presence */}
            <div className="md:hidden mt-10 flex justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
