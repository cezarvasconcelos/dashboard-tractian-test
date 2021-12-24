import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
	name: "users",
	initialState: {
		listUsers: [],
		loading: false,
	},

	reducers: {
		usersRequested: (users, action) => {
			users.loading = true;
		},

		usersReceived: (users, action) => {
			users.listUsers = action.payload;
			users.loading = false;
		},

		usersRequestFailed: (users, action) => {
			users.loading = false;
		},

		usersDeleteFromList: (users, action) => {
			alert('User excluído');
			users.listUsers = users.listUsers.filter((element) => element.id !== action.payload);
		},
		updateUserFromList: (users, action) => {

			const usersCopy = [...users.listUsers];
			const targetIndex = usersCopy.findIndex(f => f.id === action.payload.id);
			usersCopy[targetIndex] = action.payload;
			users.listUsers = usersCopy;
			console.log("item atualizado, na teoria");
		},

		newUser: (users, action) => {
			users.listUsers = [action.payload, ...users.listUsers];
			console.log(action.payload)
			users.loading = false;
		},
	},
});

export default slice.reducer;

const { usersRequested, usersReceived, usersRequestFailed, userDeleteFromList, updateUserFromList, newUser } = slice.actions;

const url = "/users";

export const loadUsers = () => (dispatch) => {
	return dispatch(
		apiCallBegan({
			url,
			onStart: usersRequested.type,
			onSuccess: usersReceived.type,
			onError: usersRequestFailed.type,
		})
	);
};


export const updateUser = (user) => (dispatch) => {
	return dispatch(
		apiCallBegan({
			url: `${url}/${user.id}`,
			method: 'PUT',
			onStart: usersRequested.type,
			onError: usersRequestFailed.type,
			data: user,
		})
	);
};

export const deleteUser = (idUser) => (dispatch) => {
	return dispatch(
		apiCallBegan({
			url: `${url}/${idUser}`,
			method: 'DELETE',
			onStart: usersRequested.type,
			onError: usersRequestFailed.type,
		})
	);
};

export const addUser = (user) => (dispatch) => {
	return dispatch(
		apiCallBegan({
			url,
			method: 'POST',
			onStart: usersRequested.type,
			onSuccess: newUser.type,
			onError: usersRequestFailed.type,
			data: user,
		})
	);
};
