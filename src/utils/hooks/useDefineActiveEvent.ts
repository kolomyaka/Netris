import { useEffect, useState } from "react";
import ReactPlayer from "react-player/types/lib";
import { useVideoIsPlaying } from "@/store/slices/videoSlice";

export const useDefineActiveEvent = (videoRef: ReactPlayer, eventTimestamp: number, finishEventTimestamp: number) => {
    const [isActive, setIsActive] = useState(false);
    const isPlaying = useVideoIsPlaying();

    useEffect(() => {
        const interval = setInterval(() => {

            if (!videoRef || !isPlaying) {
                setIsActive(false);
                return;
            }

            const currentTime = videoRef.getCurrentTime();
            if (currentTime < eventTimestamp / 1000) {
                setIsActive(false);
                return;
            }

            if (currentTime > finishEventTimestamp / 1000) {
                setIsActive(false);
                return;
            }

            setIsActive(true);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [eventTimestamp, finishEventTimestamp, isPlaying, videoRef]);

    return [isActive];
};