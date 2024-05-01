import department from "../../images/home-icon.svg";
import faculty from "../../images/building-icon.svg";
import book from "../../images/books-icon.svg";
import viewBook from "../../images/find-book-icon.svg";
import requestBook from "../../images/read-book-icon.svg";
import student from "../../images/student-icon.svg";
import staff from "../../images/business-team-icon.svg";
import logout from "../../images/exit-icon.svg";

const category = [
  { text: "View Student", img: student },
  { text: "View Books", img: viewBook },
  { text: "View Book Request", img: book },
  { text: "Create/View Department", img: department },
];
const category1 = [
  { text: "View Staffs", img: staff },
  { text: "Create New Book", img: requestBook },
  { text: "Create/View Faculties", img: faculty },
  { text: "Logout", img: logout },
];

const AdminBody = () => {
  return (
    <div className="w-full h-[auto] flex justify-center items-center mt-10 sm:mt-0">
      <div className="flex justify-center items-center gap-8 flex-wrap lg:border-2 lg:p-16 w-fit rounded-xl">
        <ul className="flex flex-col items-end text-blue-400 max-w-[500px] gap-10 h-fit ">
          {category.map((item) => (
            <li className="cursor-pointer flex gap-3 items-center text-2xl font-semibold">
              {item.text}{" "}
              <img src={item.img} alt={item.text} className="w-16" />
            </li>
          ))}
        </ul>
        <ul className="flex flex-col items-end text-blue-400 max-w-[500px] gap-10 h-fit">
          {category1.map((item) => (
            <li className="cursor-pointer flex gap-3 items-center text-2xl font-semibold ">
              {item.text}{" "}
              <img src={item.img} alt={item.text} className="w-16" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminBody;
