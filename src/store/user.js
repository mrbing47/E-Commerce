import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {},
	reducers: {
		userLoggedIn: (state, action) => {
			return state;
		},
		userLoggedOut: (state, action) => {
			return state;
		},
	},
});

export const actions = userSlice.actions;

export default userSlice.reducer;
