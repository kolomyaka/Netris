import { $api } from "../config/api";
import { Event } from "@/store/slices/eventsSlice";

export const EventsApi = {
    async fetchData() {
        const { data } = await $api.get<Event[]>("");
        return data;
    }
};