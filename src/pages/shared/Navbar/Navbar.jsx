import LogoShape from "../../../components/LogoShape";

function Navbar() {
  const menuItems = [
    { title: "About", tag: "#about" },
    { title: "Our Solutions", tag: "#features" },
    { title: "In Action", tag: "#" },
    { title: "Technology", tag: "#technology" },
    { title: "Benefits", tag: "#benefits" },
    { title: "Case Use", tag: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-slate-900/95 backdrop-blur-[12px] z-[100] flex items-center px-10 shadow-md shadow-black/20 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <div className="flex justify-between items-center gap-4 w-full">
        <div className="flex items-center gap-2 text-[1.44rem] font-bold text-white tracking-[-0.01em]">
          <LogoShape size={"50px"} />
          Clin
        </div>
        <ul className="flex ml-auto mr-[40px] gap-[35px]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-slate-400 text-base font-medium  transition-all duration-300 ease-in-out relative cursor-pointer bg-transparent hover:text-white"
            >
              <a href={item.tag}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
