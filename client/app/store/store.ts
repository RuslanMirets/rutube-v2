import { configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { api } from './api/api';
import { rtkQueryErrorLogger } from './middlewares/error.middleware';
import { rootReducer } from './root-reducer';

const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REGISTER, PAUSE, PERSIST, PURGE, REGISTER],
			},
		})
			.concat(rtkQueryErrorLogger)
			.concat(api.middleware),
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
