import { Event } from "@/store/slices/eventsSlice";

import { $api } from "../config/api";

export const EventsApi = {
    async fetchData() {
        const { data } = await $api.get<Event[]>("");
        return data;
    }
};