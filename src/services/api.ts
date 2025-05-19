import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'


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
