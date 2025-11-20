# 12 - State Management (Redux Pattern)

Membuat library state management sendiri.

## Konsep
1.  **Store**: Tempat simpan data tunggal.
2.  **Action**: Object yang menjelaskan apa yang terjadi (`{ type: 'INCREMENT' }`).
3.  **Reducer**: Fungsi murni `(state, action) => newState`.

## Implementasi
```javascript
function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => { // Unsubscribe function
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({}); // Init state
  return { getState, dispatch, subscribe };
}
```
Selamat, kamu baru saja membuat Redux versi mini!
