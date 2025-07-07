import { createSlice } from '@reduxjs/toolkit'


type MessageState = {
    isOpenMessage: boolean;
};

const initialState: MessageState = {
    isOpenMessage: false
}

const messageSlice = createSlice({

    name: 'message',
    initialState,
    reducers: {
        openMessage: (state) => {
            state.isOpenMessage = true;
        },
        closeMessage: (state) => {
            state.isOpenMessage = false;
        }
    }
})

export const {openMessage, closeMessage} = messageSlice.actions
export default messageSlice.reducer;