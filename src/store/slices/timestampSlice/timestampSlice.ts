import { createSlice } from "@reduxjs/toolkit";
import { TimestampSchema } from "./TimestampSchema";


const initialState: TimestampSchema = {

};

export const timestampSlice = createSlice({
    name: "timestamp",
    initialState,
    reducers: {

    },
});


export const { actions: timestampActions } = timestampSlice;
export const { reducer: timestampReducer } = timestampSlice;