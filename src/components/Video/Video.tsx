import { useCallback, useContext } from "react";

import ReactPlayer from "react-player";

import { ActiveEvent } from "@/components/Video/ActiveEvent/ActiveEvent";
import { PlayerContext, PlayerContextValue } from "@/context/PlayerContext";
import { useActiveEvents } from "@/store/slices/eventsSlice";
import { VIDEO_URL } from "@/utils/consts";
import { classNames } from "@/utils/lib";

import cls from "./Video.module.scss";

interface VideoProps {
    className?: string
}

export const Video = ({ className }: VideoProps) => {
    const playerContext = useContext(PlayerContext) as PlayerContextValue;
    const playerRef = playerContext.ref;
    const videoIsPlaying = playerContext.videoIsPlaying;

    const activeEvents = useActiveEvents();

    const playingStatusUpdateHandler = useCallback((isPlaying: boolean) => {
        playerContext.setVideoIsPlaying(isPlaying);
    }, [playerContext]);

    return (
        <section className={classNames(cls.video, {}, [className])}>
            <ReactPlayer
                playing={videoIsPlaying}
                onPlay={() => playingStatusUpdateHandler(true)}
                onPause={() => playingStatusUpdateHandler(false)}
                ref={(audio) => playerRef.current = audio}
                url={VIDEO_URL}
                height={720}
                width={"100%"}
                controls
            />
            {activeEvents.map(activeEvent =>
                <ActiveEvent
                    key={activeEvent.id}
                    width={activeEvent.zone.width}
                    height={activeEvent.zone.height}
                    left={activeEvent.zone.left}
                    top={activeEvent.zone.top}
                />
            )}
        </section>
    );
};


