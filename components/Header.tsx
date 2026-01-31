"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { FiMenu, FiX } from "react-icons/fi";
import { IoSparkles } from "react-icons/io5";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between lg:py-4 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 mt-1">
              <Image
                src="/images/logo.png"
                alt={SITE_CONFIG.name}
                width={180}
                height={50}
                priority
                className="max-w-[150px] md:max-w-[180px] w-full"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="/wheel"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <IoSparkles />
                Create Wheel
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-3">
              <Link
                href="/wheel"
                className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-md"
              >
                <IoSparkles />
                Create
              </Link>

              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="cursor-pointer"
              >
                <FiMenu className="text-2xl text-gray-700" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* BACKDROP */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-y-0 end-0 z-50 w-full max-w-[320px] bg-white border-l border-gray-200 shadow-lg
          transition-transform duration-300 ease-in-out lg:hidden
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center max-w-[150px] mt-1 md:max-w-[180px] w-full"
          >
            <Image
              src="/images/logo.png"
              alt={SITE_CONFIG.name}
              width={150}
              height={40}
            />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="cursor-pointer"
          >
            <FiX className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-2 p-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
