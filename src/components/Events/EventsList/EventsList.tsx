import cls from "./EventsList.module.scss";
import { classNames } from "@/utils/lib";
import { useContext, useEffect } from "react";
import { eventsActions, useEventsData, useEventsError, useEventsIsLoading } from "@/store/slices/eventsSlice";
import { useAppDispatch } from "@/store/hooks";
import { EventListItem } from "@/components/Events";
import { Typography } from "@/components/ui/Typography/Typography";
import { VStack } from "@/components/ui/Stack/VStack/VStack";
import { Loader } from "@/components/ui/Loader/Loader";
import { PlayerContext } from "@/context/PlayerContext";

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
                        />
                    )}
                </VStack>
            }
        </VStack>
    );
};


