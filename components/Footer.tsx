import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import {
  FiMail,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiHeart
} from "react-icons/fi";

import { MdOutlineCasino } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container px-4 mx-auto lg:py-12 py-6">


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:gap-8 gap-5 md:grid-cols-4 lg:mb-12 mb-6">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt={SITE_CONFIG.name}
                width={180}
                height={50}
                className="max-w-[150px] md:max-w-[180px] w-full"
              />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            {/* <div className="mt-4 flex space-x-3">
              <a
                href="#"
                className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all"
                aria-label="Twitter"
              >
                <FiTwitter className="text-lg text-gray-700 hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all"
                aria-label="GitHub"
              >
                <FiGithub className="text-lg text-gray-700 hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-lg text-gray-700 hover:text-blue-600" />
              </a>
            </div> */}
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Use Cases</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/random-picker-wheel" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-2 transition-all"></span>
                  Random Picker Wheel
                </Link>
              </li>
              <li>
                <Link href="/team-picker" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-2 transition-all"></span>
                  Team Picker
                </Link>
              </li>
              <li>
                <Link href="/classroom-activities" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-2 transition-all"></span>
                  Classroom Activities
                </Link>
              </li>
              <li>
                <Link href="/giveaway-winner" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-blue-600 rounded-full group-hover:w-2 transition-all"></span>
                  Giveaway Winner
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Features</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/customization" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-600 rounded-full group-hover:w-2 transition-all"></span>
                  Customization
                </Link>
              </li>
              <li>
                <Link href="/mobile-friendly" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-600 rounded-full group-hover:w-2 transition-all"></span>
                  Mobile-Friendly
                </Link>
              </li>
              <li>
                <Link href="/shareable-wheels" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-600 rounded-full group-hover:w-2 transition-all"></span>
                  Shareable Wheels
                </Link>
              </li>
              <li>
                <Link href="/name-spinner" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-600 rounded-full group-hover:w-2 transition-all"></span>
                  Name Spinner
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/guides" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-600 rounded-full group-hover:w-2 transition-all"></span>
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-600 rounded-full group-hover:w-2 transition-all"></span>
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-600 rounded-full group-hover:w-2 transition-all"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-green-600 rounded-full group-hover:w-2 transition-all"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 lg:pt-8 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {currentYear} {SITE_CONFIG.name}. Built for fair and instant decisions.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
