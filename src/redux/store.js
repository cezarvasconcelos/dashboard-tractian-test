import { configureStore } from '@reduxjs/toolkit'
import unitReducer from './features/unitSlice'

export const store = configureStore({
	reducer: {
		unit: unitReducer,
	},
})
