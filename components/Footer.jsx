import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID IT.THE JAVA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Moi Avenue #304.
            <br /> Nairobi, 01000
            <br /> (+254) 71867-1010
          </p>
          <p className={styles.text}>
            2356 K. Ronald Ngala #235.
            <br /> Nairobi, 00100
            <br /> (254) 7867-1011
          </p>
          <p className={styles.text}>
            1614 Waiyaki St #104.
            <br /> Nairobi, 00100
            <br /> (254) 7867-1012
          </p>
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 0700hrs – 2200hrs
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 1100hrs – 2200hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
