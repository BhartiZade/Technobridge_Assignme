import styles from "./CoursePage.module.css";
import pngegg from "../../assets/pngegg.png";

const MyComponent = () => {
  const handleBookDemo = () => {
    alert("Demo Booking Successful!");
  };

  const handleDownloadCurriculum = () => {
    alert("Curriculum Downloaded Successfully!");
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={pngegg} alt="Egg Image" className={styles.image} />
      </div>

      <div className={styles.right}>
        <div className={styles.text}>
          <h1>Certification in FullStack Data Science & AI</h1>
          <h2>
            Master data analysis, visualization, and machine learning models
            using Python, R, TensorFlow, and more. Perfect for those aiming to
            work with large datasets, AI, and data-driven decision-making.
          </h2>
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.primaryButton}`}
            onClick={handleBookDemo}
          >
            Book Demo Now
          </button>
          <button
            className={`${styles.button} ${styles.secondaryButton}`}
            onClick={handleDownloadCurriculum}
          >
            Download Curriculum
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
