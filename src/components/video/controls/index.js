import RecordButton from "./RecordButton";
import StopButton from "./StopButton";
import PauseButton from "./PauseButton";
import styles from './styles.css'
import ResumeButton from "./ResumeButton";
import clsx from "clsx";
import {FiDownload} from "react-icons/all";

const Controls = ({videoUrl, status, onRecordClick, onStopClick, onPauseClick, onResumeClick}) => (
    <div className={styles.controlsWrapper}>
        {status === 'recording' && <StopButton onClick={onStopClick}/>}
        {status === 'recording' && <PauseButton onClick={onPauseClick}/>}
        {(status === 'idle' || status === 'stopped') && <RecordButton onClick={onRecordClick}/>}
        {status === 'paused' && <StopButton onClick={onStopClick}/>}
        {status === 'paused' && <ResumeButton onClick={onResumeClick}/>}
        {videoUrl && <a href={videoUrl} className={styles.downloadLink}>
            <FiDownload className={clsx(styles.icon, styles.iconDownload)}/>
        </a>}
    </div>
)

export default Controls