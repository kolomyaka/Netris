import ReactDOM from "react-dom/client";

import { PlayerProvider } from "@/context/PlayerContext";
import { StoreProvider } from "@/store/StoreProvider";

import "@/styles/index.scss";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StoreProvider>
        <PlayerProvider>
            <App />
        </PlayerProvider>
    </StoreProvider>
);