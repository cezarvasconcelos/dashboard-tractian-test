import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
	name: "assets",
	initialState: {
		listAssets: [],
		loading: false,
	},

	reducers: {
		assetsRequested: (assets, action) => {
			assets.loading = true;
		},

		assetsReceived: (assets, action) => {
			assets.listAssets = action.payload;
			assets.loading = false;
		},

		assetsRequestFailed: (assets, action) => {
			assets.loading = false;
		},
	},
});

export default slice.reducer;

const { assetsRequested, assetsReceived, assetsRequestFailed } = slice.actions;

const url = "/assets";

export const loadAssets = () => (dispatch) => {
	return dispatch(
		apiCallBegan({
			url,
			onStart: assetsRequested.type,
			onSuccess: assetsReceived.type,
			onError: assetsRequestFailed.type,
		})
	);
};