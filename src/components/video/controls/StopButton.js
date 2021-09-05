import styles from "./styles.css";
import clsx from "clsx";
import {BiStopCircle} from "react-icons/all";

const StopButton = (props) => (
    <button className={styles.btn} {...props}>
        <BiStopCircle className={clsx(styles.icon, styles.iconStop)}/>
    </button>
)

export default StopButton