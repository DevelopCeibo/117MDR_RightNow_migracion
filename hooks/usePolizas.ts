import { useState, useEffect } from 'react'
import { fetchData } from '../axios/fetchData'
import { PolizaType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  incidentNumber: string
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
    fetchData(
      queryOptions.page,
      queryOptions.limit,
      'polizas',
      queryOptions.incidentNumber,
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
