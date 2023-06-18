export interface EventZone {
    left: number;
    top: number;
    width: number
    height: number;
}

export interface Event {
    id: number;
    timestamp: number;
    duration: number,
    zone: EventZone
}

export interface ActiveEvent {
    zone: EventZone
    id: number
}

export interface EventsSchema {
    isLoading: boolean;
    error?: string;
    events?: Event[];
    activeEvents: ActiveEvent[]
}