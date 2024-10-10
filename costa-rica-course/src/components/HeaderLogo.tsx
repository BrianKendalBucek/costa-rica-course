import styles from "./HeaderLogo.module.scss";
import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image
          src="/images/Frame 28991.png"
          alt="Logo"
          width={260}
          height={65}
          priority
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
