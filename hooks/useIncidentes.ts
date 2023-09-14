import { useState, useEffect } from 'react'
import { fetchIncidentes } from '../axios/incidentes'
import { IncidenteType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  incidentNumber: string
  creationDate: string
}

type RowType = {
  total: number
  incidentes: IncidenteType[]
}

export function useIncidentes(queryOptions: QueryOptions) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rows, setRows] = useState<RowType>({ total: 0, incidentes: [] })

  useEffect(() => {
    setIsLoading(true)
    fetchIncidentes(
      queryOptions.page,
      queryOptions.limit,
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
