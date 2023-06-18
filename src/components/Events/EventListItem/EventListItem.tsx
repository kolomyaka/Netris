import { memo, useCallback, useEffect } from "react";

import { Typography } from "@/components/ui";
import { PlayerContextValue } from "@/context/PlayerContext";
import { useAppDispatch } from "@/store/hooks";
import { eventsActions, EventZone } from "@/store/slices/eventsSlice";
import { convertTimestamp } from "@/utils/helpers";
import { useDefineActiveEvent } from "@/utils/hooks";
import { classNames } from "@/utils/lib";

import cls from "./EventListItem.module.scss";

interface EventListItemProps {
    className?: string;
    timestamp: number;
    duration: number;
    playerRef: PlayerContextValue | null;
    zone: EventZone;
    id: number;
}

export const EventListItem = memo((props: EventListItemProps) => {
    const {
        className,
        timestamp,
        duration,
        playerRef,
        zone,
        id
    } = props;

    const dispatch = useAppDispatch();
    const isActive = useDefineActiveEvent(playerRef?.ref.current, timestamp, timestamp + duration);

    const onEventClickHandler = useCallback((timestamp: number) => () => {
        playerRef?.ref.current.seekTo(timestamp / 1000);
    }, [playerRef]);

    useEffect(() => {
        dispatch(eventsActions.setActiveEvents({
            isActive,
            zone,
            id
        }));
    }, [dispatch, id, isActive, timestamp, zone]);

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


