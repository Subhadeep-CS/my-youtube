import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"searchSlice",
    initialState:{

    },
    reducers:{
        cacheResults:(state,action)=>{
            state={...action.payload,...action};
        }
    }
})

export default searchSlice.reducer;
export const  {cacheResults}=searchSlice.actions;