import { useState, useEffect } from 'react'
import { fetchPoliza } from '../axios/fetchPoliza'

import { PolizaType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  polizaId: string
  polizaNombre: string
  creationDate: string
}

type RowType = {
  total: number
  polizas: PolizaType[]
}

export function usePolizas(queryOptions: QueryOptions) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rows, setRows] = useState<RowType>({ total: 0, polizas: [] })

  useEffect(() => {
    setIsLoading(true)
    fetchPoliza(
      queryOptions.page,
      queryOptions.limit,
      'polizas',
      queryOptions.polizaId,
      queryOptions.polizaNombre,
      queryOptions.creationDate
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
