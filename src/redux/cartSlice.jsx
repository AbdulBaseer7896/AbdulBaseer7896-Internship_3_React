import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state from localStorage", e);
        return undefined;
    }
};

const initialState = loadStateFromLocalStorage() || {
    userCarts: {}, // { email: { products: [], totalQuantity: 0, totalPrice: 0 } }
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { product, email } = action.payload;
            if (!state.userCarts[email]) {
                state.userCarts[email] = { products: [], totalQuantity: 0, totalPrice: 0 };
            }
            const userCart = state.userCarts[email];
            const itemIndex = userCart.products.find((item) => item.id === product.id);
            if (itemIndex) {
                itemIndex.quantity++;
                itemIndex.totalPrice = itemIndex.quantity * itemIndex.price; // Update totalPrice for the item
            } else {
                userCart.products.push({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    quantity: 1,
                    totalPrice: product.price, // Initialize totalPrice for the item
                    image: product.image,
                });
            }
            userCart.totalQuantity++;
            userCart.totalPrice += product.price; // Update totalPrice for the cart

            saveStateToLocalStorage(state);
        },

        removeFromCart(state, action) {
            const { id, email } = action.payload;
            if (!state.userCarts[email]) return;
            const userCart = state.userCarts[email];
            const findItem = userCart.products.find((item) => item.id === id);
            if (findItem) {
                userCart.totalPrice -= findItem.totalPrice; // Update totalPrice for the cart
                userCart.totalQuantity -= findItem.quantity;
                userCart.products = userCart.products.filter((item) => item.id !== id);

                saveStateToLocalStorage(state);
            }
        },

        increaseQuantity(state, action) {
            const { id, email } = action.payload;
            if (!state.userCarts[email]) return;
            const userCart = state.userCarts[email];
            const findItem = userCart.products.find((item) => item.id === id);
            if (findItem) {
                findItem.quantity++;
                findItem.totalPrice = findItem.quantity * findItem.price; // Update totalPrice for the item
                userCart.totalQuantity++;
                userCart.totalPrice += findItem.price; // Update totalPrice for the cart

                saveStateToLocalStorage(state);
            }
        },

        decreaseQuantity(state, action) {
            const { id, email } = action.payload;
            if (!state.userCarts[email]) return;
            const userCart = state.userCarts[email];
            const findItem = userCart.products.find((item) => item.id === id);
            if (findItem && findItem.quantity > 1) {
                findItem.quantity--;
                findItem.totalPrice = findItem.quantity * findItem.price; // Update totalPrice for the item
                userCart.totalQuantity--;
                userCart.totalPrice -= findItem.price; // Update totalPrice for the cart

                saveStateToLocalStorage(state);
            }
        },

        resetCart(state, action) {
            const email = action.payload;
            if (state.userCarts[email]) {
                state.userCarts[email] = { products: [], totalQuantity: 0, totalPrice: 0 };

                saveStateToLocalStorage(state);
            }
        },
    },
});


const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (e) {
        console.warn("Could not save state to localStorage", e);
    }
};

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
