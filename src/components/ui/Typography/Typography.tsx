import cls from "./Typography.module.scss";
import { memo, ReactNode } from "react";
import { classNames } from "@/utils/lib";

export interface TypographyProps {
    children: ReactNode;
    className?: string;
    variant?: "p" | "h1" | "h2" | "h3" | "span";
    color?: "dark" | "gray" | "white";
    size?: "XL" | "L" | "M" | "S";
    align?: "center" | "left" | "right";
    weight?: "medium" | "regular" | "light";
}

export const Typography = memo((props: TypographyProps) => {
    const {
        className,
        variant = "p",
        color = "white",
        size = "M",
        align = "left",
        weight = "regular",
        children
    } = props;
    const Component = variant;

    return (
        <Component
            className={classNames(
                "",
                {},
                [className, cls[variant], cls[color], cls[size], cls[align], cls[weight]]
            )}
        >
            {children}
        </Component>
    );
});


