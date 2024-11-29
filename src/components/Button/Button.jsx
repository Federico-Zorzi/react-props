import styles from "./Button.module.css";

export default function Button() {
  return (
    <>
      <button type="button" className={styles.btn + " btn-warning rounded-1"}>
        LEGGI DI PIÙ
      </button>
    </>
  );
}
