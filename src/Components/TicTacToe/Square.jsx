import styles from "/src/styles.module.css";
function Square({ val, chooseSquare }) {
  return (
    <>
      <div className={styles.square} onClick={chooseSquare}>
        {val}
      </div>
    </>
  );
}
export default Square;
