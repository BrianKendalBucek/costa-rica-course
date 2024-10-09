import styles from "./UserModBlock.module.scss";
import Image from "next/image";

const UserModBlock = () => {
  return (
    <div className={styles.userModBlockContainer}>
      <Image
        src="/images/Student 1.png"
        alt="Login Button"
        width={95}
        height={95}
        priority
      />
      <h5>Jane Doe</h5>
      <div className={styles.editLogoutButtons}>
        <button className={styles.editButton}>
          <Image
            src="/images/square.png"
            alt="Login Button"
            width={20}
            height={20}
            priority
          />
          Edit
        </button>
        <button className={styles.logoutButton}>
          <Image
            src="/images/quit.png"
            alt="Login Button"
            width={20}
            height={20}
            priority
          />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserModBlock;
