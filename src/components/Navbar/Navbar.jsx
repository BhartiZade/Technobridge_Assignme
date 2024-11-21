import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import images from "../../assets/images.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const courses = [
    "Data Analytics",
    "Digital Marketing",
    "Web Development",
    "Cyber Security",
    "App Development",
    "Design",
  ];

  const handleExploreClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleCourseClick = (course) => {
    console.log(`Selected course: ${course}`);
  };
  const handleAboutClick = () => {
    navigate("/About");
  };

  const handleLoginClick = () => {
    navigate("/SignUp");
  };

  return (
    <nav className={styles.navbar}>
      <img src={images} alt="logo Image" className={styles.logo} />

      <div className={styles.navButtons}>
        <button className={styles.button} onClick={handleExploreClick}>
          Explore Courses
        </button>
        <button className={styles.button} onClick={handleAboutClick}>
          About Us
        </button>
        <button className={styles.loginButton} onClick={handleLoginClick}>
          Login
        </button>
      </div>

      {showDropdown && (
        <div className={styles.dropdown}>
          <ul className={styles.dropdownList}>
            {courses.map((course, index) => (
              <li
                key={index}
                className={styles.dropdownItem}
                onClick={() => handleCourseClick(course)}
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
