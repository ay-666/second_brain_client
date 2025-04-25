import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { experimental_streamedQuery } from "@tanstack/react-query";
import UserReducer from "./userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, UserReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
