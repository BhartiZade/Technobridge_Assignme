

import styles from './Advance.module.css';
import dataa from '../../assets/dataa.png'; 
import software from '../../assets/software.jpg'; 

const CurriculumPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>Course Curriculum & Learning Track</h1>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Course Overview</h2>
        <p className={styles.description}>
          This course will guide you through the essentials of Data Analytics. Starting from the basics of data analysis,
           gradually move on to complex topics like machine learning and data visualization, using popular tools like Python, R, and SQL.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Course Modules</h2>
        
        <div className={styles.moduleSection}>
          <ul className={styles.moduleList}>
            <li><strong>Module 1:</strong> Introduction to Data Analytics</li>
            <li><strong>Module 2:</strong> Data Collection and Preprocessing</li>
            <li><strong>Module 3:</strong> Statistical Analysis and Hypothesis Testing</li>
            <li><strong>Module 4:</strong> Data Visualization with Python and Tableau</li>
            <li><strong>Module 5:</strong> Machine Learning Fundamentals</li>
            <li><strong>Module 6:</strong> Advanced Topics in Data Analytics</li>
            <li><strong>Module 7:</strong> Capstone Project</li>
          </ul>
          
          <img src={dataa} alt="data analytysc" className={styles.moduleImage} />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Learning Track</h2>
        <p className={styles.description}>
          The learning track is designed to take you from a beginner to an expert in Data Analytics. Here’s how the learning
          process progresses:
        </p>
        <div className={styles.wrapall}>
        <img src={software} alt="data analytysc" className={styles.software} />
        <ul className={styles.learningTrackList}>
          <li>Beginner: Understand data types, learn basic statistics, and start exploring data visualization tools.</li>
          <li>Intermediate: Get hands-on with data preprocessing, statistical modeling, and advanced visualizations.</li>
          <li>Advanced: Work with machine learning models, perform predictive analytics, and develop real-world projects.</li>
          <li>Expert: Solve complex problems, work on a Capstone project, and gain the skills to excel in Data Analytics roles.</li>
        </ul>
        </div>
        
      </section>
    </div>
  );
}

export default CurriculumPage;
