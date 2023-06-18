import { classNames } from "@/utils/lib";

import cls from "./ActiveEvent.module.scss";

interface ActiveEventProps {
    className?: string;
    width: number;
    height: number;
    left: number;
    top: number;
}

export const ActiveEvent = (props: ActiveEventProps) => {
    const {
        className,
        width,
        height,
        left,
        top
    } = props;

    return (
        <div
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
};


