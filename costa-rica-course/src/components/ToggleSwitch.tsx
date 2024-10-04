import React, { useState } from "react";
import styles from "./ToggleSwitch.module.scss";

interface ToggleSwitchProps {
  label?: string;
  onToggle: (checked: boolean) => void;
  initialState?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  onToggle,
  initialState = false,
}) => {
  const [checked, setChecked] = useState(initialState);

  const handleToggle = () => {
    setChecked(!checked);
    onToggle(!checked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.toggle_switch}>
        <input
          type="checkbox"
          className={styles.checkbox}
          name={label}
          id={label}
          checked={checked}
          onChange={handleToggle}
        />
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};

export default ToggleSwitch;
