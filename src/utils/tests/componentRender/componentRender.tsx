import { ReactNode } from "react";

import { render } from "@testing-library/react";

import "@/styles/index.scss";
import { PlayerProvider } from "@/context/PlayerContext";
import { StateSchema } from "@/store";
import { StoreProvider } from "@/store/StoreProvider";


export interface componentRenderOptions {
    initialState?: DeepPartial<StateSchema>;
}

interface TestProviderProps {
    children: ReactNode;
    options?: componentRenderOptions;
}

export const TestProvider = (props: TestProviderProps) => {
    const { children, options = {} } = props;

    const {
        initialState,
    } = options;

    return (
        <StoreProvider
            initialState={initialState}
        >
            <PlayerProvider>
                <div className={"app"}>{children}</div>
            </PlayerProvider>
        </StoreProvider>
    );
};

export function componentRender(
    component: ReactNode,
    options?: componentRenderOptions,
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
