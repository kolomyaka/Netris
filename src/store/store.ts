import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { StateSchema } from "./StateSchema";
import { eventsReducer } from "@/store/slices/eventsSlice";
import { videoReducer } from "@/store/slices/videoSlice";

const rootReducer = combineReducers<StateSchema>({
    events: eventsReducer,
    video: videoReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

