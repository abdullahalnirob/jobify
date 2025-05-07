import { Briefcase, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-green-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left md:w-1/2">
            <div className="inline-block px-3 py-1 bg-green-600/20 rounded-full mb-4">
              <p className="text-green-400 text-sm font-medium flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" /> Over 10,000+ jobs
                available
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 mb-6 leading-tight">
              Find Your <span className="text-green-500">Dream Job</span> With{" "}
              <span className="text-green-500">Jobify</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl">
              Discover thousands of job opportunities with all the information
              you need. Your future career is waiting for you.
            </p>
            <a href="#jobs">
              {" "}
              <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition-colors shadow-lg shadow-green-600/20 my-4">
                Explore Jobs
              </button>
            </a>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-center">
              <div>
                <p className="text-green-500 font-bold text-2xl">10k+</p>
                <p className="text-gray-400 text-sm">Job Listings</p>
              </div>
              <div>
                <p className="text-green-500 font-bold text-2xl">8k+</p>
                <p className="text-gray-400 text-sm">Companies</p>
              </div>
              <div>
                <p className="text-green-500 font-bold text-2xl">15M+</p>
                <p className="text-gray-400 text-sm">Job Seekers</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img
                src="/Programming-pana.svg"
                alt="Job portal illustration"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />

              <div className="absolute -top-10 -left-10 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-600/20 p-2 rounded-md">
                    <Briefcase className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium">Remote Jobs</p>
                    <p className="text-gray-400 text-sm">2,500+ Available</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-600/20 p-2 rounded-md">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium">Tech Industry</p>
                    <p className="text-gray-400 text-sm">Highest Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {["Google", "Microsoft", "Amazon", "Apple", "Meta"].map(
              (company) => (
                <div
                  key={company}
                  className="text-gray-300 font-semibold text-lg"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-sm transition-colors"
          >
            Remote Jobs
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-sm transition-colors"
          >
            Full-time
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-sm transition-colors"
          >
            Part-time
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-sm transition-colors"
          >
            Developer
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-sm transition-colors"
          >
            Designer
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-sm transition-colors"
          >
            Marketing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
