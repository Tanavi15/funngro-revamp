function App() {
  return (
    <div className="min-h-screen bg-[#071424] text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-green-400">Funngro</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Companies</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-green-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
          Join Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Earn While <span className="text-green-400">Learning</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Funngro connects talented teens with real companies to work on
          exciting projects, gain experience, and earn money.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">
          <button className="bg-green-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
            Start Earning
          </button>

          <button className="border border-green-400 px-8 py-4 rounded-2xl font-bold hover:bg-green-400 hover:text-black transition">
            Explore Projects
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-20">
        
        <div className="bg-[#0d1b2e] p-8 rounded-3xl border border-gray-800 hover:border-green-400 transition">
          <h2 className="text-2xl font-bold mb-4">Real Projects</h2>
          <p className="text-gray-400">
            Work with startups and companies on real-world projects.
          </p>
        </div>

        <div className="bg-[#0d1b2e] p-8 rounded-3xl border border-gray-800 hover:border-green-400 transition">
          <h2 className="text-2xl font-bold mb-4">Build Skills</h2>
          <p className="text-gray-400">
            Improve your coding, design, marketing, and communication skills.
          </p>
        </div>

        <div className="bg-[#0d1b2e] p-8 rounded-3xl border border-gray-800 hover:border-green-400 transition">
          <h2 className="text-2xl font-bold mb-4">Earn Money</h2>
          <p className="text-gray-400">
            Complete projects and earn rewards while studying.
          </p>
        </div>
      </section>
            {/* Stats Section */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-20">

        <div className="bg-green-400 text-black p-8 rounded-3xl text-center">
          <h1 className="text-5xl font-bold">10K+</h1>
          <p className="mt-3 font-semibold">Teenlancers</p>
        </div>

        <div className="bg-[#0d1b2e] p-8 rounded-3xl text-center border border-gray-800">
          <h1 className="text-5xl font-bold text-green-400">500+</h1>
          <p className="mt-3 text-gray-400">Partner Companies</p>
        </div>

        <div className="bg-[#0d1b2e] p-8 rounded-3xl text-center border border-gray-800">
          <h1 className="text-5xl font-bold text-green-400">₹50L+</h1>
          <p className="mt-3 text-gray-400">Teen Earnings</p>
        </div>

      </section>

      {/* Company Section */}
      <section className="px-8 pb-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Hire Skilled <span className="text-green-400">Teen Talent</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
          Companies can hire talented teens for internships, projects,
          social media marketing, design, coding, and research tasks.
        </p>

        <div className="mt-10">
          <button className="bg-green-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
            Hire Now
          </button>
        </div>

      </section>
            {/* Testimonials */}
      <section className="px-8 pb-20">

        <h1 className="text-4xl font-bold text-center mb-12">
          What Teenlancers Say
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#0d1b2e] p-8 rounded-3xl border border-gray-800">
            <p className="text-gray-400">
              “Funngro helped me gain real project experience while studying.”
            </p>
            <h3 className="mt-6 font-bold text-green-400">Aarav</h3>
          </div>

          <div className="bg-[#0d1b2e] p-8 rounded-3xl border border-gray-800">
            <p className="text-gray-400">
              “I earned my first income through freelance projects on Funngro.”
            </p>
            <h3 className="mt-6 font-bold text-green-400">Sneha</h3>
          </div>

          <div className="bg-[#0d1b2e] p-8 rounded-3xl border border-gray-800">
            <p className="text-gray-400">
              “The platform is modern, easy to use, and great for students.”
            </p>
            <h3 className="mt-6 font-bold text-green-400">Rahul</h3>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        © 2026 Funngro Revamp Project
      </footer>

    </div>
  )
}

export default App