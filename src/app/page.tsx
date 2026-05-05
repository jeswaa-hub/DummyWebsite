"use client";

import Image from "next/image";

const COLORS = {
  primaryBg: "#F8FAFC",      // 60% Pearl White
  charcoal: "#1E293B",       // 30% Deep Charcoal
  silver: "#CBD5E1",         // 10% Metallic Silver
  slate: "#475569",          // Slate for text
  lightSlate: "#94A3B8",     // Light slate
  white: "#FFFFFF",
};

export default function Home() {
  return (
    <div className="w-full font-sans" style={{ backgroundColor: COLORS.primaryBg }}>
      {/* Header - Glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold animate-slide-left" style={{ color: COLORS.charcoal, fontFamily: "Inter, sans-serif" }}>
            MIOYM
          </div>
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium" style={{ color: COLORS.charcoal }}>
            {['Home', 'The Firm', 'Solutions', 'Asset Management', 'Lending', 'News'].map((item, i) => (
              <a key={item} href="#" className={`hover:text-slate-500 transition-colors duration-300 animate-fade-in`} style={{ animationDelay: `${i * 50}ms` }}>
                {item}
              </a>
            ))}
          </nav>
          <button className="text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg animate-slide-right" style={{ backgroundColor: COLORS.charcoal }}>
            Investor Portal
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24" style={{ background: `linear-gradient(135deg, ${COLORS.primaryBg} 0%, ${COLORS.white} 100%)` }}>
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up" style={{ color: COLORS.charcoal, fontFamily: "Inter, sans-serif" }}>
                Scale Your Wealth. Restore Communities.
              </h1>
              <p className="text-xl max-w-xl animate-fade-in-up delay-200" style={{ color: COLORS.slate }}>
                Building unique features tailored for your needs with up to 100% of the loan amount. Secure your financial future with premium investment opportunities.
              </p>
              
              {/* Search Bar - Glassmorphism */}
              <div className="glass soft-shadow rounded-2xl p-4 max-w-2xl animate-fade-in-up delay-400">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <select className="px-4 py-3 rounded-xl border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-slate-300/50 text-sm bg-white/50" style={{ color: COLORS.charcoal }}>
                    <option>Buy</option>
                    <option>Rent</option>
                  </select>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-slate-300/50 text-sm bg-white/50"
                      style={{ color: COLORS.charcoal }}
                    />
                  </div>
                  <select className="px-4 py-3 rounded-xl border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-slate-300/50 text-sm bg-white/50" style={{ color: COLORS.charcoal }}>
                    <option>Price Range</option>
                    <option>$100K - $300K</option>
                    <option>$300K - $500K</option>
                    <option>$500K+</option>
                  </select>
                  <button className="text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-xl" style={{ backgroundColor: COLORS.charcoal }}>
                    Search
                  </button>
                </div>
              </div>

              {/* Dual CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up delay-600">
                <button className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-xl" style={{ backgroundColor: COLORS.charcoal }}>
                  Invest With Us
                </button>
                <button className="px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 hover:bg-gray-50" style={{ borderColor: COLORS.silver, color: COLORS.charcoal }}>
                  Find a Home
                </button>
              </div>
            </div>

            {/* Right Side - Image + Trust Indicators */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square animate-motion-blur">
                <Image
                  src="/hand.png"
                  alt="Premium Property"
                  fill
                  className="object-contain"
                />
                {/* Trust Indicators Bar - Overlapping */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 glass soft-shadow rounded-2xl px-8 py-6 flex gap-12 items-center w-full  animate-fade-in-up delay-800">
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: COLORS.charcoal }}>17.5%</div>
                    <div className="text-sm font-semibold" style={{ color: COLORS.slate }}>Typical ROI</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: COLORS.charcoal }}>$20M+</div>
                    <div className="text-sm" style={{ color: COLORS.slate }}>Lending Limit</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: COLORS.charcoal }}>15+</div>
                    <div className="text-sm" style={{ color: COLORS.slate }}>Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-24" style={{ backgroundColor: COLORS.primaryBg }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up" style={{ color: COLORS.charcoal, fontFamily: "Inter, sans-serif" }}>
              How Can We Help You Today?
            </h2>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in-up delay-200" style={{ color: COLORS.slate }}>
              Select a path to explore our specialized real estate solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Investors Card */}
            <div className="group bg-white rounded-2xl p-8 soft-shadow hover:soft-shadow-hover transition-all duration-500 border border-gray-100/50 animate-fade-in-up delay-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ border: `2px solid ${COLORS.silver}` }}>
                <svg className="w-8 h-8" style={{ color: COLORS.slate }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.charcoal }}>For Investors</h3>
              <p className="mb-6" style={{ color: COLORS.slate }}>
                Access high-yield investment opportunities with typical annual returns of 17.5%. Utilize self-directed IRAs or retirement plans.
              </p>
              <button className="font-semibold transition-colors hover:text-slate-500" style={{ color: COLORS.charcoal }}>
                Explore Opportunities →
              </button>
            </div>

            {/* Homeowners Card */}
            <div className="group bg-white rounded-2xl p-8 soft-shadow hover:soft-shadow-hover transition-all duration-500 border border-gray-100/50 animate-fade-in-up delay-500">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ border: `2px solid ${COLORS.silver}` }}>
                <svg className="w-8 h-8" style={{ color: COLORS.slate }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.charcoal }}>For Homeowners</h3>
              <p className="mb-6" style={{ color: COLORS.slate }}>
                Receive direct cash offers for your property. Experience hassle-free home selling with flexible options including rent-to-own.
              </p>
              <button className="font-semibold transition-colors hover:text-slate-500" style={{ color: COLORS.charcoal }}>
                Get Cash Offer →
              </button>
            </div>

            {/* Professionals Card */}
            <div className="group bg-white rounded-2xl p-8 soft-shadow hover:soft-shadow-hover transition-all duration-500 border border-gray-100/50 animate-fade-in-up delay-700">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ border: `2px solid ${COLORS.silver}` }}>
                <svg className="w-8 h-8" style={{ color: COLORS.slate }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.charcoal }}>For Professionals</h3>
              <p className="mb-6" style={{ color: COLORS.slate }}>
                Partner with a vertically integrated real estate group. Access exclusive deals and build long-term wealth.
              </p>
              <button className="font-semibold transition-colors hover:text-slate-500" style={{ color: COLORS.charcoal }}>
                Partner With Us →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24" style={{ backgroundColor: COLORS.primaryBg }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left - Text Content */}
            <div className="lg:col-span-1 animate-slide-left">
              <h2 className="text-4xl font-bold mb-6" style={{ color: COLORS.charcoal, fontFamily: "Inter, sans-serif" }}>
                Start Your New Story Here
              </h2>
              <p className="text-lg mb-8" style={{ color: COLORS.slate }}>
                Discover our curated selection of premium properties. Each home is handpicked for its investment potential and quality.
              </p>
              <button className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:opacity-90" style={{ backgroundColor: COLORS.charcoal }}>
                View All Properties
              </button>
            </div>

            {/* Right - Property Cards Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { address: "7343 S. Loomis St.", city: "Chicago, IL", price: "$425,000", beds: 4, baths: 3 },
                { address: "7209 S. Loomis St.", city: "Chicago, IL", price: "$389,000", beds: 3, baths: 2 },
                { address: "1449 S. Loomis St.", city: "Chicago, IL", price: "$550,000", beds: 5, baths: 4 }
              ].map((property, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden soft-shadow hover:soft-shadow-hover transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 150 + 200}ms` }}>
                  <div className="relative h-56 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span style={{ color: COLORS.lightSlate }}>Property Image</span>
                    </div>
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                      <span className="font-bold" style={{ color: COLORS.charcoal }}>{property.price}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2" style={{ color: COLORS.charcoal }}>{property.address}</h3>
                    <p className="text-sm mb-4" style={{ color: COLORS.slate }}>{property.city}</p>
                    <div className="flex gap-4 text-sm" style={{ color: COLORS.slate }}>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        {property.beds} Beds
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                        {property.baths} Baths
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section - Horizontal Timeline */}
      <section className="py-24" style={{ backgroundColor: COLORS.primaryBg }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up" style={{ color: COLORS.charcoal, fontFamily: "Inter, sans-serif" }}>
              Our Investment Process
            </h2>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in-up delay-200" style={{ color: COLORS.slate }}>
              A streamlined approach to maximizing your real estate investment returns.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 bg-gray-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Locate", description: "We identify undervalued properties in prime locations with high growth potential." },
                { step: "02", title: "Analyze", description: "Our team conducts thorough due diligence and financial analysis." },
                { step: "03", title: "Rehabilitate", description: "We renovate and improve properties to maximize their value." },
                { step: "04", title: "Sell", description: "Properties are sold at optimal market conditions for maximum returns." }
              ].map((item, index) => (
                <div key={index} className="relative bg-white rounded-2xl p-8 soft-shadow hover:soft-shadow-hover transition-all duration-500 text-center group animate-fade-in-up" style={{ animationDelay: `${index * 150 + 300}ms` }}>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-white shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ border: `3px solid ${COLORS.silver}` }}>
                    <span className="text-xl font-bold" style={{ color: COLORS.charcoal }}>{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: COLORS.charcoal }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: COLORS.slate }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" style={{ backgroundColor: COLORS.charcoal }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
            {/* Left - Text */}
            <div className="lg:col-span-1 animate-slide-left">
              <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.white, fontFamily: "Inter, sans-serif" }}>
                Our Track Record
              </h2>
              <p className="text-lg" style={{ color: COLORS.silver }}>
                Years of excellence in real estate investment and asset management.
              </p>
            </div>
            {/* Right - Stats */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "1,000+", label: "Transactions" },
                { value: "98%", label: "Returning Investors" },
                { value: "17.5%", label: "Average ROI" },
                { value: "100%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100 + 400}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: COLORS.white, fontFamily: "Inter, sans-serif" }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: COLORS.silver }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24" style={{ backgroundColor: COLORS.primaryBg }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold mb-2 animate-fade-in" style={{ color: COLORS.slate }}>Testimonials</h2>
            <h3 className="text-4xl font-bold animate-fade-in-up delay-200" style={{ color: COLORS.charcoal }}>What They&apos;re Saying About MIOYM</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "MIOYM exceeded our expectations with their professional approach and transparent investment process. The returns have been consistent and reliable.",
                name: "James Mitchell",
                title: "Real Estate Investor"
              },
              {
                text: "Working with MIOYM transformed our property investment strategy. Their expertise and dedication to client success is unmatched in the industry.",
                name: "Sarah Chen",
                title: "Portfolio Manager"
              }
            ].map((testimonial, index) => (
              <div key={index} className="rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: `${index * 200 + 400}ms`, backgroundColor: COLORS.charcoal }}>
                <p className="mb-6 text-lg leading-relaxed" style={{ color: COLORS.white }}>
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" style={{ color: COLORS.silver }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-semibold" style={{ color: COLORS.white }}>{testimonial.name}</p>
                <p className="text-sm" style={{ color: COLORS.silver }}>{testimonial.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Charcoal with Silver accents */}
      <section className="py-24" style={{ backgroundColor: COLORS.charcoal }}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left" style={{ color: COLORS.white }}>
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Let&apos;s Partner And Grow Together
            </h2>
            <p className="text-lg mb-6 opacity-90">
              MIOYM is an innovative investment and asset management firm committed to providing value and delivering consistent returns to investors and commercial partners.
            </p>
            <p className="opacity-90">
              Our primary objectives are capital preservation and capital appreciation while generating favorable risk-adjusted returns.
            </p>
          </div>
          <div className="glass-dark rounded-2xl p-8 animate-fade-in-up delay-300">
            <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.white }}>Get In Touch</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-xl border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-slate-300/50 bg-white/10 text-white placeholder-gray-400" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-slate-300/50 bg-white/10 text-white placeholder-gray-400" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-slate-300/50 bg-white/10 text-white placeholder-gray-400" />
              <textarea placeholder="Write a message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200/20 focus:outline-none focus:ring-2 focus:ring-slate-300/50 bg-white/10 text-white placeholder-gray-400"></textarea>
              <button type="button" className="w-full text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90" style={{ backgroundColor: COLORS.silver, color: COLORS.charcoal }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16" style={{ backgroundColor: COLORS.primaryBg, borderTop: "1px solid #E5E7EB" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-xl mb-4" style={{ color: COLORS.charcoal, fontFamily: "Inter, sans-serif" }}>Get Started</h4>
              <ul className="space-y-3">
                <li><a href="#" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>Contact Us</a></li>
                <li><a href="#" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>Blog</a></li>
                <li><a href="#" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>Single Family Solutions</a></li>
                <li><a href="#" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>Newsletter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4" style={{ color: COLORS.charcoal, fontFamily: "Inter, sans-serif" }}>Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>Terms & Conditions</a></li>
                <li><a href="#" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>Privacy Policy</a></li>
                <li><a href="#" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>Overview</a></li>
                <li><a href="#" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-4" style={{ color: COLORS.charcoal, fontFamily: "Inter, sans-serif" }}>Contact Us</h4>
              <ul className="space-y-3">
                <li><a href="tel:9145869062" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>914-586-9062</a></li>
                <li><a href="mailto:info@mioym.com" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>info@mioym.com</a></li>
                <li><a href="#" className="transition-colors hover:text-slate-500" style={{ color: COLORS.slate }}>LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-8 border-t border-gray-200" style={{ color: COLORS.slate }}>
            <p>© 2026 MIOYM. All Rights Reserved | Design & Developed By AeronDev</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="transition-colors hover:text-slate-500">Terms & Conditions</a>
              <a href="#" className="transition-colors hover:text-slate-500">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}