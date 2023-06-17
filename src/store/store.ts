import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { StateSchema } from "./StateSchema";
import { timestampReducer } from "@/store/slices/timestampSlice";

const rootReducer = combineReducers<StateSchema>({
    timestamp: timestampReducer
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

