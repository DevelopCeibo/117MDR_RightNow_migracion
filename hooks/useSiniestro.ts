import { useState, useEffect } from 'react'
import { fetchSiniestro } from '../axios/fetchSiniestro'

import { SiniestroType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  siniestroNumero: string
  siniestroNumeroNuevo: string
  creationDate: string
}

type RowType = {
  total: number
  siniestros: SiniestroType[]
}

export function useSiniestro(queryOptions: QueryOptions) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rows, setRows] = useState<RowType>({ total: 0, siniestros: [] })

  useEffect(() => {
    setIsLoading(true)
    fetchSiniestro(
      queryOptions.page,
      queryOptions.limit,
      'siniestros',
      queryOptions.siniestroNumero,
      queryOptions.siniestroNumeroNuevo,
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
