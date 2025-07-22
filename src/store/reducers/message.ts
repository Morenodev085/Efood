import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type MessageState = {
    isOpenMessage: boolean;
    orderId?: string;
};

const initialState: MessageState = {
    isOpenMessage: false
}

const messageSlice = createSlice({

    name: 'message',
    initialState,
    reducers: {
        openMessage: (state, action: PayloadAction<{orderId:string}>) => {
            state.isOpenMessage = true;
            state.orderId =  action.payload.orderId;
        },
        closeMessage: (state) => {
            state.isOpenMessage = false;
              state.orderId = undefined;
        }
    }
})

export const {openMessage, closeMessage} = messageSlice.actions
export default messageSlice.reducer;
