import { EventsSchema } from "@/store/slices/eventsSlice";
import { VideoSchema } from "@/store/slices/videoSlice";

export interface StateSchema {
    events: EventsSchema;
    video: VideoSchema
}