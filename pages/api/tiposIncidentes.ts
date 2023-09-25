import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB, { disconectDB } from '../../db'
import TipoIncidente from '../../models/tipoIncidente'
import type { TipoIncidenteType } from '../../types'
import { FilterQuery } from 'mongoose'

connectDB()

type QueryParams = {
  page?: string
  limit?: string
  incidentNumber?: string
  creationDate?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ tiposIncidentes: TipoIncidenteType[]; total: number }>
) {
  const {
    page = '0',
    limit = '25',
    incidentNumber,
    creationDate
  }: QueryParams = req.query

  let query: FilterQuery<TipoIncidenteType> = {}
  if (incidentNumber) {
    query['Nº de referencia'] = incidentNumber
  }
  if (creationDate) {
    const filterDate = new Date(creationDate)

    const day = filterDate.getDate()
    const month = filterDate.getMonth()
    const year = filterDate.getFullYear()
    const startDate = new Date(year, month, day + 1, 0, 0, 0, 0)
    const endDate = new Date(year, month, day + 1, 23, 59, 59, 999)

    query['Fecha de creación'] = {
      $gte: startDate,
      $lt: endDate
    }
  }

  Promise.all([
    TipoIncidente.find(query)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
    TipoIncidente.countDocuments(query)
  ]).then(([tiposIncidentes, total]) => {
    res.status(200).json({ tiposIncidentes, total })
  })
}
