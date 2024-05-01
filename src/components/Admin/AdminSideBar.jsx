const menu = [
  "Quick Menu",
  "Manage Users",
  "View Students",
  "View Staffs",
  "Library Books",
  "Faculties",
  "Leave the room",
  "Logout",
];

const AdminSideBar = () => {
  return (
    <section className="mt-5 pt-20 ">
      <ul className="flex flex-row sm:flex-col flex-wrap justify-center">
        {menu.map((item) => (
          <li className="py-2 px-6 border-b-2 w-max cursor-pointer">{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default AdminSideBar;
