import { useContext, useEffect } from "react";

import { EventListItem } from "@/components/Events";
import { Loader } from "@/components/ui/Loader/Loader";
import { VStack } from "@/components/ui/Stack/VStack/VStack";
import { Typography } from "@/components/ui/Typography/Typography";
import { PlayerContext } from "@/context/PlayerContext";
import { useAppDispatch } from "@/store/hooks";
import { eventsActions, useEventsData, useEventsError, useEventsIsLoading } from "@/store/slices/eventsSlice";
import { classNames } from "@/utils/lib";

import cls from "./EventsList.module.scss";

export const EventsList = () => {

    const dispatch = useAppDispatch();
    const events = useEventsData();
    const isLoading = useEventsIsLoading();
    const error = useEventsError();
    const videoRef = useContext(PlayerContext);

    useEffect(() => {
        dispatch(eventsActions.fetchEvents());
    }, [dispatch]);

    if (error) {
        return (
            <VStack className={classNames(cls.eventsContainer, { [cls.error]: error })}>
                <Typography align={"center"} variant={"p"}>{error}</Typography>
            </VStack>
        );
    }

    return (
        <VStack gap={12} className={cls.eventsContainer}>
            <Typography variant={"h3"}>Список событий</Typography>
            {isLoading
                ? <Loader />
                : <VStack gap={"noGap"} align={"stretch"} max className={classNames(cls.eventsList)}>
                    {events?.map((event) =>
                        <EventListItem
                            key={event.id}
                            timestamp={event.timestamp}
                            duration={event.duration}
                            playerRef={videoRef}
                            zone={event.zone}
                            id={event.id}
                        />
                    )}
                </VStack>
            }
        </VStack>
    );
};


