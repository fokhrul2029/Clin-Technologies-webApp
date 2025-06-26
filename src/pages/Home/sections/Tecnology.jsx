import Pera from "../components/Pera";
import Title from "../components/Title";

function Technology() {
  const technologies = [
    {
      icon: "🧠",
      title: "Sophisticated Natural Language Processing",
      description:
        "At the core of our platform is an advanced foundation model. This enables our system to grasp the nuances of clinical conversations — understanding context, recognizing intent, and accurately interpreting medical terminology. This deep comprehension allows the AI to generate clear, concise, and contextually relevant medical notes automatically.",
    },
    {
      icon: "🔄",
      title: "Learning Mode & Personalization",
      description:
        "Our AI doesn't rely on generic templates. We initiate the process by learning directly from your specific cases and workflows. The system intelligently refines its understanding and output based on your ongoing feedback. With each processed case, its accuracy and alignment with your unique clinical documentation needs become increasingly precise, ensuring a truly personalized solution.",
    },
    {
      icon: "🔒",
      title: "Robust Data Privacy & Security",
      description:
        "Protecting sensitive health information is paramount. Our AI solutions are architected with a security-first approach, incorporating principles like 'zero trust'. We utilize robust security measures, including comprehensive encryption (both at rest and in transit) and strict, role-based access controls, to ensure data integrity and confidentiality, limiting access exclusively to authorized personnel.",
      badges: [
        {
          icon: "🔒",
          text: "HIPAA COMPLIANT",
          bgColor: "rgba(16,185,129,0.1)",
          borderColor: "rgba(16,185,129,0.3)",
          textColor: "#10b981",
          hoverBg: "rgba(16,185,129,0.2)",
        },
        {
          icon: "📝",
          text: "BUSINESS ASSOCIATE AGREEMENT",
          bgColor: "rgba(79,70,229,0.1)",
          borderColor: "rgba(79,70,229,0.3)",
          textColor: "#818cf8",
          hoverBg: "rgba(79,70,229,0.2)",
        },
      ],
    },
  ];

  return (
    <section
      id="technology"
      className="py-12 md:py-24 px-10 min-h-[400px] bg-[#0f172a]"
    >
      <Title>Our Technology</Title>
      <div className="max-w-[1000px] mx-auto">
        <Pera>
          At Clin Technologies, we've built our platform on groundbreaking AI
          technology specifically designed for healthcare. Our solutions use the
          latest advancements in natural language processing and machine
          learning to create a system that truly understands the complexities of
          medical documentation.
        </Pera>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] w-full mx-auto mt-[50px]">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-[rgba(30,58,138,0.3)] rounded-xl p-[35px] border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl"
          >
            {/* Badges for security card */}
            {tech.badges && (
              <div className="flex gap-[15px] flex-wrap mb-5">
                {tech.badges.map((badge, badgeIndex) => (
                  <div
                    key={badgeIndex}
                    className="inline-flex items-center py-[6px] px-[15px] rounded-[25px] border transition-all duration-300"
                    style={{
                      backgroundColor: badge.bgColor,
                      borderColor: badge.borderColor,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = badge.hoverBg;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = badge.bgColor;
                    }}
                  >
                    <span
                      className="mr-[10px] text-[18px]"
                      style={{ color: badge.textColor }}
                    >
                      {badge.icon}
                    </span>
                    <span className="text-white font-semibold text-[0.833rem] tracking-[0.05em]">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Icon for non-security cards */}
            {!tech.badges && (
              <div className="flex justify-center items-center w-[70px] h-[70px] bg-[rgba(59,130,246,0.1)] rounded-full mb-5 transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]">
                <div className="text-[30px] text-[#60a5fa]">{tech.icon}</div>
              </div>
            )}

            <h3 className="text-[1.728rem] font-semibold text-[#60a5fa] mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
              {tech.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technology;
