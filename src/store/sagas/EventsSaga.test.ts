import { Action } from "@reduxjs/toolkit";
import { runSaga } from "redux-saga";

import { EventsApi } from "@/services/api";
import { eventsActions } from "@/store/slices/eventsSlice";

import { workFetchEventsData } from "./EventsSaga";

describe("Testing full EventsSaga", () => {

    afterAll(() => {
        jest.clearAllMocks();
    });

    test("Puts data to redux store (no errors)" , async () => {
        const dispatched: Action[] = [];
        const events = [{ id: 0, timestamp: 123, duration: 223, zone: { left: 1, top: 2, width: 5, height: 10 } }];
        EventsApi.fetchData = jest.fn().mockResolvedValue(events);

        await runSaga({
            dispatch: (action: Action) => dispatched.push(action),
            getState: () => ({ state: "test" })
        },
        workFetchEventsData,
        ).toPromise();

        expect(EventsApi.fetchData).toHaveBeenCalled();
        expect(dispatched).toEqual([
            {
                type: eventsActions.setEventsData.type,
                payload: events
            }
        ]);
    });

    test("Puts error to redux store if error was thrown" , async () => {
        const dispatched: Action[] = [];
        const errorMessage = "Ошибка при получении данных";
        EventsApi.fetchData = jest.fn().mockRejectedValue(errorMessage);

        await runSaga({
            dispatch: (action: Action) => dispatched.push(action),
            getState: () => ({ state: "test" })
        },
        workFetchEventsData,
        ).toPromise();

        expect(EventsApi.fetchData).toHaveBeenCalled();
        expect(dispatched).toEqual([
            {
                type: eventsActions.eventsDataError.type,
                payload: errorMessage
            }
        ]);
    });
});