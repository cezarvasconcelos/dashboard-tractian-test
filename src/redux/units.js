import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
	name: "units",
	initialState: {
		listUnits: [],
		loading: false,
	},

	reducers: {
		unitsRequested: (units, action) => {
			units.loading = true;
		},

		unitsReceived: (units, action) => {
			units.listUnits = [{ id: 0, name: "Todos" }, ...action.payload];
			units.loading = false;
		},

		unitsRequestFailed: (units, action) => {
			units.loading = false;
		},
	},
});

export default slice.reducer;

const { unitsRequested, unitsReceived, unitsRequestFailed } = slice.actions;

const url = "/units";

export const loadUnits = () => (dispatch) => {

	return dispatch(
		apiCallBegan({
			url,
			onStart: unitsRequested.type,
			onSuccess: unitsReceived.type,
			onError: unitsRequestFailed.type,
		})
	);
};