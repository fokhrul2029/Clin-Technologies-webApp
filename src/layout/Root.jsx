import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

function Root() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Root;
