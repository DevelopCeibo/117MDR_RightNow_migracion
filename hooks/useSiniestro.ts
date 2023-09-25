import { useState, useEffect } from 'react'
import { fetchData } from '../axios/fetchData'
import { SiniestroType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  incidentNumber: string
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
    fetchData(
      queryOptions.page,
      queryOptions.limit,
      'siniestros',
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
