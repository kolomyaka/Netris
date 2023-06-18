import React, { createContext, ReactNode, useRef, useState } from "react";

import ReactPlayer from "react-player/types/lib";

export interface PlayerContextValue {
    videoIsPlaying: boolean;
    ref: React.MutableRefObject<ReactPlayer> | any;
    setVideoIsPlaying: (status: boolean) => void
}

export const PlayerContext = createContext<PlayerContextValue | null>(null);

export const PlayerProvider = ({ children }: { children: ReactNode }) => {
    const playerRef = useRef<React.MutableRefObject<ReactPlayer> | null>(null);
    const [videoIsPlaying, setVideoIsPlaying] = useState(false);

    const PlayerProviderValue = {
        ref: playerRef,
        videoIsPlaying,
        setVideoIsPlaying
    };

    return (
        <PlayerContext.Provider value={PlayerProviderValue}>
            {children}
        </PlayerContext.Provider>
    );
};
