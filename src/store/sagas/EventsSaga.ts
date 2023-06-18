import { SagaIterator } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";

import { EventsApi } from "@/services/api";
import { eventsActions, Event } from "@/store/slices/eventsSlice";

function* workFetchEventsData(): SagaIterator {
    try {
        const data: Event[] = yield call(EventsApi.fetchData);

        if (data) {
            yield put(eventsActions.setEventsData([
                ...data.sort((a,b) => a.timestamp - b.timestamp)
            ]));
        }
    } catch (err) {
        yield put(eventsActions.eventsDataError());
    }
}

function* EventsSaga() {
    yield takeEvery(eventsActions.fetchEvents, workFetchEventsData);
}

export default EventsSaga;