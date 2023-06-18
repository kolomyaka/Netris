import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { eventsReducer } from "@/store/slices/eventsSlice";


import rootSaga from "./sagas";
import { StateSchema } from "./StateSchema";

const rootReducer = combineReducers<StateSchema>({
    events: eventsReducer,
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

