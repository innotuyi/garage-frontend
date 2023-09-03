import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  MdDashboard,
  MdLibraryAdd,
  MdToc,
  MdOutlineMessage,
} from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { AiFillUnlock } from "react-icons/ai";
import { BiExit } from "react-icons/bi";

const Sidebar = () => {
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem("token");
    history.push("/login");
  }
  return (
    <>
      <div class="col-md-2 sidebar-bg sidebar ">
        <ul>
          <li>
            <MdDashboard style={{ color: "#fff", fontSize: "1.4rem" }} />{" "}
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <MdLibraryAdd style={{ color: "#fff", fontSize: "1.4rem" }} />{" "}
            <Link to="/addTeacher">Add Teacher</Link>
          </li>
          <li>
            <MdLibraryAdd style={{ color: "#fff", fontSize: "1.4rem" }} />{" "}
            <Link to="/addCourse">Add course</Link>
          </li>
          <li>
            <MdToc style={{ color: "#fff", fontSize: "1.4rem" }} />{" "}
            <Link to="/allCourses">All courses</Link>
          </li>

          <li>
            <MdToc style={{ color: "#fff", fontSize: "1.4rem" }} />{" "}
            <Link to="/mycourses">My Courses</Link>
          </li>

          <li>
            <MdToc style={{ color: "#fff", fontSize: "1.4rem" }} />{" "}
            <Link to="/myBooks">Books</Link>
          </li>

          <li>
            <MdToc style={{ color: "#fff", fontSize: "1.4rem" }} />{" "}
            <Link to="/enollments">Enrollments</Link>
          </li>

          <li>
            <MdToc style={{ color: "#fff", fontSize: "1.4rem" }} />{" "}
            <Link to="/students">Students</Link>
          </li>

          <li>
            <MdOutlineMessage style={{ color: "#fff", fontSize: "1.4rem" }} />{" "}
            <Link to="/messages">Payments</Link>
          </li>
          <li>
            <BiExit
              style={{ color: "#fff", fontSize: "1.4rem" }}
              class="pr-1"
            />
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
