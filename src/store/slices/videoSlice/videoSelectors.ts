import { buildSelector } from "@/utils/helpers";

export const [useVideoIsPlaying] = buildSelector(
    (state) => state.video.isPlaying
);