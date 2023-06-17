import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event, EventsSchema } from "./EventsSchema";

const initialState: EventsSchema = {
    isLoading: false,
    events: undefined,
};

export const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        fetchEvents: (state) => {
            state.isLoading = true;
        },
        setEventsData: (state, action: PayloadAction<Event[]>) => {
            state.isLoading = false;
            state.events = action.payload;
        },
        eventsDataError: (state) => {
            state.isLoading = false;
            state.error = "Ошибка при получении данных";
        }
    },
});


export const { actions: eventsActions } = eventsSlice;
export const { reducer: eventsReducer } = eventsSlice;