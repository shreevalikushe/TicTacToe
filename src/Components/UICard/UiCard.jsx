import CardButton from "./CardButton";
import CardDate from "./CardDate";
import CardHeader from "./CardHeader";
import CardPara from "./CardPara";
import styles from "/src/styles.module.css";

function UiCard() {
  return (
    <>
      <div className={styles.orangeDiv}>
        <CardDate date={"28/10/2020"} />
        <img
          className={styles.logo}
          alt="logo"
          src="https://www.logotaglines.com/wp-content/uploads/2016/08/td-amazon-smile-logo-01-large.jpg"
        />
        <div>
          <CardButton />
        </div>
        <CardHeader title={"Amazon Gift Pay"} />
        <CardPara content={"Desktop-Mobile"} />
        <button className={styles.arrow}>&#8594;</button>
      </div>
      <div className={styles.greyDiv}>
        <CardDate date={"17 Sep 2020"} />
        <img
          className={styles.logo}
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
        />
        <div>
          <CardButton />
        </div>
        <CardHeader title={"Apple Gift Pay"} />
        <CardPara content={"MacOS-Mobile"} />
        <button className={styles.arrow}>&#8594;</button>
      </div>
    </>
  );
}
export default UiCard;
