import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB, { disconectDB } from '../../db'
import Organizacion from '../../models/organizacion'
import type { OrganizacionType } from '../../types'
import { FilterQuery } from 'mongoose'

connectDB()

type QueryParams = {
  page?: string
  limit?: string
  organizacionId?: string
  organizacionNombre?: string
  creationDate?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ organizaciones: OrganizacionType[]; total: number }>
) {
  const {
    page = '0',
    limit = '25',
    organizacionId,
    organizacionNombre,
    creationDate
  }: QueryParams = req.query

  let query: FilterQuery<OrganizacionType> = {}
  if (organizacionId) {
    query['ID_de_organizacion'] = organizacionId
  }
  if (organizacionNombre) {
    query['Nombre_de_organizacion'] = organizacionNombre
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
    Organizacion.find(query)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
    Organizacion.countDocuments(query)
  ]).then(([organizaciones, total]) => {
    res.status(200).json({ organizaciones, total })
  })
}
