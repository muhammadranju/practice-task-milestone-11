import { Outlet } from "react-router-dom";
import NavbarHeader from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const Root = () => {
  return (
    <>
      <NavbarHeader />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
