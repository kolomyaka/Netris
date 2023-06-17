import { buildSelector } from "@/utils/helpers";

export const [useEventsData] = buildSelector(
    (state) => state.events.events
);

export const [useEventsIsLoading] = buildSelector(
    (state) => state.events.isLoading
);

export const [useEventsError] = buildSelector(
    (state) => state.events.error
);