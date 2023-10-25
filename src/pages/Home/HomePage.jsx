import styles from "./home.module.css";
import logo from "../../images/logo.png";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Brand Logo" />
        </div>
        <h1 className={styles.brand}>Pocket Notes</h1>
        <p>
          Send and receive messages without keeping your phone online. <br />{" "}
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
    </div>
  );
};

export default HomePage;
