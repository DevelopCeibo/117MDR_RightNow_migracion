import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB, { disconectDB } from '../../db'
import Incidente from '../../models/incidente'
import type { IncidenteType } from '../../types'
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
  res: NextApiResponse<{ incidentes: IncidenteType[]; total: number }>
) {
  const {
    page = '0',
    limit = '25',
    incidentNumber,
    creationDate
  }: QueryParams = req.query

  let query: FilterQuery<IncidenteType> = {}
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
    Incidente.find(query)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
    Incidente.countDocuments(query)
  ]).then(([incidentes, total]) => {
    res.status(200).json({ incidentes, total })
  })
}
