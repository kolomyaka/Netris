import { classNames } from "@/utils/lib";
import cls from "./EventListItem.module.scss";
import { Typography } from "@/components/ui";
import { memo, MutableRefObject, useCallback } from "react";
import { convertTimestamp } from "@/utils/helpers";
import { useDefineActiveEvent } from "@/utils/hooks";

import ReactPlayer from "react-player";

interface EventListItemProps {
    className?: string
    timestamp: number
    duration: number;
    playerRef: MutableRefObject<ReactPlayer>
}

export const EventListItem = memo((props: EventListItemProps) => {
    const {
        className,
        timestamp,
        duration,
        playerRef
    } = props;

    const [isActive] = useDefineActiveEvent(playerRef.current, timestamp, timestamp + duration);
    
    const onEventClickHandler = useCallback((timestamp: number) => () => {
        playerRef.current.seekTo(timestamp / 1000);
    }, [playerRef]);

    return (
        <div
            onClick={onEventClickHandler(timestamp)}
            className={classNames(cls.eventListItem, { [cls.active]: isActive }, [className])}
        >
            <Typography
                className={classNames("", { [cls.active]: isActive })}
                size={"S"}
            >
                {convertTimestamp(timestamp)}
            </Typography>
        </div>
    );
});


