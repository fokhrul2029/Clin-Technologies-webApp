function LogoShape({ size = "50px" }) {
  const containerStyle = {
    width: size,
    height: size,
  };

  return (
    <div className="mx-auto mb-[15px] relative  " style={containerStyle}>
      <svg
        className="absolute top-0 left-0 w-full h-full animate-pulse filter drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
        viewBox="0 0 100 100"
      >
        <path
          d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40 C80 50, 70 60, 60 65 C70 70, 80 80, 80 90 C80 105, 60 115, 50 115 C40 115, 20 105, 20 90 C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
        />
      </svg>
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        style={{
          animation: "glow 2s ease-in-out infinite alternate",
        }}
      >
        <path
          d="M35 40 H65 M50 40 V80 M35 60 H65 M25 50 H75"
          stroke="#93c5fd"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="35" cy="40" r="2" fill="#93c5fd" />
        <circle cx="65" cy="40" r="2" fill="#93c5fd" />
        <circle cx="50" cy="60" r="2" fill="#93c5fd" />
        <circle cx="35" cy="80" r="2" fill="#93c5fd" />
        <circle cx="65" cy="80" r="2" fill="#93c5fd" />
      </svg>

      <style jsx>{`
        @keyframes glow {
          0% {
            opacity: 0.7;
            filter: drop-shadow(0 0 5px rgba(147, 197, 253, 0.3));
          }
          100% {
            opacity: 1;
            filter: drop-shadow(0 0 15px rgba(147, 197, 253, 0.8));
          }
        }
      `}</style>
    </div>
  );
}

export default LogoShape;
