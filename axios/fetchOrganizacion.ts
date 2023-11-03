import axios from 'axios'

export async function fetchOrganizacion(
  page: number,
  limit: number,
  modelName: string,
  organizacionId?: string,
  organizacionNombre?: string,
  creationDate?: string
) {
  const response = await axios.get(`api/${modelName}`, {
    params: {
      page: page,
      limit: limit,
      organizacionId: organizacionId,
      organizacionNombre: organizacionNombre,
      creationDate: creationDate
    }
  })
  return response.data
}
