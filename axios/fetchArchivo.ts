import axios from 'axios'

export async function fetchArchivo(
  page: number,
  limit: number,
  modelName: string,
  archivoIncidentNumber?: string,
  archivoNombre?: string,
  creationDate?: string
) {
  const response = await axios.get(`api/${modelName}`, {
    params: {
      page: page,
      limit: limit,
      archivoIncidentNumber: archivoIncidentNumber,
      archivoNombre: archivoNombre,
      creationDate: creationDate
    }
  })
  return response.data
}
