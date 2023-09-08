import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../db'
import Incident from '../../models/incidente'
import type { IncidenteType } from '../../types'

connectDB()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ incidents: IncidenteType[]; total: number }>
) {
  const page = Number(req.query.page) || 0
  const limit = Number(req.query.limit) || 25

  Promise.all([
    Incident.find({})
      .skip(page * limit)
      .limit(limit),
    Incident.countDocuments({})
  ]).then(([incidents, total]) => {
    res.status(200).json({ incidents, total })
  })
}
