
import styles from "./FeesPage.module.css";

const FeesPage = () => {
  
  const courses = [
    { name: "Data Analytics", duration: "6 Months", fees: "₹50,000" },
    { name: "Digital Marketing", duration: "3 Months", fees: "₹25,000" },
    { name: "Web Development", duration: "6 Months", fees: "₹40,000" },
    { name: "Cyber Security", duration: "4 Months", fees: "₹60,000" },
    { name: "App Development", duration: "5 Months", fees: "₹45,000" },
    { name: "Design", duration: "3 Months", fees: "₹20,000" },
  ];

  return (
    <div className={styles.wrapp}>
      <h2 className={styles.titlee}>Course Fees</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.duration}</td>
              <td>{course.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeesPage;
