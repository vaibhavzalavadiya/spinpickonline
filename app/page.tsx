import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { generateWebApplicationSchema } from "@/lib/seo";
import SchemaScript from "@/components/SchemaScript";
import { FAQS } from "@/lib/constants";
import { generateFAQSchema } from "@/lib/seo";
import HomeWheel from "@/components/HomeWheel";
import { FiUsers, FiShield, FiSmartphone, FiShare2, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { IoFastFoodOutline, IoSchoolOutline, IoGiftOutline } from 'react-icons/io5';
import { HiOutlineUserGroup } from 'react-icons/hi';

export default function Home() {
  const webAppSchema = generateWebApplicationSchema();
  const faqSchema = generateFAQSchema(FAQS.slice(0, 7)); // Homepage FAQ section

  return (
    <>
      <SchemaScript schema={webAppSchema} />
      <SchemaScript schema={faqSchema} />
      {/* Interactive Wheel Section - Enhanced */}
      <section id="try-wheel" className="pb-10 lg:pb-16 lg:pt-10 pt-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center lg:mb-12 sm:mb-8 mb-3">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900">Spin the Wheel – Free Random Picker Wheel</h1>
          </div>
          <HomeWheel />
        </div>
      </section>

      {/* How It Works - Enhanced with Keywords */}
      <section className="pb-10 lg:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-12 lg:mb-14">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">How Our Random Picker Wheel Works</h2>
            <p className="lg:text-base text-sm text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Get started with our spin the wheel tool in just 3 simple steps. Use it as a wheel of names, decision wheel, or random picker - no installation required!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-linear-to-r from-transparent via-blue-300 to-transparent"></div>

            <div className="relative text-center group">
              <div className="mx-auto flex h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <span className="text-xl sm:text-3xl md:text-4xl font-bold text-white">1</span>
              </div>
              <div className="mt-3 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Add Your Entries</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-4">Type in your list of names, numbers, or choices. Perfect for creating a custom wheel spinner or random name picker with unlimited entries.</p>
              </div>
            </div>

            <div className="relative text-center group">
              <div className="mx-auto flex h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-purple-600 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <span className="text-xl sm:text-3xl md:text-4xl font-bold text-white">2</span>
              </div>
              <div className="mt-3 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Customize Your Spinner</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-4">Choose vibrant colors for each segment with our random color generator. Make your spinning wheel unique for events or themed activities.</p>
              </div>
            </div>

            <div className="relative text-center group">
              <div className="mx-auto flex h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-pink-600 shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <span className="text-xl sm:text-3xl md:text-4xl font-bold text-white">3</span>
              </div>
              <div className="mt-3 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Spin & Get Results</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-4">Click to spin a wheel and watch our RNG randomizer select a winner! Fair, fast, and fun - perfect for giveaways or any random selection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For - Enhanced with Keywords */}
      <section className="bg-gradient-to-b from-gray-50 via-blue-50/30 to-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-14">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Perfect Spin Wheel For Every Occasion</h2>
            <p className="lg:text-base text-sm text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Whether you need a random team picker, name selector, yes or no wheel, or decision maker - our spinner wheel tool handles it all!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            <Link href="/team-picker" className="group relative bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-2xl active:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-100 text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                  <HiOutlineUserGroup className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Random Team Picker</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-5">Use as a random group generator or team picker wheel for fair distribution in sports, classroom projects, and work teams.</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                  Learn more
                  <FiChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/lunch-decisions" className="group relative bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-2xl active:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-purple-100 text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                  <IoFastFoodOutline className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Decision Wheel</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-5">Quick decision maker for lunch or any choice. Use as a yes or no wheel or add multiple options for fair decisions.</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 group-hover:gap-2.5 transition-all">
                  Learn more
                  <FiChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/classroom-activities" className="group relative bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-2xl active:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-green-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-100 text-green-600 mb-4 group-hover:scale-110 transition-transform">
                  <IoSchoolOutline className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Name Picker for Classrooms</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-5">Perfect random name picker and name wheel for teachers. Fair participation spinner for classroom activities and questions.</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 group-hover:gap-2.5 transition-all">
                  Learn more
                  <FiChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link href="/giveaway-winner" className="group relative bg-white p-4 md:p-5 rounded-xl shadow-md hover:shadow-2xl active:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pink-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-pink-500/10 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-pink-100 text-pink-600 mb-4 group-hover:scale-110 transition-transform">
                  <IoGiftOutline className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">Giveaway Randomizer</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-5">Transparent random picker and wheel spinner for Instagram giveaways, YouTube contests, and raffle drawings. Build trust with fair RNG!</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-600 group-hover:gap-2.5 transition-all">
                  Learn more
                  <FiChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose - Enhanced with Keywords */}
      <section className="pb-10 lg:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 lg:mb-14">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Our Random Picker Wheel?</h2>
            <p className="lg:text-base text-sm text-gray-600 max-w-5xl mx-auto leading-relaxed">
              The best free spin wheel and randomizer online. Powerful features that make random selection easy, fair, and fun!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 xl:gap-8">
            <div className="group text-center p-4 md:p-5 md:rounded-2xl rounded-xl bg-linear-to-br from-blue-50 via-blue-50 to-blue-100/50 hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300 border border-blue-100">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-18 md:h-18 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 text-white mb-4 shadow-lg group-hover:shadow-xl group-hover:rotate-6 transition-all">
                <FiUsers className="w-6 h-6 md:w-9 md:h-9" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5">100% Free Spinner</h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-5">No signup, no credit card, unlimited spins forever! Free random picker wheel and spinner wheel for everyone.</p>
            </div>

            <div className="group text-center p-4 md:p-5 md:rounded-2xl rounded-xl bg-linear-to-br from-purple-50 via-purple-50 to-purple-100/50 hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300 border border-purple-100">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-18 md:h-18 rounded-2xl bg-linear-to-br from-purple-500 to-purple-600 text-white mb-4 shadow-lg group-hover:shadow-xl group-hover:rotate-6 transition-all">
                <FiShield className="w-6 h-6 md:w-9 md:h-9" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5">Truly Fair RNG</h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-5">Cryptographically secure random number generator (RNG). Our randomizer ensures 100% unbiased, transparent results for every spin.</p>
            </div>

            <div className="group text-center p-4 md:p-5 md:rounded-2xl rounded-xl bg-linear-to-br from-green-50 via-green-50 to-green-100/50 hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300 border border-green-100">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-18 md:h-18 rounded-2xl bg-linear-to-br from-green-500 to-green-600 text-white mb-4 shadow-lg group-hover:shadow-xl group-hover:rotate-6 transition-all">
                <FiSmartphone className="w-6 h-6 md:w-9 md:h-9" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5">Mobile Spinner Wheel</h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-5">Touch-optimized wheel spinner and picker wheel for phones, tablets, and desktop. No app download needed!</p>
            </div>

            <div className="group text-center p-4 md:p-5 md:rounded-2xl rounded-xl bg-linear-to-br from-pink-50 via-pink-50 to-pink-100/50 hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300 border border-pink-100">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-18 md:h-18 rounded-2xl bg-linear-to-br from-pink-500 to-pink-600 text-white mb-4 shadow-lg group-hover:shadow-xl group-hover:rotate-6 transition-all">
                <FiShare2 className="w-6 h-6 md:w-9 md:h-9" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5">Shareable Wheels</h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-5">Create custom wheel links with spin the wheel options. Share your random picker or decision wheel with anyone, anywhere!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Tools Section - Internal Links */}
      <section className="pb-10 lg:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Explore Our Wheel Tools</h2>
            <p className="lg:text-base text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover more ways to use our random picker wheel. From name picking to giveaways, we have the perfect tool for you!
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { href: "/name-picker", label: "Name Picker", desc: "Random name selector" },
              { href: "/yes-no-wheel", label: "Yes/No Wheel", desc: "Quick decisions" },
              { href: "/random-picker-wheel", label: "Random Picker", desc: "Pick anything" },
              { href: "/spin-wheel-for-giveaway", label: "Giveaway Wheel", desc: "Contest winners" },
              { href: "/decision-wheel", label: "Decision Wheel", desc: "Can't decide?" },
              { href: "/picker-wheel", label: "Picker Wheel", desc: "Universal picker" },
              { href: "/wheel-spinner", label: "Wheel Spinner", desc: "Custom wheels" },
              { href: "/lucky-draw-wheel", label: "Lucky Draw", desc: "Event drawings" },
              { href: "/raffle-wheel", label: "Raffle Wheel", desc: "Prize drawings" },
              { href: "/prize-wheel", label: "Prize Wheel", desc: "Win prizes" },
              { href: "/random-number-wheel", label: "Number Wheel", desc: "Random numbers" },
              { href: "/guides/how-to-use-random-picker-wheel", label: "How to Guide", desc: "Step-by-step" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-blue-300 transition-all hover:shadow-md"
              >
                <span className="font-semibold text-gray-900 group-hover:text-blue-600 text-sm sm:text-base block mb-1 transition-colors">{link.label}</span>
                <span className="text-xs text-gray-500">{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced with Keywords */}
      <section className="bg-gradient-to-b from-gray-50 via-purple-50/20 to-white py-10 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Spin Wheel FAQs</h2>
            <p className="text-sm sm:text-base text-gray-600 px-2">
              Everything you need to know about our spin the wheel, random picker, and wheel of names features
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {FAQS.slice(0, 6).map((faq, index) => (
              <div key={index} className="group bg-white p-4 sm:p-5 rounded-xl hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="flex-shrink-0 w-5 h-5 rounded-lg bg-blue-500 text-white text-xs font-bold flex items-center justify-center">Q</span>
                  <span className="leading-tight">{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 ml-7 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all group"
            >
              View All FAQs
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
