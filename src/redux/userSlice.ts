import { createSlice } from "@reduxjs/toolkit";

interface UserSliceState{
    user : any
}

const initialState : UserSliceState = {
    user:null
}

const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        addUser :(state,payload)=>{
            state.user = payload;
        },
        removeUser: (state)=>{
            state.user = null;
        }
    }


});

export const {addUser , removeUser} = userSlice.actions;

export default userSlice.reducer;