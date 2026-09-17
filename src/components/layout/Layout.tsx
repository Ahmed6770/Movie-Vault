import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="pb-20 md:pb-0">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
