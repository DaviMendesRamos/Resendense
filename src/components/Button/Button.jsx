import styles from "./button.module.css";

export default function Button({ texto }) {
  return <button className={styles.button}>{texto}</button>;
}
