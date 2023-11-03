import type { NextApiRequest, NextApiResponse } from 'next'
import { FilterQuery } from 'mongoose'
import { connectDB } from '../../db'
import Contacto from '../../models/contacto'

import type { ContactoType } from '../../types'

connectDB()

type QueryParams = {
  page?: string
  limit?: string
  contactoApellido?: string
  contactoDni?: string
  creationDate?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ contactos: ContactoType[]; total: number }>
) {
  const {
    page = '0',
    limit = '25',
    contactoApellido,
    contactoDni,
    creationDate
  }: QueryParams = req.query

  let query: FilterQuery<ContactoType> = {}
  if (contactoApellido) {
    query['Apellido'] = contactoApellido
  }
  if (contactoDni) {
    query['DNI'] = contactoDni
  }
  if (creationDate) {
    const filterDate = new Date(creationDate)

    const day = filterDate.getDate()
    const month = filterDate.getMonth()
    const year = filterDate.getFullYear()
    const startDate = new Date(year, month, day + 1, 0, 0, 0, 0)
    const endDate = new Date(year, month, day + 1, 23, 59, 59, 999)

    query['Fecha_de_creacion'] = {
      $gte: startDate,
      $lt: endDate
    }
  }
  console.log('query', query)
  Promise.all([
    Contacto.find(query)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
    Contacto.countDocuments(query)
  ]).then(([contactos, total]) => {
    res.status(200).json({ contactos, total })
  })
}
