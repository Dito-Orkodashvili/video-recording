import styles from './styles.css'
import Controls from "./controls";
import {useEffect, useRef} from "preact/hooks";
import Status from "./status";
import {useRecorder} from "../../hooks/useRecorder";

const Video = () => {
    const videoRef = useRef()
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
        pauseRecording,
        resumeRecording,
        previewStream
    } = useRecorder({video: true});

    useEffect(() => {
        if (videoRef.current && previewStream) {
            videoRef.current.srcObject = previewStream;
        }
    }, [previewStream])

    const previewVideoProps = {
        ref: videoRef,
        autoPlay: true
    }

    const replayVideoProps = {
        src: mediaBlobUrl,
        controls: true
    }

    console.log('statusOuter', status)
    return (
        <div className={styles.wrapper}>
            <div className={styles.videoWrapper}>
                <div className={styles.statusWrapper}>
                    <Status status={status}/>
                </div>
                {status !== 'stopped' && <video className={styles.video} {...previewVideoProps} />}
                {status === 'stopped' && <video className={styles.video} {...replayVideoProps} />}

            </div>
            <Controls
                status={status}
                videoUrl={mediaBlobUrl}
                onRecordClick={startRecording}
                onStopClick={stopRecording}
                onPauseClick={pauseRecording}
                onResumeClick={resumeRecording}
            />
        </div>
    );
}

export default Video