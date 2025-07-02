import { createSlice } from '@reduxjs/toolkit';

type CheckoutState = {
    isOpenCheckout: boolean;
};

const initialState: CheckoutState = {
    isOpenCheckout: false
};

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        openCheckout: (state) => {
            state.isOpenCheckout = true;
        },
        closeCheckout: (state) => {
            state.isOpenCheckout = false;
        }
    }
});

export const { openCheckout, closeCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
