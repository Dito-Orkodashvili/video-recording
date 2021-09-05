import styles from './styles.css'
import clsx from "clsx";
import {BiPlayCircle} from "react-icons/all";

const ResumeButton = (props) => (
    <button className={styles.btn} {...props}>
        <BiPlayCircle className={clsx(styles.icon, styles.iconResume)}/>
    </button>
)

export default ResumeButton