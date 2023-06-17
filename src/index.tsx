import ReactDOM from "react-dom/client";
import { App } from "./App";
import { StoreProvider } from "@/store/StoreProvider";
import "@/styles/index.scss";
import { PlayerProvider } from "@/context/PlayerContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <StoreProvider>
        <PlayerProvider>
            <App />
        </PlayerProvider>
    </StoreProvider>
);