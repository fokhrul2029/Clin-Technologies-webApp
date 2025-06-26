import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

function Root() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
