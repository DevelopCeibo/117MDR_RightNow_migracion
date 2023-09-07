import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../db'
import Incident from '../../models/incident'
import type { IncidentType } from '../../types'

connectDB()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ incidents: IncidentType[]; total: number }>
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
