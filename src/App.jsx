function App() {
  return (
    <div className="bg-[#02152b] text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-5 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-green-400">
          Funngro
        </h1>

        <div className="hidden md:flex gap-8 text-lg">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Companies</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-green-400 text-black px-6 py-2 rounded-xl font-semibold hover:scale-105 transition">
          Join Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Earn While{" "}
          <span className="text-green-400">
            Learning
          </span>
        </h1>

        <p className="text-gray-300 mt-8 text-xl max-w-3xl mx-auto">
          Funngro connects talented teens with real companies
          to work on exciting projects, gain experience,
          and earn money.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
          <button className="bg-green-400 text-black px-10 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition">
            Start Earning
          </button>

          <button className="border border-green-400 px-10 py-4 rounded-2xl text-xl font-bold hover:bg-green-400 hover:text-black transition">
            Explore Projects
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-20">

        <div className="bg-[#071d38] p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Real Projects
          </h2>

          <p className="text-gray-300 text-lg">
            Work with startups and companies on real-world projects.
          </p>
        </div>

        <div className="bg-[#071d38] p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Build Skills
          </h2>

          <p className="text-gray-300 text-lg">
            Improve your coding, design, marketing,
            and communication skills.
          </p>
        </div>

        <div className="bg-[#071d38] p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Earn Money
          </h2>

          <p className="text-gray-300 text-lg">
            Complete projects and earn rewards while studying.
          </p>
        </div>

      </section>

      {/* Companies Section */}
      <section className="px-8 py-20 bg-[#031a33]">

        <h2 className="text-5xl font-bold text-center mb-16">
          Top Hiring Companies
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-[#071d38] p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-green-400">
              Google
            </h3>
          </div>

          <div className="bg-[#071d38] p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-green-400">
              Infosys
            </h3>
          </div>

          <div className="bg-[#071d38] p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-green-400">
              TCS
            </h3>
          </div>

          <div className="bg-[#071d38] p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-green-400">
              Wipro
            </h3>
          </div>

        </div>
      </section>
      {/* Projects Section */}
<section className="px-8 py-20">

  <h2 className="text-5xl font-bold text-center mb-16">
    Trending Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-[#071d38] p-8 rounded-3xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-bold text-green-400 mb-4">
        Web Development
      </h3>

      <p className="text-gray-300 mb-6">
        Build responsive websites and real client projects.
      </p>

      <button className="bg-green-400 text-black px-5 py-2 rounded-xl font-semibold">
        Apply Now
      </button>
    </div>

    <div className="bg-[#071d38] p-8 rounded-3xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-bold text-green-400 mb-4">
        UI/UX Design
      </h3>

      <p className="text-gray-300 mb-6">
        Design mobile apps, dashboards, and startup products.
      </p>

      <button className="bg-green-400 text-black px-5 py-2 rounded-xl font-semibold">
        Apply Now
      </button>
    </div>

    <div className="bg-[#071d38] p-8 rounded-3xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-bold text-green-400 mb-4">
        Digital Marketing
      </h3>

      <p className="text-gray-300 mb-6">
        Help brands grow using SEO and social media campaigns.
      </p>

      <button className="bg-green-400 text-black px-5 py-2 rounded-xl font-semibold">
        Apply Now
      </button>
    </div>

  </div>
</section>
{/* Stats Section */}
<section className="px-8 py-20 bg-[#031a33]">

  <div className="grid md:grid-cols-4 gap-8 text-center">

    <div className="bg-[#071d38] p-8 rounded-3xl">
      <h2 className="text-5xl font-bold text-green-400">
        10K+
      </h2>

      <p className="text-gray-300 mt-4 text-xl">
        Teenlancers
      </p>
    </div>

    <div className="bg-[#071d38] p-8 rounded-3xl">
      <h2 className="text-5xl font-bold text-green-400">
        500+
      </h2>

      <p className="text-gray-300 mt-4 text-xl">
        Companies
      </p>
    </div>

    <div className="bg-[#071d38] p-8 rounded-3xl">
      <h2 className="text-5xl font-bold text-green-400">
        ₹2Cr+
      </h2>

      <p className="text-gray-300 mt-4 text-xl">
        Earnings Paid
      </p>
    </div>

    <div className="bg-[#071d38] p-8 rounded-3xl">
      <h2 className="text-5xl font-bold text-green-400">
        50K+
      </h2>

      <p className="text-gray-300 mt-4 text-xl">
        Projects Completed
      </p>
    </div>

  </div>
</section>

{/* CTA Section */}
<section className="px-8 py-24 text-center">

  <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl p-12 text-black">

    <h2 className="text-5xl font-bold mb-6">
      Start Your Career Journey Today
    </h2>

    <p className="text-xl mb-8 max-w-3xl mx-auto">
      Join thousands of teen freelancers working with startups,
      building skills, and earning real money through Funngro.
    </p>

    <button className="bg-black text-white px-10 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition">
      Join Funngro
    </button>

  </div>
</section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-gray-800">
        <p className="text-gray-400">
          © 2026 Funngro Revamp Project | Built with React & Tailwind CSS
        </p>
      </footer>

    </div>
  )
}

export default App