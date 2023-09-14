import axios from 'axios'

export async function fetchIncidentes(
  page: number,
  limit: number,
  incidentNumber?: string,
  creationDate?: string
) {
  const response = await axios.get('api/incidentes', {
    params: {
      page: page,
      limit: limit,
      incidentNumber: incidentNumber,
      creationDate: creationDate
    }
  })
  return response.data
}
