import styles from "./styles.css";
import clsx from "clsx";
import {CgRecord} from "react-icons/all";

const RecordButton = (props) => (
    <button className={styles.btn} {...props}>
        <CgRecord className={clsx(styles.icon, styles.iconRecord)}/>
    </button>
)

export default RecordButton