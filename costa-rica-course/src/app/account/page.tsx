import styles from './account.module.scss';
import { Hero } from '@/components/Hero';

const AccountPage = () => {
  return (
    <div className={styles.accountContainer}>
      <Hero
        titleOne="MY"
        titleTwo="ACCOUNT"
        description=""
        backgroundImage="/images/AccountBackground.png"
        backgroundPosition="bottom center"
      />
    </div>
  );
};

export default AccountPage;
