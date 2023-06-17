import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoSchema } from "./VideoSchema";


const initialState: VideoSchema = {
    isPlaying: false
};

export const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        }
    },

});


export const { actions: videoActions } = videoSlice;
export const { reducer: videoReducer } = videoSlice;