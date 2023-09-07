import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../db'
import Incident from '../../models/incident'
import type { IncidentType } from '../../types'

connectDB()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IncidentType[]>
) {
  Incident.find({}).then((allIncidents: IncidentType[] | []) => {
    return res.status(200).send(allIncidents)
  })
}
