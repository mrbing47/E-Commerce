import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";

export default function () {
	return configureStore({
		reducer: userReducer,
	});
}
