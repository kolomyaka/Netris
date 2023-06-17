import cls from "./MainPage.module.scss";
import { EventsList } from "@/components/Events";
import { Video } from "@/components/Video";

export const MainPage = () => {
    return (
        <main className={cls.wrapper}>
            <Video />
            <EventsList />
        </main>
    );
};