import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  import {  ItemDoMenu, Restaurante } from "../../pages/Home";


type CartState = {
  items:  ItemDoMenu[],
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice ({
  name:'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemDoMenu>) =>{
      state.items.push(action.payload)
    },
    open:(state) => {
      state.isOpen = true
    },
    close:(state) => {
      state.isOpen = false
    }
  }
})

export const {add, open, close} = cartSlice.actions

export default cartSlice.reducer
