import { useCallback, useContext, useEffect, useRef, useState } from "react";

import ReactPlayer from "react-player/types/lib";

import { PlayerContext, PlayerContextValue } from "@/context/PlayerContext";

export const useDefineActiveEvent = (videoRef: ReactPlayer | undefined, eventTimestamp: number, finishEventTimestamp: number) => {
    const [isActive, setIsActive] = useState(false);
    const playerContextValue = useContext(PlayerContext) as PlayerContextValue;
    const isPlaying = playerContextValue.videoIsPlaying;
    const interval = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

    const defineIsActiveEvent = useCallback(() => {
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
    }, [eventTimestamp, finishEventTimestamp, isPlaying, videoRef]);

    useEffect(() => {
        if (isPlaying) {
            interval.current = setInterval(defineIsActiveEvent, 100);
        } else {
            clearInterval(interval.current);
        }

        return () => {
            clearInterval(interval.current);
        };
    }, [defineIsActiveEvent, eventTimestamp, finishEventTimestamp, isPlaying, videoRef]);

    return isActive;
};