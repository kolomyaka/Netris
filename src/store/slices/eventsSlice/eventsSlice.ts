import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Event, EventsSchema,ActiveEvent } from "./EventsSchema";

const initialState: EventsSchema = {
    isLoading: false,
    events: undefined,
    activeEvents: []
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
        eventsDataError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        setActiveEvents: (state, action) => {
            const isActive = action.payload.isActive;
            const zone = action.payload.zone;
            const id = action.payload.id;

            if (isActive) {
                state.activeEvents.push({
                    zone,
                    id
                });
            } else {
                state.activeEvents = state.activeEvents.filter((activeEvent: ActiveEvent) => activeEvent.id !== id);
            }
        }
    },
});


export const { actions: eventsActions } = eventsSlice;
export const { reducer: eventsReducer } = eventsSlice;