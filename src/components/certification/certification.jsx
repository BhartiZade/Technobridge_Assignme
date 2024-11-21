import { useState } from "react";
import styles from "./certification.module.css";

const StickyBar = () => {
  const [selectedInfo, setSelectedInfo] = useState("");

  const info = {
    certification:
      "Our certification program helps you enhance your skills and boosts your career.",
    training:
      "We offer specialized training in various technologies to help you grow professionally.",
    placement:
      "We provide placement support, connecting you with top companies for job opportunities.",
  };

  const handleClick = (infoType) => {
    setSelectedInfo(info[infoType]);
  };

  return (
    <div className={styles.contain}>
      <div className={styles.leftSection}>
        <h2>Details</h2>
        <p>
          {selectedInfo ||
            "Click an option from the sticky bar to see details."}
        </p>
      </div>

      <div className={styles.rightSection}>
        <h3>About Cources</h3>
        <ul className={styles.buttonList}>
          <li>
            <button onClick={() => handleClick("certification")}>
              Certification
            </button>
          </li>
          <li>
            <button onClick={() => handleClick("training")}>Training</button>
          </li>
          <li>
            <button onClick={() => handleClick("placement")}>
              Placement Support
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StickyBar;
