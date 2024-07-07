import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice(
    {
        name:"cart",
        initialState: {
            items: [],
        },
        reducers: {
            addItem: (state,action)=>{
                //with vanila redux, we can't mutate the state,we create a copy of the state, then mutate the copy and return it
                // const newState = [...state];
                // newState.items.push(action.payload);
                // return newState;

                // we are mutating our store here, we can mutate our state, and dont need to return anything but redux doing the same thing like vanila redux but it is done by IMMER library              
                state.items.push(action.payload);
            },
            removeItem: (state)=>{
                state.items.pop();
            },
            clearCart: (state)=>{
                state.items.length = 0;
            },
        }
    }
);

export const {addItem, removeItem, clearCart} =cartSlice.actions;
export default cartSlice.reducer;