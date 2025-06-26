import { Link } from "react-router";

function Footer() {
  return (
    <footer class="bg-[#1e293b] py-[30px] px-10 border-t border-[rgba(96,165,250,0.2)]">
      <div class="pt-8 flex flex-col md:flex-row justify-between items-center">
        <div class="flex gap-[30px] flex-wrap mb-4 md:mb-0">
          <Link
            class="text-[#94a3b8] no-underline text-[0.833rem] font-medium tracking-normal transition-colors duration-300 relative hover:text-white"
            to="/login"
            data-discover="true"
          >
            Terms of Use
            <span class="absolute w-0 h-[1px] bg-[#60a5fa] bottom-[-4px] left-0 transition-all duration-300 hover:w-full"></span>
          </Link>
          <Link
            class="text-[#94a3b8] no-underline text-[0.833rem] font-medium tracking-normal transition-colors duration-300 relative hover:text-white"
            to="/login"
            data-discover="true"
          >
            Privacy Policy
            <span class="absolute w-0 h-[1px] bg-[#60a5fa] bottom-[-4px] left-0 transition-all duration-300 hover:w-full"></span>
          </Link>
        </div>
        <div class="text-[#64748b] text-[0.833rem]">
          <p>© 2025 Clin Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
