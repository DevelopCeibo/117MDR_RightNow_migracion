import { useState, useEffect } from 'react'
import { fetchRiesgo } from '../axios/fetchRiesgo'

import { RiesgoType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  riesgoContacto: string
  riesgoNumeroPoliza: string
  creationDate: string
}

type RowType = {
  total: number
  riesgos: RiesgoType[]
}

export function useRiesgo(queryOptions: QueryOptions) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rows, setRows] = useState<RowType>({ total: 0, riesgos: [] })

  useEffect(() => {
    setIsLoading(true)
    fetchRiesgo(
      queryOptions.page,
      queryOptions.limit,
      'riesgos',
      queryOptions.riesgoContacto,
      queryOptions.riesgoNumeroPoliza,
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
