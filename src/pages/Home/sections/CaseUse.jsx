import Pera from "../components/Pera";
import Title from "../components/Title";

function UseCases() {
  const useCases = [
    {
      title: "Primary Care",
      description:
        "Dr SJ M.D reduced her documentation time by 52%, allowing her to see 3 more patients daily while finishing her charts before leaving the office.",
      testimonial:
        "This AI tool streamlines a tedious process, reduces 'click fatigue,' and helps me reclaim some sanity.",
      author: "Dr. SJ, MD",
      hasQuote: true,
    },
    {
      title: "Emergency Medicine",
      description:
        "Our ED department implemented Clin Tech, resulting in more thorough documentation and a 70% decrease in chart completion time during high-volume periods. Our nurses love it.",
      author: "Emergency Department (ED) Nurse Manager",
      hasQuote: false,
    },
    {
      title: "Behavioral Health",
      testimonial:
        "Chartwright has been transformative for our clinic. Our therapists were drowning in documentation; We've slashed average charting time to <strong>under 3 minutes per patient</strong>, freeing up hours for direct care. More importantly, we've seen a significant <strong>reduction in documentation errors and compliance flags</strong>. It's not just faster; it's <em>smarter</em> documentation.",
      author: "Clinical Director, Behavioral Health Practice",
      hasQuote: true,
    },
    {
      title: "Case Management",
      testimonial:
        "Honestly, with the number of patients I manage, documentation felt like a constant, losing battle. But this AI feels like getting an assistant. It takes my detailed notes and <strong>instantly</strong> creates the clear, customized charts I need. I'm getting hours back each week – hours I can now spend directly with patients, tackling barriers, not just typing.",
      author: "Social Worker/Case Manager",
      hasQuote: true,
    },
  ];

  return (
    <section
      id="use-cases"
      className="py-12 md:py-24 px-10 min-h-[400px] bg-[#0f172a]"
    >
      <Title> Use Cases</Title>
      <div className="max-w-[1000px] mx-auto">
        <Pera>
          See how healthcare providers across specialties are transforming their
          practice with Clin Technologies:
        </Pera>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] w-full mx-auto mt-8">
        {useCases.map((useCase, index) => (
          <div
            key={index}
            className="bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl"
          >
            <h3 className="text-[1.44rem] font-semibold text-[#60a5fa] mt-0 mb-4">
              {useCase.title}
            </h3>

            {useCase.description && (
              <p className="text-gray-300 leading-relaxed mb-4">
                {useCase.description}
              </p>
            )}

            {useCase.testimonial && (
              <div className={useCase.description ? "mt-6" : ""}>
                <p
                  className="italic text-white mb-2 pl-4 border-l-[3px] border-[rgba(96,165,250,0.3)] leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: `"${useCase.testimonial}"`,
                  }}
                />
              </div>
            )}

            <p className="italic text-right text-[#94a3b8] mt-2.5 text-[0.833rem] font-medium">
              — {useCase.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UseCases;
