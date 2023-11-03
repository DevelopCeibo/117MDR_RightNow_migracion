import { useState, useEffect } from 'react'
import { fetchContactos } from '../axios/fetchContacto'
import { ContactoType } from '../types'

type QueryOptions = {
  page: number
  limit: number
  contactoApellido: string
  contactoDni: string
  creationDate: string
}

type RowType = {
  total: number
  contactos: ContactoType[]
}

export function useContact(queryOptions: QueryOptions) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [rows, setRows] = useState<RowType>({ total: 0, contactos: [] })

  useEffect(() => {
    setIsLoading(true)
    fetchContactos(
      queryOptions.page,
      queryOptions.limit,
      'contactos',
      queryOptions.contactoApellido,
      queryOptions.contactoDni,
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
