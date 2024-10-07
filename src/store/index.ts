import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const localStorageMiddleware: Middleware = (storeApi) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("reduxState", JSON.stringify(storeApi.getState()));
  return result;
};

const loadState = (): Record<string, unknown> | undefined => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
