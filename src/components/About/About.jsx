import styles from "./About.module.css";

const CourseInfo = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.video}>
        <iframe
          width="100%"
          height="350"
          src="https://www.youtube.com/embed/uIUvpJdYgSA?si=uMFKkEWAKqGlEqDJ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div>
        <h2 className={styles.head}>Why Choose This Course?</h2>
        <ul className={styles.list}>
          <li>
            <strong>In-Demand Skills:</strong> Data analytics is one of the
            fastest-growing fields with limitless job opportunities.
          </li>
          <li>
            <strong>Expert Trainers:</strong> Learn from industry professionals
            who bring practical experience to the classroom.
          </li>
          <li>
            <strong>Flexible Learning:</strong> Learn at your own pace with 24/7
            access to course materials and support.
          </li>
          <li>
            <strong>Career Opportunities:</strong> Gain skills that can lead to
            roles like Data Analyst, Business Analyst, and Data Scientist.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CourseInfo;
