import styles from './styles.css'
import clsx from "clsx";
import {BiPauseCircle} from "react-icons/all";

const PauseButton = (props) => (
    <button className={styles.btn} {...props}>
        <BiPauseCircle className={clsx(styles.icon, styles.iconPause)}/>
    </button>
)

export default PauseButton