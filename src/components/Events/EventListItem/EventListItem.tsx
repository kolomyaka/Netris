import { classNames } from "@/utils/lib";
import cls from "./EventListItem.module.scss";
import { Typography } from "@/components/ui/Typography/Typography";
import { memo } from "react";

interface EventListItemProps {
    className?: string
}

export const EventListItem = memo(({ className }: EventListItemProps) => {
    return (
        <div className={classNames(cls.eventListItem, {}, [className])}>
            <Typography size={"S"}>00:03:012</Typography>
        </div>
    );
});


