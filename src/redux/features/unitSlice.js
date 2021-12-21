import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	unitId: 0,
}

export const unitSlice = createSlice({
	name: 'unit',
	initialState,
	reducers: {
		selectUnit: (state, action) => {
			state.unitId = action.payload
		},
	},
})

export const { selectUnit } = unitSlice.actions

export default unitSlice.reducer