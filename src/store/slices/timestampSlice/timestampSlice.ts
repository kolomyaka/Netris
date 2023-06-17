import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimestampSchema, Event } from "./TimestampSchema";

const initialState: TimestampSchema = {
    isLoading: false,
    events: undefined,
};

export const timestampSlice = createSlice({
    name: "timestamp",
    initialState,
    reducers: {
        fetchEvents: (state) => {
            state.isLoading = true;
        },
        setEventsData: (state, action: PayloadAction<Event[]>) => {
            state.isLoading = false;
            state.events = action.payload;
        }
    },
});


export const { actions: timestampActions } = timestampSlice;
export const { reducer: timestampReducer } = timestampSlice;