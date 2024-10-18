import styles from './InputField.module.scss';

export const InputField = ({ id, type, label }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type={type}
        id={id}
        placeholder=" "
      />
      <label className={styles.label} htmlFor={id}>{label}</label>
    </div>
  );
};