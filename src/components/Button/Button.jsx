import styles from "./button.module.css";

export default function Button({ texto, link, className }) {
  return (
    <button className={`${styles.button} ${className || ""}`} onClick={link}>
      {texto}
    </button>
  );
}
