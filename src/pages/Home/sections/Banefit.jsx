import { Link } from "react-router";
import Pera from "../components/Pera";
import Title from "../components/Title";

function Benefits() {
  const benefitsList = [
    "Reduction in documentation time by 40-60%",
    "Improved work-life balance with less after-hours charting",
    "Enhanced patient interaction due to less focus on note-taking",
    "More comprehensive and consistent clinical documentation",
    "Reduced risk of documentation errors and omissions",
  ];

  const ctaButtons = [
    {
      text: "Login",
      to: "/login",
      variant: "outline",
      className:
        "bg-transparent border-2 border-[#3b82f6] text-white px-8 py-4 rounded-full hover:bg-[rgba(59,130,246,0.1)] transition-colors shadow-[0_5px_15px_rgba(37,99,235,0.2)]",
    },
    {
      text: "Signup",
      to: "/signUp",
      variant: "primary",
      className:
        "bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-8 py-4 rounded-full hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)] transition-all shadow-[0_5px_15px_rgba(37,99,235,0.4)] relative overflow-hidden z-1",
    },
  ];

  return (
    <section
      id="benefits"
      className="py-12 md:py-24 px-10 min-h-[400px] bg-[#1e293b]"
    >
      <Title>Benefits</Title>
      <div className="max-w-[1000px] mx-auto">
        <Pera>
          Healthcare providers using Clin Technologies solutions report:
        </Pera>
        <ul className="mb-8 pl-8 list-disc text-gray-300">
          {benefitsList.map((benefit, index) => (
            <li key={index} className="mb-2 leading-relaxed">
              {benefit}
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-5 mt-[30px] md:flex-row flex-col">
          {ctaButtons.map((button, index) => (
            <Link
              key={index}
              to={button.to}
              className={`${button.className} inline-block text-center no-underline font-medium`}
              rel="noopener noreferrer"
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
