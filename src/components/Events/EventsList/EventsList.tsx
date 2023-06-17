import cls from "./EventsList.module.scss";
import { classNames } from "@/utils/lib";
import { useEffect } from "react";
import { timestampActions } from "@/store/slices/timestampSlice";
import { useAppDispatch } from "@/store/hooks";
import { EventListItem } from "@/components/Events";
import { Typography } from "@/components/ui/Typography/Typography";
import { VStack } from "@/components/ui/Stack/VStack/VStack";

interface EventsListProps {
    className?: string
}

export const EventsList = ({ className }: EventsListProps) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(timestampActions.fetchEvents());
    }, [dispatch]);

    return (
        <VStack gap={12} className={cls.eventsContainer}>
            <Typography variant={"h3"}>Список событий</Typography>
            <VStack gap={"noGap"} align={"stretch"} max className={classNames(cls.eventsList, {}, [className])}>
                {Array(10).fill(1).map((_, index) => <EventListItem key={index}/>)}
            </VStack>
        </VStack>
    );
};


