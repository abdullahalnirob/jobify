const HowItWorks = () => {
  const steps = [
    {
      title: "1. Create an Account",
      description:
        "Sign up in seconds and set up your profile with your skills and experience.",
      icon: "📝",
    },
    {
      title: "2. Browse & Apply",
      description:
        "Explore job listings tailored to your interests and apply instantly.",
      icon: "🔍",
    },
    {
      title: "3. Get Hired",
      description:
        "Connect with employers and start your dream career right away.",
      icon: "🎯",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-[#0f1316] to-[#1c2229] text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 bg-green-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-500/20 rounded-full blur-3xl -z-10"></div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm md:text-base">
        A simple three-step process to get you started on your job-seeking
        journey.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-[#1c2229] border border-gray-700/50 rounded-xl p-6 md:w-1/3 shadow-md hover:shadow-green-500/20 transition duration-300"
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
