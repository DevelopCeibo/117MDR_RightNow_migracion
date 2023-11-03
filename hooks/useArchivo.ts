import { useState, useEffect } from 'react'
import { fetchArchivo } from '../axios/fetchArchivo'

import { ArchivoType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  archivoIncidentNumber: string
  archivoNombre: string
  creationDate: string
}

type RowType = {
  total: number
  archivos: ArchivoType[]
}

export function useArchivo(queryOptions: QueryOptions) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rows, setRows] = useState<RowType>({ total: 0, archivos: [] })

  useEffect(() => {
    setIsLoading(true)
    fetchArchivo(
      queryOptions.page,
      queryOptions.limit,
      'archivos',
      queryOptions.archivoIncidentNumber,
      queryOptions.archivoNombre,
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
