import { ReactNode } from "react";

import { Provider } from "react-redux";

import { StateSchema } from "./StateSchema";
import { createReduxStore } from "./store";

interface StoreProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {
        initialState,
        children
    } = props;

    const store = createReduxStore(
        initialState as StateSchema,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};