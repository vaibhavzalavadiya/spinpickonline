"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, TOOLS_DROPDOWN_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { IoSparkles } from "react-icons/io5";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setToolsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setToolsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setToolsDropdownOpen(false), 200);
  };

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
              {NAV_ITEMS.map((item) =>
                'hasDropdown' in item && item.hasDropdown ? (
                  <div
                    key={item.href + item.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group cursor-pointer"
                      onClick={() => setToolsDropdownOpen((v) => !v)}
                      aria-expanded={toolsDropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${toolsDropdownOpen ? "rotate-180" : ""}`}
                      />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                    </button>

                    {/* Desktop Dropdown */}
                    {toolsDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[560px] dropdown-animate">
                        {/* Arrow */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45 z-10" />

                        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden z-20">
                          {/* Header */}
                          <div className="px-5 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              🛠️ Our Tools
                            </p>
                          </div>

                          {/* Tools Grid */}
                          <div className="grid grid-cols-2 gap-0.5 p-2">
                            {TOOLS_DROPDOWN_ITEMS.map((tool) => (
                              <Link
                                key={tool.href}
                                href={tool.href}
                                onClick={() => setToolsDropdownOpen(false)}
                                className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group/item"
                              >
                                <span className="text-xl mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                                  {tool.icon}
                                </span>
                                <div className="min-w-0">
                                  <p className="text-sm font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors">
                                    {tool.label}
                                  </p>
                                  <p className="text-xs text-gray-500 leading-snug mt-0.5">
                                    {tool.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Footer */}
                          <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                            <Link
                              href="/features"
                              onClick={() => setToolsDropdownOpen(false)}
                              className="text-xs font-semibold text-blue-600 hover:text-purple-600 transition-colors inline-flex items-center gap-1"
                            >
                              View all features →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                )
              )}
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
        <div className="flex flex-col gap-1 p-4 overflow-y-auto max-h-[calc(100vh-80px)] custom-scrollbar">
          {NAV_ITEMS.map((item) =>
            'hasDropdown' in item && item.hasDropdown ? (
              <div key={item.href + item.label}>
                {/* Our Tools accordion trigger */}
                <button
                  onClick={() => setMobileToolsOpen((v) => !v)}
                  className="w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition cursor-pointer"
                  aria-expanded={mobileToolsOpen}
                >
                  <span>{item.label}</span>
                  <FiChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${mobileToolsOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Tools List (accordion) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileToolsOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="ml-2 mt-1 mb-2 border-l-2 border-blue-100 pl-2 space-y-0.5">
                    {TOOLS_DROPDOWN_ITEMS.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileToolsOpen(false);
                        }}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all"
                      >
                        <span className="text-base">{tool.icon}</span>
                        <span className="font-medium">{tool.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}
