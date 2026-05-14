function App() {
  return (
    <div className="bg-[#001a33] text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-700">
        
        <h1 className="text-3xl font-bold text-green-400">
          Funngro
        </h1>

        <ul className="hidden md:flex gap-10 text-lg">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">Projects</li>
          <li className="hover:text-green-400 cursor-pointer">Companies</li>
          <li className="hover:text-green-400 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-green-400 text-black px-6 py-2 rounded-xl font-semibold hover:scale-105 transition">
          Join Now
        </button>

      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Earn While{" "}
          <span className="text-green-400">
            Learning Through Real Industry Projects
          </span>
        </h2>

        <p className="text-gray-300 text-lg max-w-4xl mx-auto mt-8 leading-9">
          Funngro connects talented students with startups and
          companies to work on real-world projects, gain practical
          experience, and earn money while learning valuable skills.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">

          <button className="bg-green-400 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition">
            Start Earning
          </button>

          <button className="border border-green-400 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-green-400 hover:text-black transition">
            Explore Projects
          </button>

        </div>

      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-20">

        <div className="bg-[#06264d] p-8 rounded-3xl shadow-lg">

          <h3 className="text-3xl font-bold text-green-400 mb-5">
            Real Startup Projects
          </h3>

          <p className="text-gray-300 text-lg leading-8">
            Work with innovative startups and companies on practical
            industry-level projects.
          </p>

        </div>

        <div className="bg-[#06264d] p-8 rounded-3xl shadow-lg">

          <h3 className="text-3xl font-bold text-green-400 mb-5">
            Develop In-Demand Skills
          </h3>

          <p className="text-gray-300 text-lg leading-8">
            Improve coding, UI/UX design, marketing, communication,
            and problem-solving skills.
          </p>

        </div>

        <div className="bg-[#06264d] p-8 rounded-3xl shadow-lg">

          <h3 className="text-3xl font-bold text-green-400 mb-5">
            Earn While You Learn
          </h3>

          <p className="text-gray-300 text-lg leading-8">
            Complete freelance projects, internships, and assignments
            while studying.
          </p>

        </div>

      </section>

      {/* Companies */}
      <section className="px-8 py-16 bg-[#021529]">

        <h2 className="text-5xl font-bold text-center mb-14">
          Trusted By Top Companies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {["Google", "Infosys", "TCS", "Wipro"].map((company) => (

            <div
              key={company}
              className="bg-[#06264d] rounded-2xl p-10 text-center text-3xl font-bold text-green-400 hover:scale-105 transition"
            >
              {company}
            </div>

          ))}

        </div>

      </section>

      {/* About Section */}
      <section className="px-8 py-20 bg-[#001a33]">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-10">
            Why Students Choose Funngro
          </h2>

          <p className="text-gray-300 text-xl leading-10">
            Funngro helps students explore real industry opportunities,
            develop practical skills, and earn through internships,
            freelance projects, and startup collaborations. The platform
            bridges the gap between academic learning and real-world
            experience.
          </p>

        </div>

      </section>

      {/* Trending Projects */}
      <section className="px-8 py-20">

        <h2 className="text-5xl font-bold text-center mb-16">
          Trending Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-[#06264d] p-8 rounded-3xl">

            <h3 className="text-3xl font-bold text-green-400 mb-4">
              Web Development
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              Build responsive websites and work on live client
              projects.
            </p>

            <button className="mt-6 bg-green-400 text-black px-6 py-3 rounded-xl font-bold">
              Apply Now
            </button>

          </div>

          <div className="bg-[#06264d] p-8 rounded-3xl">

            <h3 className="text-3xl font-bold text-green-400 mb-4">
              UI/UX Design
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              Design mobile apps, dashboards, and startup products.
            </p>

            <button className="mt-6 bg-green-400 text-black px-6 py-3 rounded-xl font-bold">
              Apply Now
            </button>

          </div>

          <div className="bg-[#06264d] p-8 rounded-3xl">

            <h3 className="text-3xl font-bold text-green-400 mb-4">
              Digital Marketing
            </h3>

            <p className="text-gray-300 text-lg leading-8">
              Help brands grow using SEO and social media campaigns.
            </p>

            <button className="mt-6 bg-green-400 text-black px-6 py-3 rounded-xl font-bold">
              Apply Now
            </button>

          </div>

        </div>

      </section>

      {/* Testimonials */}
      <section className="px-8 py-20 bg-[#021529]">

        <h2 className="text-5xl font-bold text-center mb-16">
          Student Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-[#06264d] p-8 rounded-3xl">

            <p className="text-gray-300 leading-8">
              “Funngro helped me gain practical web development
              experience while studying engineering.”
            </p>

            <h3 className="text-green-400 font-bold mt-6">
              — Rahul, Student Developer
            </h3>

          </div>

          <div className="bg-[#06264d] p-8 rounded-3xl">

            <p className="text-gray-300 leading-8">
              “I improved my communication and design skills through
              startup projects on Funngro.”
            </p>

            <h3 className="text-green-400 font-bold mt-6">
              — Sneha, UI/UX Intern
            </h3>

          </div>

          <div className="bg-[#06264d] p-8 rounded-3xl">

            <p className="text-gray-300 leading-8">
              “The platform gave me confidence to work on real freelance
              assignments.”
            </p>

            <h3 className="text-green-400 font-bold mt-6">
              — Arjun, Freelancer
            </h3>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="px-8 py-20">

        <h2 className="text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">

          <div className="bg-[#06264d] p-6 rounded-2xl">

            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Who can join Funngro?
            </h3>

            <p className="text-gray-300">
              Students interested in internships, freelance work, and
              startup projects can join Funngro.
            </p>

          </div>

          <div className="bg-[#06264d] p-6 rounded-2xl">

            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Is prior experience required?
            </h3>

            <p className="text-gray-300">
              No. Students can start learning and gaining experience
              through beginner-friendly projects.
            </p>

          </div>

          <div className="bg-[#06264d] p-6 rounded-2xl">

            <h3 className="text-2xl font-bold text-green-400 mb-3">
              Can students earn money?
            </h3>

            <p className="text-gray-300">
              Yes. Students can earn rewards, stipends, and freelance
              income by completing projects successfully.
            </p>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section className="px-8 py-20 bg-[#021529]">

        <div className="max-w-4xl mx-auto bg-[#06264d] p-10 rounded-3xl text-center">

          <h2 className="text-5xl font-bold mb-8">
            Ready To Start Your Career Journey?
          </h2>

          <p className="text-gray-300 text-xl leading-9 mb-10">
            Join Funngro today and explore exciting opportunities with
            startups and companies across multiple domains.
          </p>

          <button className="bg-green-400 text-black px-10 py-4 rounded-2xl font-bold text-xl hover:scale-105 transition">
            Get Started
          </button>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-[#00111f] py-10 text-center border-t border-gray-700">

        <h2 className="text-3xl font-bold text-green-400 mb-4">
          Funngro Revamp
        </h2>

        <p className="text-gray-400 text-lg">
          Empowering students through real-world projects and
          internships.
        </p>

        <p className="text-gray-500 mt-6">
          © 2026 Funngro Revamp Project. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;