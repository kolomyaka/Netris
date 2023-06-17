import { classNames } from "@/utils/lib";
import cls from "./Video.module.scss";
import { VIDEO_URL } from "@/utils/consts";

interface VideoProps {
    className?: string
}

export const Video = ({ className }: VideoProps) => {
    return (
        <section className={classNames(cls.video, {}, [className])}>
            <video controls className={cls.videoElement}>
                <source src={VIDEO_URL} type="video/mp4" />
            </video>
        </section>
    );
};


