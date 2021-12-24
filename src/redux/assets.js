import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
	name: "assets",
	initialState: {
		listAssets: [],
		loading: false,
		testNumber: 0,
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

		assetDeleteFromList: (assets, action) => {
			alert('Item excluído');
			assets.listAssets = assets.listAssets.filter((element) => element.id !== action.payload);
		},
		updateAssetFromList: (assets, action) => {

			const assetsCopy = [...assets.listAssets];
			const targetIndex = assetsCopy.findIndex(f => f.id === action.payload.id);
			assetsCopy[targetIndex] = action.payload;
			assets.listAssets = assetsCopy;
			// console.log("item atualizado, na teoria");
		},

		newAsset: (assets, action) => {
			assets.listAssets = [action.payload, ...assets.listAssets];
			// console.log(action.payload)
			assets.loading = false;
		},

	},
});

export default slice.reducer;

export const { assetsRequested, assetsReceived, assetsRequestFailed, assetDeleteFromList, updateAssetFromList, newAsset } = slice.actions;

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

export const updateAsset = (asset) => (dispatch) => {

	return dispatch(
		apiCallBegan({
			url: `${url}/${asset.id}`,
			method: 'PUT',
			onStart: assetsRequested.type,
			// onSuccess: assetDeletedSucess.type,
			onError: assetsRequestFailed.type,
			data: asset,
		})
	);
};

//#TODO
//entender o que está ocorrendo exatamente no reducer
//acredito que isso quebra a premissa de um reducer ser uma função pura
export const deleteAsset = (idAsset) => (dispatch) => {
	return dispatch(
		apiCallBegan({
			url: `${url}/${idAsset}`,
			method: 'DELETE',
			onStart: assetsRequested.type,
			onError: assetsRequestFailed.type,
		})
	);
};

export const addAsset = (asset) => (dispatch) => {
	return dispatch(
		apiCallBegan({
			url,
			method: 'POST',
			onStart: assetsRequested.type,
			onSuccess: newAsset.type,
			onError: assetsRequestFailed.type,
			data: asset,
		})
	);
};
