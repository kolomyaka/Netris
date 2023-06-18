import { memo } from "react";

import { classNames } from "@/utils/lib";

import cls from "./ActiveEvent.module.scss";

interface ActiveEventProps {
    className?: string;
    width: number;
    height: number;
    left: number;
    top: number;
    id: number;
}

export const ActiveEvent = memo((props: ActiveEventProps) => {
    const {
        className,
        width,
        height,
        left,
        top,
        id
    } = props;

    return (
        <div
            data-testid={"ActiveEvent"}
            className={classNames(cls.activeEvent, {}, [className])}
            style={{
                width,
                height,
                left,
                top
            }}
        >
          
        </div>
    );
});


