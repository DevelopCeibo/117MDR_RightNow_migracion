import type { NextApiRequest, NextApiResponse } from 'next'
import { FilterQuery } from 'mongoose'
import { connectDB } from '../../db'
import LogActividad from '../../models/logActividad'
import type { LogActividadType } from '../../types'

connectDB()

type QueryParams = {
  page?: string
  limit?: string
  incidentNumber?: string
  creationDate?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ logActividades: LogActividadType[]; total: number }>
) {
  const {
    page = '0',
    limit = '25',
    incidentNumber,
    creationDate
  }: QueryParams = req.query

  let query: FilterQuery<LogActividadType> = {}
  if (incidentNumber) {
    query['ID_de_incidente'] = incidentNumber
  }
  if (creationDate) {
    const filterDate = new Date(creationDate)

    const day = filterDate.getDate()
    const month = filterDate.getMonth()
    const year = filterDate.getFullYear()
    const startDate = new Date(year, month, day + 1, 0, 0, 0, 0)
    const endDate = new Date(year, month, day + 1, 23, 59, 59, 999)

    query['Fecha'] = {
      $gte: startDate,
      $lt: endDate
    }
  }

  Promise.all([
    LogActividad.find(query)
      .skip(Number(page) * Number(limit))
      .limit(Number(limit)),
    LogActividad.countDocuments(query)
  ]).then(([logActividades, total]) => {
    res.status(200).json({ logActividades, total })
  })
}
