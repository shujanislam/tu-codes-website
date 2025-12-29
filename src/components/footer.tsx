"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="w-full mx-auto ">
        {/* Top card */}
        <div className="rounded-3xl bg-gray-50 border border-gray-100 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              {/* Decorative dots (to match Hero) */}
              <div className="flex gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                TU{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Codes
                </span>
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                A community at Tezpur University where students learn, build, and grow
                through workshops, hackathons, and real projects.
              </p>

              {/* Socials */}
              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="https://www.linkedin.com"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-blue-200 hover:bg-blue-50 transition"
                  target="_blank"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </Link>

                <Link
                  href="https://www.instagram.com/codes_tu/"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-blue-200 hover:bg-blue-50 transition"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5 text-gray-700" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link className="hover:text-blue-700 transition" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-700 transition" href="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-700 transition" href="/events">
                    Events
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-700 transition" href="/projects">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1a73e8] mt-0.5" />
                  <div>
                    <div className="font-medium text-gray-800">Tezpur University</div>
                    <div>Napaam, Tezpur, Assam — 784028</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1a73e8]" />
                  <a
                    href="mailto:tucodes@tezu.ac.in"
                    className="hover:text-blue-700 transition"
                  >
                    tucodes@tezu.ac.in
                  </a>
                </div>
              </div>

            </div>
          </div>

          <hr className="my-10 border-gray-200" />

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-600">
              © {year} TU Codes • Tezpur University Community of Developers & Engineers
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
