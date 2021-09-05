import clsx from "clsx";
import styles from './styles.css'

const statusesMap = {
    idle: 'Idle',
    recording: 'Recording',
    stopped: 'Finished recording',
    acquiring_media: 'Acquiring video data',
    paused: 'Paused',
}

const Status = ({status}) => (
    <span className={clsx(styles.badge, styles[status])}>{statusesMap[status]}</span>
)

export default Status