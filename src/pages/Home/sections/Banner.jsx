import { useEffect, useRef } from "react";
import LogoShape from "../../../components/LogoShape";

const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const particles = [];
    const particleCount = 100;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.speed = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 10) this.reset();
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#60a5fa";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative top-[60px] w-full h-[calc(100vh-60px)] bg-[#0a1022] z-10 overflow-hidden shadow-2xl">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,16,34,0)_0%,rgba(10,16,34,0.8)_80%,rgba(10,16,34,1)_100%)] z-2" />

      <div className="absolute inset-0 pointer-events-none z-3">
        <div className="absolute top-[-50px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)] opacity-50 animate-float-slow" />
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)] opacity-50 animate-float-medium" />
        <div className="absolute top-[20%] right-[15%] w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)] opacity-50 animate-float-fast" />
      </div>

      <div className="absolute w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,rgba(59,130,246,0)_70%)] pointer-events-none z-2 opacity-0 transition-opacity duration-300 blur-xl" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-11 w-[90%] max-w-[1200px]">
        <div className="mb-[30px] opacity-0 animate-fade-in-up-delay-1">
          <LogoShape size={"120px"} />
        </div>

        <h1 className="text-[2.986rem] md:text-[2.986rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb] m-0 tracking-tight opacity-0 animate-fade-in-up-delay-2">
          Clin Technologies
        </h1>

        <p className="text-[1.728rem] md:text-[1.728rem] font-normal text-[#94a3b8] mt-[10px] mb-0 tracking-normal opacity-0 animate-fade-in-up-delay-3">
          Revolutionizing clinical documentation through{" "}
          <span className="text-[#f59e0b] font-semibold">HIPAA COMPLIANT</span>{" "}
          advanced artificial intelligence, giving healthcare providers more
          time for what truly matters — patient care. try it for{" "}
          <span className="text-[#f59e0b] font-semibold">FREE</span> today
        </p>

        <p className="text-[1.44rem] text-[#e2e8f0] max-w-[700px] mx-auto mt-[30px] leading-normal opacity-0 animate-fade-in-up-delay-4">
          Our sophisticated AI platform intelligently processes clinical
          conversations, creating accurate documentation that integrates with
          your existing EMR system.
        </p>

        <div className="mt-[40px] opacity-0 animate-fade-in-up-delay-5 flex justify-center gap-5 md:flex-row flex-col">
          <a
            className="bg-transparent border-2 border-[#3b82f6] text-white px-8 py-4 rounded-full hover:bg-[rgba(59,130,246,0.1)] transition-colors shadow-[0_5px_15px_rgba(37,99,235,0.2)] inline-block text-center"
            href="/login"
          >
            Login
          </a>
          <a
            className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-8 py-4 rounded-full hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)] transition-all shadow-[0_5px_15px_rgba(37,99,235,0.4)] relative overflow-hidden z-1 inline-block text-center"
            href="/signUp"
          >
            Signup
          </a>
        </div>
      </div>

      <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-late">
        <div className="w-[24px] h-[38px] border-2 border-[rgba(148,163,184,0.5)] rounded-[12px] relative">
          <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-[6px] h-[6px] bg-[#60a5fa] rounded-full animate-scroll-down" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
          }
          75% {
            transform: translateY(-30px) translateX(15px);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scrollDown {
          0% {
            top: 6px;
            opacity: 1;
          }
          100% {
            top: 24px;
            opacity: 0;
          }
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.8;
            filter: drop-shadow(0 0 5px rgba(147, 197, 253, 0.5));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 10px rgba(147, 197, 253, 0.8));
          }
        }
        .animate-float-slow {
          animation: float 25s infinite alternate;
        }
        .animate-float-medium {
          animation: float 20s 2s infinite alternate;
        }
        .animate-float-fast {
          animation: float 15s 1s infinite alternate;
        }
        .animate-fade-in-up-delay-1 {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
        }
        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.5s;
        }
        .animate-fade-in-up-delay-3 {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.8s;
        }
        .animate-fade-in-up-delay-4 {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 1.1s;
        }
        .animate-fade-in-up-delay-5 {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 1.4s;
        }
        .animate-fade-in-late {
          animation: fadeIn 1s forwards 2s;
        }
        .animate-scroll-down {
          animation: scrollDown 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
