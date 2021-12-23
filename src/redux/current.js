import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "current",
	initialState: {
		unitSelected: 0,
		menuSelected: 'Geral',
		assetsUnitSelected: [],
		usersUnitSelected: []
	},

	reducers: {
		selectUnit: (current, action) => {
			current.unitSelected = action.payload;
		},
		selectMenu: (current, action) => {
			current.menuSelected = action.payload;
		},
		selectAssetsUnit: (current, action) => {
			current.assetsUnitSelected = action.payload;
		},
		selectUsersUnit: (current, action) => {
			current.usersUnitSelected = action.payload;
		},
	},
});

export default slice.reducer;

export const { selectUnit, selectMenu, selectAssetsUnit, selectUsersUnit } = slice.actions;

