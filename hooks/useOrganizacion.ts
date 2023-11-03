import { useState, useEffect } from 'react'
import { fetchOrganizacion } from '../axios/fetchOrganizacion'

import { OrganizacionType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  organizacionId: string
  organizacionNombre: string
  creationDate: string
}

type RowType = {
  total: number
  organizaciones: OrganizacionType[]
}

export function useOrganizacion(queryOptions: QueryOptions) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rows, setRows] = useState<RowType>({ total: 0, organizaciones: [] })

  useEffect(() => {
    setIsLoading(true)
    fetchOrganizacion(
      queryOptions.page,
      queryOptions.limit,
      'organizaciones',
      queryOptions.organizacionId,
      queryOptions.organizacionNombre,
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
