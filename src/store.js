import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import reduktora koszyka

const store = configureStore({
    reducer: {
        cart: cartReducer, // Rejestracja reduktora
    },
});

export default store;
