import AdminBody from "../../components/Admin/AdminBody";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import Navbar from "../../components/Navbar/Navbar";

const Admin = () => {
  return (
    <>
      <Navbar />
      <section className="flex w-full h-[80vh] sm:flex-row flex-col max-w-screen-lg mx-auto justify-center items-center">
        <AdminSideBar />
        <AdminBody />
      </section>
    </>
  );
};

export default Admin;
