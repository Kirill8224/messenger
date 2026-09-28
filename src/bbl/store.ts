import messagerReducer from "./messagesSlise";
import { configureStore } from "@reduxjs/toolkit";
export const globalState= configureStore({
    reducer: {
        messager: messagerReducer}
})
export type RootState= ReturnType<typeof globalState.getState>
export type DispathType= typeof globalState.dispatch