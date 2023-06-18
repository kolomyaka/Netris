import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { eventsReducer } from "@/store/slices/eventsSlice";

import rootSaga from "./sagas";
import { StateSchema } from "./StateSchema";

const sagaMiddleware = createSagaMiddleware();

export const createReduxStore = (
    initialState?: StateSchema,
) => {
    // Создаем root редюсер нашего приложения
    const rootReducer: ReducersMapObject<StateSchema> = {
        events: eventsReducer
    };


    const store = configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            }).concat([sagaMiddleware]),
    });

    sagaMiddleware.run(rootSaga);

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

