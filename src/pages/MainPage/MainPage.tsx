import { EventsList } from "@/components/Events";
import { Video } from "@/components/Video";

import cls from "./MainPage.module.scss";

export const MainPage = () => {
    return (
        <main className={cls.wrapper}>
            <Video />
            <EventsList />
        </main>
    );
};