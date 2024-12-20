import { useEffect, useRef } from "react";

type CustomVideoPlayerProps = Readonly<{
    url: string;
    isPlaying: boolean;
}>;

export default function CustomVideoPlayer(props: CustomVideoPlayerProps) {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (props.isPlaying) {
            videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    }, [props.isPlaying]);

    return (
        <div>
            <video
                controls
                ref={videoRef}
                src={props.url}
                width={600}>
            </video>
        </div>
    );
}