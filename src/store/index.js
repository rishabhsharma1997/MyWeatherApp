import { configureStore, createSlice } from "@reduxjs/toolkit";
const modeState={
    isDark:false
}
const modeSlice=createSlice({
    name:"darkModeLightMode",
    initialState:modeState,
    reducers:{
        toggleMode(state){
            state.isDark=!state.isDark;
        }
    }
})

const store=configureStore({
    reducer:modeSlice.reducer,
});
export const isDarkActions=modeSlice.actions;
export default store;
