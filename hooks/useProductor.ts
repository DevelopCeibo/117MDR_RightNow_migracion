import { useState, useEffect } from 'react'
import { fetchProductor } from '../axios/fetchProductor'

import { ProductorType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  productorDniCuit: string
  productorId: string
  productorNombre: string
}

type RowType = {
  total: number
  productores: ProductorType[]
}

export function useProductores(queryOptions: QueryOptions) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rows, setRows] = useState<RowType>({ total: 0, productores: [] })

  useEffect(() => {
    setIsLoading(true)
    fetchProductor(
      queryOptions.page,
      queryOptions.limit,
      'productores',
      queryOptions.productorDniCuit,
      queryOptions.productorId,
      queryOptions.productorNombre
    )
      .then((data) => {
        setRows(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setIsLoading(false)
      })
  }, [queryOptions])

  return { isLoading, rows }
}
