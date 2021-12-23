import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reducerUnits from "./units";
import reducerUsers from "./users";
import reducerAssets from "./assets";
import reducerCurrent from "./current";
import api from "./middleware/api"; {
}
const reducer = combineReducers({
	units: reducerUnits,
	users: reducerUsers,
	assets: reducerAssets,
	current: reducerCurrent
})
export default function store() {
	return configureStore({
		reducer,
		middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api],
	});
}