import { all } from "redux-saga/effects";

import EventsSaga from "./EventsSaga";

export default function* rootSaga() {
    yield all([EventsSaga()]);
}