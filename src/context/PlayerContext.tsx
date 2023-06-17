import React, { createContext, ReactNode, useRef } from "react";
import ReactPlayer from "react-player/types/lib";


export const PlayerContext = createContext<React.MutableRefObject<ReactPlayer> | any>(null);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const playerRef = useRef<React.MutableRefObject<ReactPlayer> | null>(null);

    return (
        <PlayerContext.Provider value={playerRef}>
            {children}
        </PlayerContext.Provider>
    );
};
