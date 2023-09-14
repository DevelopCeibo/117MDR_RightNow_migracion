import axios from 'axios'

export async function fetchData(
  page: number,
  limit: number,
  modelName: string,
  incidentNumber?: string,
  creationDate?: string
) {
  const response = await axios.get(`api/${modelName}`, {
    params: {
      page: page,
      limit: limit,
      incidentNumber: incidentNumber,
      creationDate: creationDate
    }
  })
  return response.data
}
