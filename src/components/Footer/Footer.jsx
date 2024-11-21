
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactUs}>
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:admissions@google.com">admissions@Technobridge.com</a></p>
        <p>Phone: <a href="tel:+91804600800">0804008400</a></p>
      </div>

      <div className={styles.address}>
        <h3>Official Address</h3>
        <p>4th floor, 133/2, Janardhan Towers, Residency Road, Bengaluru, Karnataka, 560025</p>
        <h3>Communication Address</h3>
        <p>Follow Us</p>
      </div>

      <div className={styles.company}>
        <h3>Company</h3>
        <ul>
          <li><a href="#">Success Stories</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Hire From Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Certification in Full Stack Data Science and AI</a></li>
          <li><a href="#">Certification in Full Stack Web Development</a></li>
          <li><a href="#">MS in Computer Science: Artificial Intelligence and Machine Learning</a></li>
        </ul>
      </div>

      <div className={styles.resources}>
        <h3>Resources</h3>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Placement Statistics</a></li>
          <li><a href="#">Online Compilers</a></li>
        </ul>
      </div>

      <div className={styles.join}>
        <h3>Join technobridge</h3>
        <ul>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Become an Affiliate</a></li>
          <li><a href="#">Become A Coach</a></li>
          <li><a href="#">Coach Login</a></li>
          <li><a href="#">Refer and Earn</a></li>
        </ul>
      </div>

      <div className={styles.social}>
        <h3>Follow Us</h3>
        <p>Links to social media or follow buttons can go here</p>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 technobridge. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;