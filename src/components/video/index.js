import styles from './styles.css'
import Controls from "./controls";
import {useEffect, useRef} from "preact/hooks";
import Status from "./status";
import {useRecorder} from "../../hooks/useRecorder";
import Button from "../button";
import {useState} from "preact/compat";
import Spinner from "../spinner";

const Video = () => {
    const [showStartVideoBtn, setShowStartVideoBtn] = useState(true)
    const videoRef = useRef()
    const {
        status,
        startRecording,
        stopRecording,
        mediaBlobUrl,
        pauseRecording,
        resumeRecording,
        getMediaStream,
        previewStream
    } = useRecorder({video: true});

    const isLoading = status === 'acquiring_media'

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

    const turnOnCamera = async () => {
        setShowStartVideoBtn(false)
        await getMediaStream();
    }

    const handleRecordingStart = () => {
        startRecording()
        if (showStartVideoBtn) {
            setShowStartVideoBtn(false)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.videoWrapper}>
                {isLoading && <Spinner/>}
                {showStartVideoBtn && <div className={styles.useCameraBtnWrapper}>
                    <Button onClick={turnOnCamera}>
                        Use my camera
                    </Button>
                </div>}
                <div className={styles.statusWrapper}>
                    <Status status={status}/>
                </div>
                {status !== 'stopped' && <video className={styles.video} {...previewVideoProps} />}
                {status === 'stopped' && <video className={styles.video} {...replayVideoProps} />}
            </div>
            <Controls
                status={status}
                videoUrl={mediaBlobUrl}
                onRecordClick={handleRecordingStart}
                onStopClick={stopRecording}
                onPauseClick={pauseRecording}
                onResumeClick={resumeRecording}
            />
        </div>
    );
}

export default Video