import styles from "./HeaderLoginButton.module.scss";
import Link from "next/link";
import Image from "next/image";

const HeaderLoginButton = () => {
  return (
    <div className={styles.loginButton}>
      <Link href="/login">
        <button>
          <Image
            src="/images/Frame 1000005402.png"
            alt="Login Button"
            width={20}
            height={20}
            priority
          />
          Log In
        </button>
      </Link>
    </div>
  );
};

export default HeaderLoginButton;
