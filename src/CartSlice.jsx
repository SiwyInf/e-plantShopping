import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const item = state.items.find(item => item.name === name);
            if (item) {
                item.quantity = quantity;
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload.name);
        }
    }
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
