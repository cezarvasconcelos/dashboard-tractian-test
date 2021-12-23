import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "current",
	initialState: {
		unitSelected: 0,
		menuSelected: 'Geral',
	},

	reducers: {
		selectUnit: (current, action) => {
			current.unitSelected = action.payload;
		},
		electUnit: (current, action) => {
			current.menuSelected = action.payload;
		},
	},
});

export default slice.reducer;

export const { selectUnit, selectMenu } = slice.actions;

