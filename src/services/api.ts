import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePlayload = {
  product: Product[]
  delivery: {
    receiver: String
    address: {
      description: string
      city: string
      zpiCode: string
      number: number
      complement: string
    }
  },
  payment: {
    card: {
      name: string
      number: number
      code: 123
      expires:{
        month: 12
        year: 1234
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
    })
  })
})

export const {useGetFeatureRestauranteQuery} = api

export default api
