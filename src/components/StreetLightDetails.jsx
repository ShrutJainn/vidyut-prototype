import { useState } from "react";
import styles from "./StreetLightDetails.module.css";
import Modal from "./Modal";

function StreetLightDetails({ name, imgSrc }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imgSrc} />
      </div>
      <div className={styles.details}>
        <div className={styles.upper}>
          <h1 style={{ color: "black" }}>{name}</h1>
        </div>
        <div className={styles.lower}>
          <div
            style={{
              display: "flex",
              gap: "3vw",
            }}
          >
            <button className={styles.issueButton}>Report an issue</button>
            <button
              className={styles.issueButton}
              onClick={() => setIsOpenModal(!isOpenModal)}
            >
              View Details
            </button>
            {isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}
          </div>
          <button className={styles.premiumButton}>Buy Premium</button>
        </div>
      </div>
    </div>
  );
}

export default StreetLightDetails;
