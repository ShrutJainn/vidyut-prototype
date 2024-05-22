import styles from "./Modal.module.css";

function Modal({ setIsOpenModal }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={() => setIsOpenModal(false)}
        >
          X
        </button>
        <div className={styles.details}>
          <h1>Details</h1>
          <p>Name: light_name</p>
          <p>Address: xyz</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
