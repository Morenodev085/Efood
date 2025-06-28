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
    remove: (state, action: PayloadAction<number>) =>{
      state.items =state.items.filter((item) => item.id!== action.payload )
    },
    open:(state) => {
      state.isOpen = true
    },
    close:(state) => {
      state.isOpen = false
    }
  }
})


export const {add, open, close, remove} = cartSlice.actions

export default cartSlice.reducer
