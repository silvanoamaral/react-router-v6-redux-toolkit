import { all, takeEvery, put } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'redux-first-history';

function* handleLocationChange(action: any) {
  // Você pode adicionar lógica adicional aqui quando a localização mudar
  console.log('Location changed to:', action.payload.location);
}

function* watchLocationChange() {
  yield takeEvery(LOCATION_CHANGE, handleLocationChange);
}

export default function* rootSaga() {
  yield all([
    watchLocationChange(),
    // outros watchers aqui
  ]);
}