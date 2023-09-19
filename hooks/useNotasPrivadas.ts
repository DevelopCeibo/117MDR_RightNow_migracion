import { useState, useEffect } from 'react'
import { fetchData } from '../axios/fetchData'
import { NotaPrivadaType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  incidentNumber: string
  creationDate: string
}

type RowType = {
  total: number
  notasPrivadas: NotaPrivadaType[]
}

export function useNotasPrivadas(queryOptions: QueryOptions) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rows, setRows] = useState<RowType>({ total: 0, notasPrivadas: [] })

  useEffect(() => {
    setIsLoading(true)
    fetchData(
      queryOptions.page,
      queryOptions.limit,
      'notasPrivadas',
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
