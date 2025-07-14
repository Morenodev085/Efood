import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type products = {
  id: number
  price: number
}

type PurchasePayload  = {
products: products[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  },
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires:{
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getFeatureRestaurante: builder.query<Restaurante,void>({
      query: () => 'Cardapio'
    }),
    purchease: builder.mutation<any, PurchasePayload >({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    }
    )
  })
})

export const {useGetFeatureRestauranteQuery, usePurcheaseMutation} = api

export default api
