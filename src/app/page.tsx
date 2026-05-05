"use client";

import Image from "next/image";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div className={`w-full ${inter.className}`} style={{ backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-100 mx-4 mt-4">
        <div className="bg-white rounded-full px-8 py-4 flex items-center justify-between shadow-lg border-2" style={{ borderColor: "#374151" }}>
          <div className="text-2xl font-bold" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>LOGO</div>
          <nav className="hidden md:flex gap-8 items-center text-sm font-medium" style={{ color: "#374151" }}>
            <a href="#" className="hover:opacity-70 transition">HOME</a>
            <a href="#" className="hover:opacity-70 transition">THE FIRM</a>
            <a href="#" className="hover:opacity-70 transition">SOLUTIONS</a>
            <a href="#" className="hover:opacity-70 transition">ASSET MANAGEMENT</a>
            <a href="#" className="hover:opacity-70 transition">LENDING</a>
            <a href="#" className="hover:opacity-70 transition">NEWS</a>
          </nav>
          <button className="text-white px-6 py-2 rounded-full font-medium transition hover:opacity-90" style={{ backgroundColor: "#374151" }}>
            Investor Portal
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-20 pb-20 relative" style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
        <div className="px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8" style={{ color: "#FFFFFF", fontFamily: "Poppins, sans-serif", width: "100%" }}>
              High Yield Real Estate Investment & Private Equity Solutions
            </h1>
            <p className="text-lg mb-8 max-w-lg" style={{ color: "#FFFFFF" }}>
              Building unique features tailored for your needs with up to 100% of the loan amount.
            </p>
            <div className="flex gap-4 mb-12">
              <button className="text-white px-6 py-3 rounded-full font-semibold transition hover:opacity-90" style={{ backgroundColor: "#F59E0B" }}>
                See How It Works
              </button>
              <button className="px-6 py-3 rounded-full font-semibold transition border-2" style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = "#FFFFFF"} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = "transparent"}>
                Request a Meeting
              </button>
            </div>
          </div>

          {/* Right Image - House */}
          <div className="flex-1 relative flex items-center justify-center z-0">
            <div className="relative z-0">
              <Image
                src="/hand.png"
                alt="Property in hand"
                width={2000}
                height={2000}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Search Filter - Floating Overlap */}
        <div className="w-full px-4 md:px-16 lg:px-24 absolute left-0 right-0 top-156 z-50">
          <div className="rounded-lg p-6 flex flex-col md:flex-row gap-4 items-end shadow-xl" style={{ backgroundColor: "#FFFFFF", borderColor: "#374151" }}>
            <div className="flex-1">
              <label className="text-xs font-semibold block mb-2" style={{ color: "#374151" }}>BUY</label>
              <select className="w-full border-2 rounded px-4 py-3 focus:outline-none" style={{ borderColor: "#374151", color: "#374151" }}>
                <option>Buy</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="text-xs font-semibold block mb-2" style={{ color: "#374151" }}>LOCATION</label>
              <div className="flex items-center border-2 rounded px-4 py-3" style={{ borderColor: "#374151" }}>
                <span className="mr-2">📍</span>
                <input
                  type="text"
                  placeholder="Location"
                  className="flex-1 focus:outline-none"
                  style={{ color: "#374151" }}
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-xs font-semibold block mb-2" style={{ color: "#374151" }}>PRICE</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="MIN"
                  className="w-1/2 border-2 rounded px-4 py-3 focus:outline-none text-sm"
                  style={{ borderColor: "#374151", color: "#374151" }}
                />
                <input
                  type="text"
                  placeholder="MAX"
                  className="w-1/2 border-2 rounded px-4 py-3 focus:outline-none text-sm"
                  style={{ borderColor: "#374151", color: "#374151" }}
                />
              </div>
            </div>
            <button className="text-white p-3 rounded transition hover:opacity-90" style={{ backgroundColor: "#F59E0B" }}>
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section - Pill Card */}
      <div className="w-full relative -mt-20">
        <div className="rounded-t-[60px]" style={{ borderTopLeftRadius: "60px", borderTopRightRadius: "60px", backgroundColor: "#EFEFEF" }}>
          <div className="pt-20 pb-20 grid grid-cols-2 md:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>1,000+</div>
            <p className="mt-2" style={{ color: "#374151" }}>Transactions</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>98%</div>
            <p className="mt-2" style={{ color: "#374151" }}>Returning Investors</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>100%</div>
            <p className="mt-2" style={{ color: "#374151" }}>Quoted Return</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>100%</div>
            <p className="mt-2" style={{ color: "#374151" }}>Happy Homeowners</p>
          </div>
        </div>
        </div>
      </div>

      {/* Start Your New Story Section */}
      <div className="px-8 md:px-16 lg:px-24 py-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>Start Your New Story Here</h2>
            <p style={{ color: "#374151" }}>Introduction to featured homes for your Next Chapter</p>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { address: "7343 S. Loomis St.", city: "Chicago, IL" },
              { address: "7209 S. Loomis St.", city: "Chicago, IL" },
              { address: "1449 S. Loomis St.", city: "Chicago, IL" }
            ].map((property, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg border" style={{ borderColor: "#E5E7EB" }}>
                <div className="bg-gray-400 h-64 flex items-center justify-center">
                  <span style={{ color: "#374151" }}>Property Image</span>
                </div>
                <div className="p-4" style={{ backgroundColor: "#F3F4F6" }}>
                  <p style={{ color: "#374151" }} className="font-semibold">{property.address}</p>
                  <p style={{ color: "#6B7280" }} className="text-sm">{property.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="px-8 md:px-16 lg:px-24 py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>OUR PARTNERS</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="text-2xl font-bold" style={{ color: "#374151" }}>LOGO</div>
          ))}
        </div>
      </div>

      {/* About the Firm */}
      <div className="px-8 md:px-16 lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" style={{ backgroundColor: "#FFFFFF" }}>
        <div>
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>About the Firm</h2>
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>About MIOYM</h3>
          <p style={{ color: "#374151" }} className="mb-6">
            Established in 2008 by our Chief Executive Officer, Marc Coe, MIOYM is a small, focused real estate investment and asset management firm headquartered in Purchase, New York. Our core focus lies in multifamily, commercial, and single-family real estate throughout the United States, with a mission to deliver exceptional returns and create value for all stakeholders.
          </p>
          <p style={{ color: "#374151" }} className="mb-6">
            We are guided by our unwavering commitment to creating wealth and fostering sustainable growth through strategic investments and community partnerships.
          </p>
          <button className="px-6 py-3 rounded-full font-semibold transition" style={{ backgroundColor: "#374151", color: "#FFFFFF" }}>
            Learn more about MIOYM Equities →
          </button>
        </div>
        <div className="flex flex-col items-center justify-center rounded-lg p-8" style={{ backgroundColor: "#F9FAFB", borderLeft: "4px solid " + "#F59E0B" }}>
          <div className="text-6xl mb-4" style={{ color: "#F59E0B" }}>❝</div>
          <p className="text-xl text-center font-semibold mb-6" style={{ color: "#374151" }}>
            Cultivating wealth and value for homeowners, investors, and commercial partners.
          </p>
          <div className="w-full h-48 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#E5E7EB" }}>
            <span style={{ color: "#374151" }}>Modern Building</span>
          </div>
        </div>
      </div>

      {/* How Can We Help */}
      <div className="px-8 md:px-16 lg:px-24 py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>How can we help you today?</h2>
        <p className="text-center mb-12" style={{ color: "#374151" }}>Select a path to explore our specialized real estate solutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg p-8 border-2" style={{ borderColor: "#E5E7EB", backgroundColor: "#FFFFFF" }}>
            <div className="text-4xl mb-4" style={{ color: "#F59E0B" }}>📈</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>FOR INVESTORS</h3>
            <h4 className="font-bold mb-4" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>I WANT TO INVEST</h4>
            <p style={{ color: "#374151" }} className="mb-6 text-sm">
              Access high-yield investment opportunities with typical annual returns of 15.5%. Utilize self-directed IRAs or other retirement plans, and invest with a vertically integrated real estate group.
            </p>
            <button className="px-6 py-2 rounded-full font-semibold transition" style={{ backgroundColor: "#374151", color: "#FFFFFF" }}>
              Explore more
            </button>
          </div>
          <div className="rounded-lg p-8 border-2" style={{ borderColor: "#E5E7EB", backgroundColor: "#FFFFFF" }}>
            <div className="text-4xl mb-4" style={{ color: "#F59E0B" }}>❤️</div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>FOR HOMEOWNERS</h3>
            <h4 className="font-bold mb-4" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>I WANT TO SELL</h4>
            <p style={{ color: "#374151" }} className="mb-6 text-sm">
              Receive direct cash offers for your property. Experience hassle-free home selling and explore flexible options including rent-to-own and affordable housing solutions.
            </p>
            <button className="px-6 py-2 rounded-full font-semibold transition" style={{ backgroundColor: "#F59E0B", color: "#FFFFFF" }}>
              Get Your Cash Offer
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-8 md:px-16 lg:px-24 py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "#F59E0B", fontFamily: "Poppins, sans-serif" }}>Testimonials</h2>
        <h3 className="text-3xl font-bold mb-12 text-center" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>What They're Saying About MIOYM</h3>
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
            <div key={index} className="rounded-lg p-8" style={{ backgroundColor: "#374151", color: "#FFFFFF" }}>
              <p className="mb-4 text-sm leading-6">
                "{testimonial.text}"
              </p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#F59E0B" }}>⭐</span>
                ))}
              </div>
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs" style={{ color: "#D1D5DB" }}>{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Section */}
      <div className="px-8 md:px-16 lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center" style={{ backgroundColor: "#F59E0B" }}>
        <div style={{ color: "#FFFFFF" }}>
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Poppins, sans-serif" }}>Let's Partner And Grow Together</h2>
          <p className="mb-6">
            MIOYM is an innovative investment and asset management firm committed to providing value and delivering consistent returns to investors and commercial partners.
          </p>
          <p className="mb-6">
            MIOYM's primary objectives are capital preservation and capital appreciation while generating favorable risk-adjusted returns and maintaining an emphasis on current income by investing in value opportunities within our specialized markets.
          </p>
        </div>
        <div className="rounded-lg p-8 border-2" style={{ backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" }}>
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>Get In Touch</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded border border-gray-300" style={{ color: "#374151" }} />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded border border-gray-300" style={{ color: "#374151" }} />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2 rounded border border-gray-300" style={{ color: "#374151" }} />
            <textarea placeholder="Write a message" rows={4} className="w-full px-4 py-2 rounded border border-gray-300" style={{ color: "#374151" }}></textarea>
            <button className="w-full px-6 py-2 rounded-full font-semibold transition" style={{ backgroundColor: "#374151", color: "#FFFFFF" }}>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 md:px-16 lg:px-24 py-16" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E5E7EB" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-bold mb-4" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>Get Started</h4>
            <ul className="space-y-2">
              <li><a href="#" style={{ color: "#6B7280" }}>Contact Us</a></li>
              <li><a href="#" style={{ color: "#6B7280" }}>Blog</a></li>
              <li><a href="#" style={{ color: "#6B7280" }}>Single Family Solutions</a></li>
              <li><a href="#" style={{ color: "#6B7280" }}>Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" style={{ color: "#6B7280" }}>Terms & Conditions</a></li>
              <li><a href="#" style={{ color: "#6B7280" }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: "#6B7280" }}>Overview</a></li>
              <li><a href="#" style={{ color: "#6B7280" }}>About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ color: "#374151", fontFamily: "Poppins, sans-serif" }}>Contact Us</h4>
            <ul className="space-y-2">
              <li><a href="tel:9145869062" style={{ color: "#6B7280" }}>914-586-9062</a></li>
              <li><a href="mailto:info@mioym.com" style={{ color: "#6B7280" }}>info@mioym.com</a></li>
              <li><a href="#" style={{ color: "#6B7280" }}>LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs" style={{ color: "#6B7280", borderTop: "1px solid #E5E7EB", paddingTop: "16px" }}>
          <p>© 2026 MIOYM. All Rights Reserved | Design & Developed By AeronDev</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" style={{ color: "#6B7280" }}>Terms & Conditions</a>
            <a href="#" style={{ color: "#6B7280" }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
