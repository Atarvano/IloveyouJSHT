// --- LATIHAN STATE MANAGEMENT ---

// 1. BUAT REDUCER
// Reducer adalah fungsi yang menerima (state, action) dan mengembalikan state baru.
// Buatlah reducer untuk aplikasi Counter.

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  // TUGAS: Handle action.type "INCREMENT" dan "DECREMENT"
  // Ingat: State harus IMMUTABLE (jangan ubah state langsung, return object baru).
  
  if (action.type === "INCREMENT") {
    // return ...
  }
  
  if (action.type === "DECREMENT") {
    // return ...
  }
  
  return state;
}

// Test Manual:
// let state = counterReducer(undefined, {}); // { count: 0 }
// state = counterReducer(state, { type: "INCREMENT" }); // { count: 1 }
// console.log(state);
