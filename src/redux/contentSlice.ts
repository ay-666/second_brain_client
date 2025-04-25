import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Content } from "../pages/Dashboard";

interface ContentState{
    contents: Content[]
}
const initialState : ContentState = {
    contents: [],
}
const contentSlice = createSlice({
    name:'content',
    initialState,
    reducers:{
        addContent:(state,action:PayloadAction<ContentState>)=>{
            state.contents = action.payload.contents;
        }
    }
});