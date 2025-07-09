import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload  = {
product: Product[]
  delivery: {
    receiver: String
    address: {
      description: string
      city: string
      zipCode: string
      number: string
      complement: string
    }
  },
  payment: {
    card: {
      name: string
      number: number
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
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurante'
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
