import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="pb-20 md:pb-0">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
