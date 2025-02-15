import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fullName:'',
    nationalId:'',
    createdAt:'',
}

const CustomerSlice = createSlice({
    name:'customer',
    initialState,
    reducers:{
        createAccount:{
                prepare(fullName,nationalId){
                    return{
                        payload:{fullName,
                                nationalId,
                                createdAt:new Date().toISOString()}
                    }
                }, 
                reducer(state,action)
                    {
                    state.fullName = action.payload.fullName;
                    state.nationalId = action.payload.nationalId;
                    state.createdAt = action.payload.createdAt;
                }     
            },
        updateName(state,action){
                state.fullName = action.payload;
        } 
        }
})

export const {createAccount,updateName} = CustomerSlice.actions;
export default CustomerSlice.reducer;

