import { classNames } from "@/utils/lib";
import cls from "./Video.module.scss";
import { VIDEO_URL } from "@/utils/consts";
import { useCallback, useContext } from "react";
import ReactPlayer from "react-player";
import { PlayerContext } from "@/context/PlayerContext";
import { useVideoIsPlaying, videoActions } from "@/store/slices/videoSlice";
import { useAppDispatch } from "@/store/hooks";

interface VideoProps {
    className?: string
}

export const Video = ({ className }: VideoProps) => {
    const dispatch = useAppDispatch();
    const playerRef = useContext(PlayerContext);
    const isPlaying = useVideoIsPlaying();
    
    const playingStatusUpdateHandler = useCallback((isPlaying: boolean) => {
        dispatch(videoActions.setIsPlaying(isPlaying));
    }, [dispatch]);

    return (
        <section className={classNames(cls.video, {}, [className])}>
            <ReactPlayer
                playing={isPlaying}
                onPlay={() => playingStatusUpdateHandler(true)}
                onPause={() => playingStatusUpdateHandler(true)}
                ref={(audio) => playerRef.current = audio}
                url={VIDEO_URL}
                height={350}
                width={"100%"}
                controls
            />
        </section>
    );
};


